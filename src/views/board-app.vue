<template>
	<section class="app-container grid">
		<main-nav :currBoard="currBoard" />
		<boards-nav
			:boards="boards"
			@setFilter="setFilter"
			@saveBoard="saveBoard"
			@deleteBoard="removeBoard"
		/>
		<board-details />
	</section>
</template>

<script>
import mainNav from '@/components/main-nav.vue'
import boardsNav from '@/components/boards-nav.vue'
import boardDetails from './board-details.vue'
import { socketService } from '../services/socket-service'

export default {
	name: 'board-app',

	data() {
		return {}
	},
	created() {
		socketService.on('boardUpdate', this.updateBoard)
	},
	methods: {
		updateBoard(board) {
			this.$store.commit({ type: 'saveBoard', newBoard: board })
		},
		setFilter(filter) {
			filter = JSON.parse(JSON.stringify(filter))
			this.$store.commit({ type: 'setBoardFilter', filter })
		},
		saveBoard() {
			this.$store.dispatch({ type: 'saveBoard' })
		},
		removeBoard(boardId) {
			this.$store.dispatch({ type: 'removeBoard', boardId })
		},
	},
	computed: {
		currBoard() {
			return this.$store.getters.currBoard
		},
		boards() {
			return this.$store.getters.boardsToDisplay
		},
	},

	components: {
		mainNav,
		boardsNav,
		boardDetails,
	},
}
</script>
