<template>
	<section class="boards-nav">
		<div class="board-toggle-container" @click="toggleBoardsNav">
			<img class="toggle-boards-nav" src="../assets/icons/arrow-left.svg" />
		</div>
		<div class="close-boards-btn" @click="toggleBoardsNav">
			<el-icon><Close /></el-icon>
		</div>
		<div class="nav-content">
			<div class="workspace-details flex">
				<div class="name">Workspace</div>
				<button class="flex workspace">
					<div class="workspace-icon">M</div>
					<div>Main workspace</div>
				</button>
			</div>
			<div class="workspace-add flex">
				<button class="btn" @click="addBoard()">
					<el-icon>
						<Plus />
					</el-icon>
					<span>Add</span>
				</button>

				<el-input
					v-model="filter.txt"
					class="w-50 m-2 search-input"
					placeholder="Search"
					@input="setFilter"
				>
					<template #prefix>
						<img src="../assets/icons/search.svg" alt="" />
					</template>
				</el-input>
			</div>

			<div class="boards-list flex">
				<button
					v-for="board in boards"
					class="btn"
					:class="{ active: boardId === board._id }"
				>
					<div class="flex go-board" @click="goToBoard(board._id)">
						<img src="../assets/icons/board.svg" alt="" />
						<span>{{ board.title }}</span>
					</div>

					<el-popover
						placement="bottom-start"
						:width="264"
						trigger="click"
						:show-arrow="false"
						:hide-after="0"
						:offset="0"
					>
						<template #reference>
							<div class="board-menu-btn">
								<img src="../assets/icons/menu.svg" alt="menu" />
							</div>
						</template>
						<div class="task-popover">
							<button
								class="task-popover-line"
								@click="deleteBoard(board._id)"
								:class="{ disabled: boards.length <= 1 }"
								:disabled="boards.length <= 1"
							>
								<!-- <div -->
								<img src="../assets/icons/delete.svg" />
								<span>Delete</span>
							</button>
							<!-- </div> -->
						</div>
					</el-popover>
				</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'boards-nav',
	props: {
		boards: Array,
	},
	data() {
		return {
			filter: {
				txt: '',
			},
			boardId: null,
			navOpen: false,
		}
	},
	methods: {
		toggleBoardsNav() {
			document.body.classList.toggle('side-bar-open')
		},
		goToBoard(boardId) {
			socketService.emit('board-topic', boardId)
			this.$router.push(`/board/${boardId}`)
			this.$store.commit({ type: 'setBoard', boardId })
		},
		setFilter() {
			this.$emit('setFilter', this.filter)
		},
		addBoard() {
			this.$emit('saveBoard')
		},
		deleteBoard(boardId) {
			this.$emit('deleteBoard', boardId)
		},
	},
	watch: {
		'$route.params.boardId': {
			handler(boardId) {
				this.boardId = boardId
			},
			immediate: true,
		},
	},
}
</script>
