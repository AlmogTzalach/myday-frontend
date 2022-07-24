<template>
	<section class="main-nav flex">
		<div class="nav-btns">
			<el-tooltip effect="dark" content="Home page" placement="right" class="el-title">
				<!-- <button class="logo-svg" @click="goToHome()">logo</button> -->
				<img class="logo-svg" src="../assets/myday-logo.svg" @click="goToHome()" />
			</el-tooltip>
			<div class="nav-divider"></div>
			<!-- <el-tooltip
				effect="dark"
				content="Work management"
				placement="right"
				class="el-title"
			>
				<button>work</button>
			</el-tooltip> -->

			<el-tooltip effect="dark" content="Notifications" placement="right" class="el-title">
				<img src="../assets/icons/notifications.svg" alt="" />
			</el-tooltip>

			<el-tooltip effect="dark" content="Inbox" placement="right" class="el-title">
				<img src="../assets/icons/inbox.svg" alt="" />
			</el-tooltip>

			<el-tooltip effect="dark" content="My work" placement="right" class="el-title">
				<img src="../assets/icons/my-work.svg" alt="" />
			</el-tooltip>

			<el-tooltip effect="dark" content="Favorites" placement="right" class="el-title">
				<img src="../assets/icons/favorites.svg" alt="" />
			</el-tooltip>
		</div>

		<div class="nav-btns">
			<el-tooltip effect="dark" content="Invite members" placement="right" class="el-title">
				<img src="../assets/icons/invit-members.svg" alt="" />
			</el-tooltip>

			<el-tooltip effect="dark" content="Search" placement="right" class="el-title">
				<img src="../assets/icons/search.svg" alt="" />
			</el-tooltip>

			<el-tooltip effect="dark" content="Help" placement="right" class="el-title">
				<img src="../assets/icons/help.svg" alt="" />
			</el-tooltip>
			<img class="user-img" src="https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png"
				alt="" />
		</div>
	</section>
</template>

<script>
export default {
	name: 'main-nav',
	data() {
		return {}
	},
	methods: {
		goToHome() {
			this.$router.push('/')
		},
	},
}
</script>
