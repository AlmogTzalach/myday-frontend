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
				<div>Workspace</div>
				<button>Main workspace</button>
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
				/>
				<!-- <button class="btn search-btn">
					<img src="../assets/icons/search.svg" alt="" />
					<input
						type="text"
						v-model="filter.txt"
						placeholder="Search"
						@input="setFilter"
					/>
				</button> -->
			</div>
			<div class="boards-list flex">
				<button
					v-for="board in boards"
					class="btn"
					:class="{ active: boardId === board._id }"
					@click="goToBoard(board._id)"
				>
					<img src="../assets/icons/board.svg" alt="" />
					<span>{{ board.title }}</span>
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
		computed: {},
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
