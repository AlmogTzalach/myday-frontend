<template>
	<div class="task-preview task-row grid">
		<div class="task-name name-cell grid">
			<input
				type="text"
				v-model="currTask.title"
				@input="onTitleUpdate"
			/>
			<!-- <p>{{ task.title }}</p> -->
			<span @click="onDelete">delete</span>
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
		currGroup: String,
	},

	data() {
		return {
			currTask: null,
		}
	},

	methods: {
		onDelete() {
			this.$store.dispatch({
				type: 'removeTask',
				groupId: this.currGroup,
				taskId: this.task.id,
			})
		},
		onTitleUpdate() {
			this.$store.dispatch({
				type: 'updateTask',
				groupId: this.currGroup,
				newTask: JSON.parse(JSON.stringify(this.currTask)),
			})
		},
	},

	created() {
		this.currTask = JSON.parse(JSON.stringify(this.task))
	},
}
</script>
