<template>
	<div class="task-preview task-row grid">
		<div class="task-name name-cell grid">
			<div class="edit-title">
				<p contenteditable @input="onTitleUpdate" class="task-title">
					{{ currTask.title }}
				</p>
			</div>
			<!-- <input type="text" v-model="currTask.title" @input="onTitleUpdate" /> -->
			<!-- <p>{{ task.title }}</p> -->
			<span @click="onDelete">delete</span>
		</div>
		<div class="task-data grid">
			<component :is="'statusCmp'" :statusId="task.statusId"></component>
			<component :is="'priorityCmp'" :priorityId="task.priorityId"></component>
			<component :is="'peopleCmp'" :people="task.people"></component>
			<component :is="'dateCmp'" :date="task.date"></component>
			<component :is="'checkboxCmp'" :checkbox="task.checkbox"></component>
			<!-- <p>{{ task.checkbox }}</p> -->
			<p>{{ task.link }}</p>
			<p class="long-text">{{ task.txt }}</p>
			<p class="empty-data"></p>
		</div>
	</div>
</template>

<script>
	import statusCmp from './task-attributes/status-cmp.vue'
	import priorityCmp from './task-attributes/priority-cmp.vue'
	import peopleCmp from './task-attributes/people-cmp.vue'
	import dateCmp from './task-attributes/date-cmp.vue'
	import checkboxCmp from './task-attributes/checkbox-cmp.vue'

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
			onTitleUpdate(e) {
				this.currTask.title = e.target.innerText
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

		components: {
			statusCmp,
			priorityCmp,
			peopleCmp,
			dateCmp,
			checkboxCmp,
		},
	}
</script>
