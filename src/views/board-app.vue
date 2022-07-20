<template>
	<main-nav></main-nav>
	<board-header></board-header>
	<board-filter></board-filter>
	<board-group></board-group>
</template>

<script>
	import mainNav from '@/components/main-nav.vue'
	import boardHeader from '@/components/board-header.vue'
	import boardFilter from '@/components/board-filter.vue'
	import boardGroup from '@/components/board-group.vue'
	import taskDetails from '@/components/task-details.vue'

	export default {
		name: 'board-app',
		components: {
			mainNav,
			boardHeader,
			boardFilter,
			boardGroup,
			taskDetails,
		},
	}
</script>
