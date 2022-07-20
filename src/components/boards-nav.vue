<template>
	<section class="boards-nav">
		<div class="workspace-details flex">
			<div>Workspace</div>
			<button>
				Main workspace
				<p>{{ open }}</p>
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
