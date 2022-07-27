// import { boardService } from '../../services/board-service'
import { socketService } from '../../services/socket-service'
import { boardService } from '../../services/board-async-service'

export default {
	state: {
		boards: [],
		currBoard: null,
		boardsFilter: {
			txt: '',
		},
	},
	getters: {
		boards({ boards }) {
			return boards
		},
		boardsToDisplay({ boards, boardsFilter }) {
			const { txt } = boardsFilter
			const regexTxt = new RegExp(txt, 'i')
			let filteredBoards = boards.filter(board => regexTxt.test(board.title))
			return filteredBoards
		},
		currBoard({ currBoard }) {
			return currBoard
		},
		task({ currBoard }, { groupId, taskId }) {
			const currGroup = currBoard.groups.find(group => group.id === groupId)
			return currGroup.tasks.find(task => task.id === taskId)
		},
		status({ currBoard }) {
			return currBoard.labels.status
		},
		priorities({ currBoard }) {
			return currBoard.labels.priority
		},
		cmpsOrder({ currBoard }) {
			return currBoard.cmpsOrder
		},
		statusInUse({ currBoard }) {
			const statusInUse = []
			currBoard.groups.forEach(group => {
				group.tasks.forEach(task => {
					if (!statusInUse.includes(task.statusId))
						statusInUse.push(task.statusId)
				})
			})
			return statusInUse
		},
		priorityInUse({ currBoard }) {
			const priorityInUse = []
			currBoard.groups.forEach(group => {
				group.tasks.forEach(task => {
					if (!priorityInUse.includes(task.priorityId))
						priorityInUse.push(task.priorityId)
				})
			})
			return priorityInUse
		},
	},
	mutations: {
		setBoards(state, { boards }) {
			state.boards = boards
			state.currBoard = boards[0]
		},
		setBoard(state, { boardId }) {
			const board = state.boards.find(board => board._id === boardId)
			state.currBoard = board
		},
		setBoardFilter(state, { filter }) {
			state.boardsFilter = filter
		},
		removeTask(state, { groupId, taskId }) {
			const group = state.currBoard.groups.find(group => group.id === groupId)
			const idx = group.tasks.findIndex(task => task.id === taskId)
			group.tasks.splice(idx, 1)
		},
		updateTask(state, { groupId, newTask }) {
			const group = state.currBoard.groups.find(group => group.id === groupId)
			let idx = group.tasks.findIndex(task => task.id === newTask.id)
			group.tasks.splice(idx, 1, newTask)
		},
		updateStatusLabels(state, { labels }) {
			state.currBoard.labels.status = labels
		},
		updatePriorityLabels(state, { labels }) {
			state.currBoard.labels.priority = labels
		},
		addStatusLabel(state, { emptyLabel }) {
			state.currBoard.labels.status.push(emptyLabel)
		},
		addPriorityLabel(state, { emptyLabel }) {
			state.currBoard.labels.priority.push(emptyLabel)
		},
		removeStatusLabel(state, { labelId }) {
			const labels = state.currBoard.labels.status
			const idx = labels.findIndex(label => labelId === label.id)
			labels.splice(idx, 1)
		},
		removePriorityLabel(state, { labelId }) {
			const labels = state.currBoard.labels.priority
			const idx = labels.findIndex(label => labelId === label.id)
			labels.splice(idx, 1)
		},
		addTask(state, { newTask, groupId, addToEnd }) {
			const group = state.currBoard.groups.find(group => group.id === groupId)
			addToEnd ? group.tasks.push(newTask) : group.tasks.unshift(newTask)
		},
		addGroup(state, { newGroup, addToEnd }) {
			if (addToEnd) {
				state.currBoard.groups.push(newGroup)
			} else {
				state.currBoard.groups.unshift(newGroup)
			}
		},
		deleteGroup(state, { groupId }) {
			const idx = state.currBoard.groups.findIndex(
				group => group.id === groupId
			)
			state.currBoard.groups.splice(idx, 1)
		},
		saveBoard(state, { newBoard }) {
			let idx = state.boards.findIndex(board => board._id === newBoard._id)
			state.boards.splice(idx, 1, newBoard)
			state.currBoard = newBoard
		},
		addBoard(state, { board }) {
			state.boards.unshift(board)
			state.currBoard = board
		},
		removeBoard(state, { boardId }) {
			const idx = state.boards.findIndex(board => boardId === board._id)
			state.boards.splice(idx, 1)
			state.currBoard = state.boards[0]
		},
	},
	actions: {
		async removeStatusLabel({ commit, state }, { labelId }) {
			commit({ type: 'removeStatusLabel', labelId })
			await boardService.save(state.currBoard)
			// socketService.emit('board-topic', boardId)
		},
		async removePriorityLabel({ commit, state }, { labelId }) {
			commit({ type: 'removePriorityLabel', labelId })
			await boardService.save(state.currBoard)
		},
		async addStatusLabel({ commit, state }) {
			const emptyLabel = boardService.getEmptyLabel()
			commit({ type: 'addStatusLabel', emptyLabel })
			await boardService.save(state.currBoard)
		},
		async addPriorityLabel({ commit, state }) {
			const emptyLabel = boardService.getEmptyLabel()
			commit({ type: 'addPriorityLabel', emptyLabel })
			await boardService.save(state.currBoard)
		},
		async updateStatusLabels({ commit, state }, { labels }) {
			commit({ type: 'updateStatusLabels', labels })
			await boardService.save(state.currBoard)
		},
		async updatePriorityLabels({ commit, state }, { labels }) {
			commit({ type: 'updatePriorityLabels', labels })
			await boardService.save(state.currBoard)
		},
		async loadBoards({ commit }) {
			const boards = await boardService.query()
			commit({ type: 'setBoards', boards })
		},
		async removeTask({ commit, state }, { groupId, taskId }) {
			commit({ type: 'removeTask', groupId, taskId })
			socketService.emit('updateBoard', state.currBoard)
			await boardService.save(state.currBoard)
		},
		async updateTask({ commit, state }, { groupId, newTask }) {
			commit({ type: 'updateTask', groupId, newTask })
			socketService.emit('updateBoard', state.currBoard)
			await boardService.save(state.currBoard)
		},
		async addTask({ commit, state }, { groupId, name, addToEnd = false }) {
			const newTask = boardService.getEmptyTask()
			newTask.title = name
			commit({ type: 'addTask', newTask, groupId, addToEnd })
			socketService.emit('updateBoard', state.currBoard)
			await boardService.save(state.currBoard)
		},
		async addGroup({ state, commit }, { addToEnd }) {
			const newGroup = boardService.getEmptyGroup()
			newGroup.style = boardService.getRandomGroupClr()
			commit({ type: 'addGroup', newGroup, addToEnd })
			socketService.emit('updateBoard', state.currBoard)
			await boardService.save(state.currBoard)
		},
		async saveBoard({ state, commit }, { newBoard }) {
			let board = !newBoard ? boardService.getEmptyBoard() : newBoard
			// console.log(board, 'board to add')

			if (board._id) {
				commit({ type: 'saveBoard', newBoard: board })
				await boardService.save(board)
			} else {
				const { insertedId } = await boardService.save(board)
				// console.log(insertedId, 'addboard')
				board._id = insertedId
				commit({ type: 'addBoard', board })
			}
			socketService.emit('updateBoard', state.currBoard)
		},
		async deleteGroup({ state, commit }, { groupId }) {
			commit({ type: 'deleteGroup', groupId })
			await boardService.save(state.currBoard)
		},
		async removeBoard({ commit }, { boardId }) {
			await boardService.remove(boardId)
			commit({ type: 'removeBoard', boardId })
		},
	},
}
