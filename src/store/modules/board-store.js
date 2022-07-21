// import { boardService } from '@/services/board-service.js'
import { boardService } from '../../services/board-service'

export default {
	state: {
		boards: [],
		currBoard: null,
	},
	getters: {
		boards({ boards }) {
			return boards
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
	},
	mutations: {
		setBoards(state, { boards }) {
			state.boards = boards
			state.currBoard = boards[0]
		},
		setBoard(state, { currBoard }) {
			state.currBoard = currBoard
		},
		removeTask(state, { groupId, taskId }) {
			const group = state.currBoard.groups.find((group) => group.id === groupId)
			const idx = group.tasks.findIndex((task) => task.id === taskId)
			group.tasks.splice(idx, 1)
		},
		updateTask(state, { groupId, newTask }) {
			const group = state.currBoard.groups.find((group) => group.id === groupId)
			let idx = group.tasks.findIndex((task) => task.id === newTask.id)
			group.tasks.splice(idx, 1, newTask)
		},
		addTask(state, { newTask, groupId, addToEnd }) {
			const group = state.currBoard.groups.find((group) => group.id === groupId)
			addToEnd ? group.tasks.push(newTask) : group.tasks.unshift(newTask)
		},
		setBoard(state, { boardId }) {
			const board = state.boards.find((board) => board._id === boardId)
			state.currBoard = board
		},
	},
	actions: {
		async loadBoards({ commit }) {
			const boards = await boardService.query()
			commit({ type: 'setBoards', boards })
		},

		async removeTask({ commit }, { groupId, taskId }) {
			// await boardService.removeTask(currBoard._id, groupId, taskId)
			commit({ type: 'removeTask', groupId, taskId })
		},
		async updateTask({ commit }, { groupId, newTask }) {
			commit({ type: 'updateTask', groupId, newTask })
		},
		async addTask({ commit }, { groupId, name, addToEnd = false }) {
			const newTask = boardService.getEmptyTask()
			newTask.title = name
			commit({ type: 'addTask', newTask, groupId, addToEnd })
		},
	},
}
