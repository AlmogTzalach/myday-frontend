<template>
	<section class="app-container grid">
		<main-nav></main-nav>
		<boards-nav></boards-nav>

		<div>
			<board-header></board-header>
			<board-filter></board-filter>
			<div v-for="group in currBoard.groups" :key="group.id">
				<board-group :group="group" />
			</div>
		</div>
	</section>
</template>

<script>
	import mainNav from '@/components/main-nav.vue'
	import boardsNav from '@/components/boards-nav.vue'
	import boardHeader from '@/components/board-header.vue'
	import boardFilter from '@/components/board-filter.vue'
	import boardGroup from '@/components/board-group.vue'
	import taskDetails from '@/components/task-details.vue'

	export default {
		name: 'board-app',

		data() {
			return {}
		},

		computed: {
			boards() {
				return this.$store.getters.boards
			},
			currBoard() {
				return this.boards[0]
			},
		},

		components: {
			mainNav,
			boardHeader,
			boardFilter,
			boardGroup,
			taskDetails,
			boardsNav,
		},
	}
</script>
