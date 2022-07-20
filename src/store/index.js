import { createStore } from 'vuex'
import userStore from './modules/user-store'
import boardStore from './modules/board-store'

const store = createStore({
	strict: true,
	modules: {
		userStore,
		boardStore,
	},
})

export default store
