<template>
	<section class="boards-nav">
		<div class="workspace-details">
			<div>Workspace</div>
			<button>
				Main workspace <span>{{ open }}</span>
			</button>
		</div>
	</section>
</template>

<script>
export default {
	name: "boards-nav",
	data() {
		return {}
	},
	computed: {
		open() {
			return ">"
		},
	},
}
</script>
