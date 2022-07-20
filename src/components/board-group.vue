<template>
	<h4>{{ group.title }}</h4>
	<div v-for="task in group.tasks" :key="task.id">
		<task-preview class="task-preview" :task="task" />
	</div>
</template>

<script>
	import taskPreview from './task-preview.vue'

	export default {
		name: 'boardGroup',

		props: {
			group: Object,
		},

		components: {
			taskPreview,
		},
	}
</script>
