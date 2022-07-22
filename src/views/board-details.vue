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
				<board-group
					:group="group"
					:filter="groupFilter"
					@taskMoved="onTaskMoved"
				/>
			</div>
			<button class="btn addBtn flex" @click="addGroup">
				<img src="../assets/icons/add.svg" alt="" />
				<span>Add new group</span>
			</button>
		</div>
	</section>
</template>

<script>
	import boardHeader from '@/components/board-header.vue'
	import boardFilter from '@/components/board-filter.vue'
	import boardGroup from '@/components/board-group.vue'

	export default {
		name: 'board-details',
		data() {
			return {
				groupFilter: {
					txt: '',
				},
			}
		},

		computed: {
			currBoard() {
				return this.$store.getters.currBoard
			},
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
			setFilter(filter) {
				this.groupFilter = filter
			},
			addGroup() {
				this.$store.dispatch({ type: 'addGroup', addToEnd: true })
			},
		},
		watch: {
			'$route.params.boardId': {
				handler(boardId) {
					this.$store.commit({ type: 'setBoard', boardId })
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
