import { boardService } from '../../services/board-service'
// import { socketService } from '../../services/socket.service'
// import { boardService } from '../../services/board-async-service'

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
			let filteredBoards = boards.filter((board) => regexTxt.test(board.title))
			return filteredBoards
		},
		currBoard({ currBoard }) {
			return currBoard
		},
		task({ currBoard }, { groupId, taskId }) {
			const currGroup = currBoard.groups.find((group) => group.id === groupId)
			return currGroup.tasks.find((task) => task.id === taskId)
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
	},
	mutations: {
		setBoards(state, { boards }) {
			state.boards = boards
			state.currBoard = boards[0]
		},
		setBoard(state, { boardId }) {
			const board = state.boards.find((board) => board._id === boardId)
			state.currBoard = board
		},
		setBoardFilter(state, { filter }) {
			state.boardsFilter = filter
		},
		removeTask(state, { groupId, taskId }) {
			const group = state.currBoard.groups.find(
				(group) => group.id === groupId
			)
			const idx = group.tasks.findIndex((task) => task.id === taskId)
			group.tasks.splice(idx, 1)
		},
		updateTask(state, { groupId, newTask }) {
			const group = state.currBoard.groups.find(
				(group) => group.id === groupId
			)
			let idx = group.tasks.findIndex((task) => task.id === newTask.id)
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
		addTask(state, { newTask, groupId, addToEnd }) {
			const group = state.currBoard.groups.find(
				(group) => group.id === groupId
			)
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
				(group) => group.id === groupId
			)
			state.currBoard.groups.splice(idx, 1)
		},
		saveBoard(state, { newBoard }) {
			let board = state.boards.findIndex((board) => board._id === newBoard._id)
			board = newBoard
			state.currBoard = newBoard
		},
	},
	actions: {
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
			console.log(boards, 'boards')
			commit({ type: 'setBoards', boards })
		},
		async removeTask({ commit, state }, { groupId, taskId }) {
			commit({ type: 'removeTask', groupId, taskId })
			await boardService.save(state.currBoard)
		},
		async updateTask({ commit, state }, { groupId, newTask }) {
			commit({ type: 'updateTask', groupId, newTask })
			await boardService.save(state.currBoard)
		},
		async addTask({ commit, state }, { groupId, name, addToEnd = false }) {
			const newTask = boardService.getEmptyTask()
			newTask.title = name
			commit({ type: 'addTask', newTask, groupId, addToEnd })
			await boardService.save(state.currBoard)
		},
		async addGroup({ state, commit }, { addToEnd }) {
			const newGroup = boardService.getEmptyGroup()
			newGroup.style = boardService.getRandomGroupClr()
			commit({ type: 'addGroup', newGroup, addToEnd })
			socketService.emit('addGroup', newGroup, addToEnd)
			await boardService.save(state.currBoard)
		},
		async saveBoard({ commit }, { newBoard }) {
			// const boardToAdd = !newBoard ? boardService.getEmptyBoard() : newBoard

			commit({ type: 'saveBoard', newBoard })
			await boardService.save(newBoard)
		},
		async deleteGroup({ state, commit }, { groupId }) {
			commit({ type: 'deleteGroup', groupId })
			await boardService.save(state.currBoard)
		},
	},
}
