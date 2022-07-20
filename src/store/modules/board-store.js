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
		board({ currBoard }) {
			return currBoard
		},
		task({ currBoard }, { groupId, taskId }) {
			const currGroup = currBoard.groups.find((group) => group.id === groupId)
			return currGroup.tasks.find((task) => task.id === taskId)
		},
	},
	mutations: {
		setBoards(state, { boards }) {
			state.boards = boards
		},
		setBoard(state, { currBoard }) {
			state.currBoard = currBoard
		},
	},
	actions: {
		async loadBoards({ commit }) {
			const boards = await boardService.query()
			commit({ type: 'setBoards', boards })
		},
	},
}
