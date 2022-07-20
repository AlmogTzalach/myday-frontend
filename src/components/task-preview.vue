<template>
	<div class="flex">
		<p>{{ task.id }}</p>
		<p>{{ task.title }}</p>
		<p>{{ task.statusId }}</p>
		<p>{{ task.priorityId }}</p>
		<p>People</p>
		<p>{{ task.date }}</p>
		<p>{{ task.checkbox }}</p>
		<p>{{ task.link }}</p>
		<p>{{ task.txt }}</p>
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
