<template>
	<header class="homepage-header flex space-between align-center">
		<div class="logo">
			<div class="logo-img"></div>
			<h1>Myday</h1>
		</div>
		<nav class="homepage-nav">
			<router-link to="/board/1000"><button class="get-started-btn flex">Get started <img src="../assets/icons/arrow-right.svg"></button></router-link>
		</nav>
	</header>

	<div class="hero text-center">
		<div class="stars-group-1"></div>
		<div class="stars-group-2"></div>
		<div class="stars-group-3"></div>
		<div class="stars-group-4"></div>
		<h1>Project management made delightfully simple</h1>
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
	</div>


</template>
	

<script>
export default {
	name: 'home',
}
</script>

<style>
</style>