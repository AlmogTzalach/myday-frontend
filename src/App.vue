<template>
	<router-view />
</template>

<script>
export default {
	created() {
		this.$store.dispatch({ type: 'loadBoards' })
		this.$store.dispatch({ type: 'loadUsers' })
	},
}
</script>
