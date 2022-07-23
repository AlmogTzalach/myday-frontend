import { userService } from '@/services/user-service'

export default {
	state: {
		users: [],
		loggedUser: null,
	},
	mutations: {
		setUsers(state, { users }) {
			state.users = users
		},
	},
	getters: {
		users({ users }) {
			return users
		},
	},
	actions: {
		async loadUsers({ commit }) {
			const users = await userService.query()
			commit({ type: 'setUsers', users })
		},
	},
}
