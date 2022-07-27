import { createRouter, createWebHashHistory } from 'vue-router'
import home from '@/views/home.vue'
import boardApp from '@/views/board-app.vue'
import loginPage from '@/views/login.vue'
import signUpPage from '@/views/sign-up.vue'

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
		{
			path: '/login',
			name: 'loginPage',
			component: loginPage,
		},
		{
			path: '/signup',
			name: 'signUpPage',
			component: signUpPage,
		},
	],
})

export default router
