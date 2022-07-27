<template>
	<section class="board-container" v-if="currBoard">
		<div class="board-header-filter">
			<board-header :board="currBoard" @updateBoardTitle="updateBoardTitle" />

			<div class="flex main-actions-container">
				<div class="add-btns">
					<button class="btn1 add-task-btn" @click="addTask">
						New Task
					</button>

					<el-popover
						placement="bottom-start"
						:width="220"
						trigger="click"
						:show-arrow="false"
						:hide-after="0"
						:offset="0"
					>
						<template #reference>
							<button class="btn2 add-task-btn">
								<img src="../assets/icons/down.svg" alt="" />
							</button>
						</template>
						<div class="add-group-popover">
							<div
								class="add-group-popover-line"
								@click="addGroup(false)"
							>
								<!-- <img src="../assets/icons/group.svg" /> -->
								<span class="new-group-upper"
									>New group of Tasks</span
								>
							</div>
						</div>
					</el-popover>
				</div>

				<board-filter @setFilter="setFilter" />
			</div>
		</div>

		<div class="groups-container">
			<draggable
				:list="currBoard.groups"
				@end="onGroupMove"
				:disabled="isDraggable"
			>
				<div v-for="group in currBoard.groups" :key="group.id">
					<board-group
						:group="JSON.parse(JSON.stringify(group))"
						:filter="groupFilter"
						draggable=".group-title"
						@taskMoved="onTaskMoved"
						@updateGroup="updateGroup"
						@deleteGroup="deleteGroup"
						@cmpOrderChanged="cmpOrderChanged"
					/>
				</div>
			</draggable>
			<button class="btn addBtn flex" @click="addGroup(true)">
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
	import { VueDraggableNext } from 'vue-draggable-next'

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
				const currBoard = this.$store.getters.currBoard
				if (currBoard === undefined) return
				return JSON.parse(JSON.stringify(currBoard))
			},
			isDraggable() {
				return window.matchMedia('(any-hover: none)').matches
			},
		},

		methods: {
			updateBoardTitle(newBoard) {
				this.$store.dispatch({ type: 'saveBoard', newBoard })
			},
			addTask() {
				const firstGroupId = this.currBoard.groups[0].id
				this.$store.dispatch({
					type: 'addTask',
					groupId: firstGroupId,
					name: 'New Task',
				})
			},
			onTaskMoved(fromId, toId, oldIndex, newIndex) {
				const boardCopy = JSON.parse(JSON.stringify(this.currBoard))

				const oldGroup = boardCopy.groups.find(
					(group) => group.id === fromId
				)
				const newGroup = boardCopy.groups.find((group) => group.id === toId)
				const movedTask = oldGroup.tasks.splice(oldIndex, 1)[0]
				newGroup.tasks.splice(newIndex, 0, movedTask)

				this.$store.dispatch({ type: 'saveBoard', newBoard: boardCopy })
			},
			setFilter(filter) {
				this.groupFilter = filter
			},
			addGroup(addToEnd) {
				this.$store.dispatch({ type: 'addGroup', addToEnd })
			},
			updateGroup(newGroup) {
				const boardCopy = JSON.parse(JSON.stringify(this.currBoard))
				let idx = boardCopy.groups.findIndex(
					(group) => group.id === newGroup.id
				)
				boardCopy.groups.splice(idx, 1, newGroup)

				this.$store.dispatch({ type: 'saveBoard', newBoard: boardCopy })
			},
			deleteGroup(groupId) {
				this.$store.dispatch({ type: 'deleteGroup', groupId })
			},
			onGroupMove() {
				this.$store.dispatch({ type: 'saveBoard', newBoard: this.currBoard })
			},
			cmpOrderChanged(cmpsOrder) {
				const boardCopy = JSON.parse(JSON.stringify(this.currBoard))
				boardCopy.cmpsOrder = cmpsOrder
				this.$store.dispatch({ type: 'saveBoard', newBoard: boardCopy })
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
			draggable: VueDraggableNext,
		},
	}
</script>
