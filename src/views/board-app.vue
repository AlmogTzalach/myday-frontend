<template>
	<section class="app-container grid">
		<main-nav />
		<boards-nav :boards="boards" @setFilter="setFilter" />
		<borad-details />
		<!-- <section class="board-container">
			<board-header :board="currBoard" />

			<div class="flex main-actions-container">
				<div class="add-btns">
					<button class="btn1 add-task-btn" @click="addTask">
						New Task
					</button>
					<button class="btn2 add-task-btn">
						<img src="../assets/icons/down.svg" alt="" />
					</button>
				</div>

				<board-filter></board-filter>
			</div>

			<div class="groups-container">
				<div v-for="group in currBoard.groups" :key="group.id">
					<board-group :group="group" @taskMoved="onTaskMoved" />
				</div>
			</div>
		</section> -->
	</section>
</template>

<script>
import mainNav from '@/components/main-nav.vue'
import boardsNav from '@/components/boards-nav.vue'
import boradDetails from './borad-details.vue'

//
// import boardHeader from '@/components/board-header.vue'
// import boardFilter from '@/components/board-filter.vue'
// import boardGroup from '@/components/board-group.vue'

//בשימוש??
import taskDetails from '@/components/task-details.vue'

export default {
	name: 'board-app',

	data() {
		return {}
	},

	methods: {
		setFilter(filter) {
			filter = JSON.parse(JSON.stringify(filter))
			this.$store.commit({ type: 'setBoardFilter', filter })
		},
		// addTask() {
		// 	const firstGroupId = this.currBoard.groups[0].id
		// 	this.$store.dispatch({
		// 		type: 'addTask',
		// 		groupId: firstGroupId,
		// 		name: 'New Task',
		// 	})
		// },
		// onTaskMoved(newGroup) {
		// 	const boardCopy = JSON.parse(JSON.stringify(this.currBoard))
		// 	let idx = boardCopy.groups.findIndex((group) => group.id === newGroup.id)
		// 	boardCopy.groups.splice(idx, 1, newGroup)
		// 	this.$store.dispatch({ type: 'saveBoard', newBoard: boardCopy })
		// },
	},

	computed: {
		boards() {
			return this.$store.getters.boardsToDisply
		},
		// currBoard() {
		// 	return this.$store.getters.currBoard
		// },
	},

	// watch: {
	// 	'$route.params.boardId': {
	// 		handler(boardId) {
	// 			console.log(boardId)
	// 		},
	// 		immediate: true,
	// 	},
	// },

	components: {
		mainNav,
		boardsNav,
		boradDetails,
		// boardHeader,
		// boardFilter,
		// boardGroup,
		taskDetails,
	},
}
</script>
