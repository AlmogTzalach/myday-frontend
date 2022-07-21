<template>
	<section class="app-container grid">
		<main-nav></main-nav>
		<boards-nav :boards="boards"></boards-nav>
		<!-- {{ currBoard }} -->

		<section class="board-container">
			<board-header :board="currBoard" />

			<div class="flex main-actions-container">
				<div class="add-btns">
					<button class="btn1 add-task-btn" @click="addTask">
						New Task
					</button>
					<button class="btn2 add-task-btn">></button>
				</div>

				<board-filter></board-filter>
			</div>
			<div v-for="group in currBoard.groups" :key="group.id">
				<board-group :group="group" @taskMoved="onTaskMoved" />
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
			const firstGroupId = this.currBoard.groups[0].id
			this.$store.dispatch({
				type: 'addTask',
				groupId: firstGroupId,
				name: 'New Task',
			})
		},
		onTaskMoved(newGroup) {
			const boardCopy = JSON.parse(JSON.stringify(this.currBoard))
			let idx = boardCopy.groups.findIndex(
				(group) => group.id === newGroup.id
			)
			boardCopy.groups.splice(idx, 1, newGroup)

			this.$store.dispatch({ type: 'saveBoard', newBoard: boardCopy })
		},
	},
	computed: {
		currBoard() {
			console.log(this.$store.getters.currBoard, 'curr')
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
		immediate: true,
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
