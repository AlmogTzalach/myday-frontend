<template>
	<div class="task-preview task-row grid">
		<div class="task-name name-cell grid">
			<div class="edit-title">
				<p contenteditable @input="onTitleUpdate" class="task-title">
					{{ currTask.title }}
				</p>
			</div>
			<span @click="onDelete">delete</span>
		</div>
		<div class="task-data grid">
			<component :is="'statusCmp'" :statusId="task.statusId"></component>
			<component :is="'priorityCmp'" :priorityId="task.priorityId"></component>
			<component :is="'peopleCmp'" :people="task.people"></component>
			<component :is="'dateCmp'" :date="task.date"></component>
			<component :is="'checkboxCmp'" :checkbox="task.checkbox" @onToggleCheckbox="toggleCheckbox"></component>
			<component :is="'linkCmp'" :link="task.link"></component>
			<!-- <p>{{ task.link }}</p> -->
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
import linkCmp from './task-attributes/link-cmp.vue'

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
		onTaskUpdate() {
			this.$store.dispatch({
				type: 'updateTask',
				groupId: this.currGroup,
				newTask: JSON.parse(JSON.stringify(this.currTask)),
			})
		},
		onTitleUpdate(el) {
			this.currTask.title = el.target.innerText
			this.onTaskUpdate()
		},
		toggleCheckbox() {
			this.currTask.checkbox = !this.currTask.checkbox
			this.onTaskUpdate()
		}
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
		linkCmp
	},
}
</script>
