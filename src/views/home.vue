<template>
	<section class="homepage-container">
		<header class="homepage-header flex space-between align-center">
			<div class="logo-container flex align-center">
				<img src="../assets/monday_logo_icon.png" />
				<h1 class="logo-title">myday</h1>
			</div>
			<nav class="homepage-nav flex align-center">
				<router-link to="/login">Log in</router-link>
				<button @click="getStarted()" class="get-started-btn flex">
					Get started <img src="../assets/icons/arrow-right.svg" />
				</button>
			</nav>
		</header>

		<div class="hero text-center">
			<div class="stars-group-1"></div>
			<div class="stars-group-2"></div>
			<div class="stars-group-3"></div>
			<div class="stars-group-4"></div>

			<h1 class="first">Project management</h1>
			<h1>made delightfully simple</h1>
			<h3>All your task management needs met in one app</h3>
			<div class="features-promo-container flex space-around">
				<div class="feature-promo">
					<h4>Project management</h4>
				</div>
				<div class="feature-promo">
					<h4>Team leading tools</h4>
				</div>
				<div class="feature-promo">
					<h4>Task distribution</h4>
				</div>
				<div class="feature-promo">
					<h4>Schedule arrangement</h4>
				</div>
				<div class="feature-promo">
					<h4>Productivity statistics</h4>
				</div>
			</div>
			<button @click="getStarted()" class="get-started-btn flex">
				Get started <img src="../assets/icons/arrow-right.svg" />
			</button>
		</div>
		<!-- <div class="homepage-background">
			<div class="carousel-container">
				<el-carousel
					trigger="click"
					:interval="4000"
					:type="isWideScreen"
					height="200px"
				>
					<el-carousel-item v-for="item in 3" :key="item">
						<img src="../assets/myday-app.jpeg" />
					</el-carousel-item>
				</el-carousel>
			</div>

			<div class="homepage-side-by-side flex text-center space-between">
				<div class="left-side">
					<p>
						The Work OS that lets you shape workflows,
						<span>your way</span>
					</p>
				</div>
				<div class="right-side flex column align-center">
					<p>
						Boost your team's alignment, efficiency, and productivity by
						customizing any workflow to fit your needs.
					</p>
					<button @click="getStarted()" class="get-started-btn flex">
						Get started <img src="../assets/icons/arrow-right.svg" />
					</button>
				</div>
			</div>
		</div> -->
	</section>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			showSignUpModal: false
		}
	},
	methods: {
		getStarted() {
			const boardId = this.$store.getters.boards[0]._id
			const loggedUser = this.$store.getters.loggedUser
			if (loggedUser) this.$router.push(`/board/${boardId}`)
			else {
				this.$store.commit({
					type: 'setLoggedUser',
					user: {
						_id: 'abcskjdsmmc',
						fullName: 'Guest',
						imgUrl: 'https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg'
					}
				})
				this.$router.push(`/board/${boardId}`)
			}
		},
	},
	computed: {
		isWideScreen() {
			const vpW = window.innerWidth
			return vpW > 900 ? 'card' : ''
		},
	},
}
</script>

<style>
</style>
