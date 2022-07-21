<template>
	<section class="boards-nav">
		<div class="workspace-details flex">
			<div>Workspace</div>
			<button>
				Main workspace
				<!-- <p>{{ open }}</p> -->
			</button>
		</div>
		<div class="boards-list">
			<button
				v-for="board in boards"
				class="btn"
				@click="setBoard(board._id)"
			>
				{{ board.title }}
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
		return {}
	},
	methods: {
		setBoard(boardId) {
			this.$store.commit({ type: 'setBoard', boardId })
		},
	},
	computed: {
		open() {
			return '>'
		},
	},
}
</script>
