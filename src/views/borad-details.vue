<template>
	<section class="board-container" v-if="currBoard">
		<board-header :board="currBoard" />

		<div class="flex main-actions-container">
			<div class="add-btns">
				<button class="btn1 add-task-btn" @click="addTask">New Task</button>
				<button class="btn2 add-task-btn">
					<img src="../assets/icons/down.svg" alt="" />
				</button>
			</div>

			<board-filter @setFilter="setFilter" />
		</div>

		<div class="groups-container">
			<div v-for="group in currBoard.groups" :key="group.id">
				<board-group :group="group" @taskMoved="onTaskMoved" />
			</div>
		</div>
	</section>
</template>

<script>
import { boardService } from '../services/board-service'
import boardHeader from '@/components/board-header.vue'
import boardFilter from '@/components/board-filter.vue'
import boardGroup from '@/components/board-group.vue'

export default {
	name: 'board-detais',
	data() {
		return {
			currBoard: null,
		}
	},
	// async created() {
	// 	const { boardId } = this.$route.params
	// 	const board = await boardService.getById(boardId)
	// 	this.currBoard = board
	// },
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
			let idx = boardCopy.groups.findIndex((group) => group.id === newGroup.id)
			boardCopy.groups.splice(idx, 1, newGroup)

			this.$store.dispatch({ type: 'saveBoard', newBoard: boardCopy })
		},
	},
	watch: {
		'$route.params.boardId': {
			async handler(boardId) {
				const board = await boardService.getById(boardId)
				this.currBoard = board
			},
			immediate: true,
		},
	},
	components: {
		boardHeader,
		boardFilter,
		boardGroup,
	},
}
</script>
