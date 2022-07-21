<template>
	<header class="homepage-header flex space-between align-center">
		<div class="logo">
			<div class="logo-img"></div>
			<h1>Myday</h1>
		</div>
		<nav class="homepage-nav">
			<router-link to="/board/1000">Login</router-link>
			<button>Get Started</button>
		</nav>
	</header>

	<div class="hero flex column align-center">
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
.homepage-header {
	padding: 1em;
	margin-bottom: 1.5em;
}

.feature-promo {
	border: 1px solid rgba(255,255,255,0.3);
	border-radius: 8px;
	padding: 1.5em;
}

.hero {
	background-image: linear-gradient(to bottom,rgb(27, 31, 60),rgb(42, 48, 94) );
	color: white;
	height: 500px;
}

.hero>* {
	margin-bottom: 3em;
}

.features-promo {
	width: 100%;
}
</style>