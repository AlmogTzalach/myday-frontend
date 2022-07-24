<template>
	<section class="board-container" v-if="currBoard">
		<div class="board-header-filter">
			<board-header :board="currBoard" />

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
								<img src="../assets/icons/group.svg" />
								<span>New group of Tasks</span>
							</div>
						</div>
					</el-popover>
				</div>

				<board-filter @setFilter="setFilter" />
			</div>
		</div>

		<div class="groups-container">
			<draggable :list="currBoard.groups" @end="">
				<div v-for="group in currBoard.groups" :key="group.id">
					<board-group
						:group="group"
						:filter="groupFilter"
						draggable=".group-title"
						@taskMoved="updateGroup"
						@updateGroup="updateGroup"
						@deleteGroup="deleteGroup"
					/>
				</div>
				<button class="btn addBtn flex" @click="addGroup(true)">
					<img src="../assets/icons/add.svg" alt="" />
					<span>Add new group</span>
				</button>
			</draggable>
		</div>
	</section>
</template>

<script>
	import boardHeader from '@/components/board-header.vue'
	import boardFilter from '@/components/board-filter.vue'
	import boardGroup from '@/components/board-group.vue'
	import { VueDraggableNext } from 'vue-draggable-next'

	export default {
		name: 'board-detais',
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
			// onTaskMoved(newGroup) {
			// 	const boardCopy = JSON.parse(JSON.stringify(this.currBoard))
			// 	let idx = boardCopy.groups.findIndex((group) => group.id === newGroup.id)
			// 	boardCopy.groups.splice(idx, 1, newGroup)

			// 	this.$store.dispatch({ type: 'saveBoard', newBoard: boardCopy })
			// },
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
