<template>
	<section class="app-container grid">
		<main-nav />
		<boards-nav :boards="boards" @setFilter="setFilter" @saveBoard="saveBoard" />
		<!-- <div></div> -->
		<board-details />
	</section>
</template>

<script>
import mainNav from '@/components/main-nav.vue'
import boardsNav from '@/components/boards-nav.vue'
import boardDetails from './board-details.vue'

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
		saveBoard() {
			this.$store.dispatch({ type: 'saveBoard' })
		},
	},

	computed: {
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
