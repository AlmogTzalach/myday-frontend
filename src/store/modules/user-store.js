import { userService } from '@/services/user-service'
import { ElMessage } from 'element-plus'

export default {
	state: {
		users: [],
		loggedUser: null,
	},
	mutations: {
		setUsers(state, { users }) {
			state.users = users
		},
		setLoggedUser(state, { user }) {
			state.loggedUser = user
		},
	},
	getters: {
		users({ users }) {
			return users
		},
		loggedUser({ loggedUser }) {
			return loggedUser
		},
	},
	actions: {
		async signUp({ commit }, { userInfo }) {
			try {
				const user = await userService.signUp(userInfo)
				commit({ type: 'setLoggedUser', user })
			} catch (err) {
				ElMessage.error('Sign up failed')
			}
		},
		async logIn({ commit }, { credentials }) {
			try {
				const user = await userService.login(credentials)
				commit({ type: 'setLoggedUser', user })
			} catch (err) {
				ElMessage.error('Log in failed')
			}
		},
		async loadUsers({ commit }) {
			const users = await userService.query()
			commit({ type: 'setUsers', users })
		},
		loadLoggedUser({ commit }) {
			const user = userService.getLoggedInUser()
			commit({ type: 'setLoggedUser', user })
		},
	},
}
