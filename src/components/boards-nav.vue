<template>
	<section class="boards-nav">
		<div class="workspace-details flex">
			<div>Workspace</div>
			<button>Main workspace</button>
		</div>
		<div class="workspace-add flex">
			<button class="btn" @click="addBoard()">
				<el-icon><Plus /></el-icon>
				<span>Add</span>
			</button>
			<button class="btn search-btn">
				<img src="../assets/icons/search.svg" alt="" />
				<input
					type="text"
					v-model="filter.txt"
					placeholder="Search"
					@input="setFilter"
				/>
			</button>
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
		}
	},
	methods: {
		goToBoard(boardId) {
			this.$router.push(`/board/${boardId}`)
			this.$store.commit({ type: 'setBoard', boardId })
			// this.$store.commit({ type: 'setBoard', boardId })
		},
		setFilter() {
			this.$emit('setFilter', this.filter)
		},
		addBoard() {
			console.log('Add board')
			// this.$emit('saveBoard')
		},
	},
	watch: {
		'$route.params.boardId': {
			handler(boardId) {
				this.boardId = boardId
				console.log(boardId)
			},
			immediate: true,
		},
	},
}
</script>
