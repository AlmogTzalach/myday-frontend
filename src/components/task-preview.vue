<template>
	<div class="flex">
		<p>{{ task.id }}</p>
		<p>{{ task.title }}</p>
	</div>
</template>

<script>
	export default {
		name: 'taskPreview',

		props: {
			task: Object,
		},
	}
</script>
