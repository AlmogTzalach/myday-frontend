<template>
	<section class="app-container grid">
		<main-nav></main-nav>
		<boards-nav :boards="boards"></boards-nav>

		<section class="board-container">
			<board-header :board="currBoard" />

			<div class="flex main-actions-container">
				<div class="add-btns">
					<button class="btn1 add-task-btn" @click="addTask">New Task</button>
					<button class="btn2 add-task-btn">></button>
				</div>

				<board-filter></board-filter>
			</div>
			<div v-for="group in currBoard.groups" :key="group.id">
				<board-group :group="group" />
			</div>
		</section>
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

		methods: {
			addTask() {
				this.$store.dispatch({ type: 'addTask' })
			},
		},

		computed: {
			currBoard() {
				return this.$store.getters.currBoard
			},
		},

		watch: {
			'$route.params.boardId': {
				handler(boardId) {
					console.log(boardId)
				},
				immediate: true,
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
