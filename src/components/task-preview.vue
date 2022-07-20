<template>
	<div class="task-preview task-row grid">
		<div class="task-name name-cell grid">
			<p>{{ task.title }}</p>
			<span>+</span>
		</div>
		<div class="task-data grid">
			<p>{{ task.statusId }}</p>
			<p>{{ task.priorityId }}</p>
			<p>People</p>
			<p>{{ task.date }}</p>
			<p>{{ task.checkbox }}</p>
			<p>{{ task.link }}</p>
			<p class="long-text">{{ task.txt }}</p>
			<p class="empty-data"></p>
		</div>
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
