import { createRouter, createWebHashHistory } from 'vue-router'
import home from '@/views/home.vue'
import boardApp from '@/views/board-app.vue'

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: home,
		},
		{
			path: '/board/:boardId',
			name: 'boardApp',
			component: boardApp,
		},
	],
})

export default router
