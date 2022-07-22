<template>
	<section class="board-group">
		<div class="group-title">
			<img src="../assets/icons/down.svg" alt="" />
			<h4>{{ group.title }}</h4>
		</div>

		<div class="group-table">
			<!-- table header -->
			<div class="group-header-row task-row grid">
				<div class="task-name task-title">
					<p>Task</p>
				</div>
				<div class="task-data grid">
					<p>Status</p>
					<p>Priority</p>
					<p>People</p>
					<p>Date</p>
					<p>Checkbox</p>
					<p>Link</p>
					<p>Text</p>
					<p class="empty-data"></p>
				</div>
			</div>

			<!-- table content -->
			<draggable :list="currGroup.tasks" @end="onTaskMoved">
				<div
					v-for="task in currGroup.tasks"
					:key="task.id"
					@drop="onTaskMoved"
				>
					<task-preview :task="task" :currGroup="group.id" />
				</div>
			</draggable>

			<!-- table footer -->
			<div class="group-footer">
				<div class="add-task-line grid">
					<p
						contenteditable
						class="add-task-input"
						@focus="onTaskFocus"
						@blur="onTaskBlur"
						@keyup.enter="onAddTask"
					>
						+ Add Task
					</p>

					<div></div>
				</div>
			</div>
		</div>
		<div class="task-summary grid">
			<div class="empty-cell"></div>
			<div class="task-data grid">
				<div v-for="index in 7"></div>
				<div></div>
			</div>
		</div>
	</section>
</template>

<script>
import taskPreview from './task-preview.vue'
import { VueDraggableNext } from 'vue-draggable-next'

export default {
	name: 'boardGroup',

	props: {
		group: Object,
		filter: Object,
	},

	data() {
		return {
			currGroup: {},
		}
	},

	computed: {},

	methods: {
		onTaskFocus(el) {
			el.target.placeholder = '+ Add Task'
			el.target.innerText = ''
		},
		onTaskBlur(el) {
			el.target.innerText = '+ Add Task'
		},
		onAddTask(el) {
			const name = el.target.innerText
			el.target.blur()
			if (!name) {
				this.onTaskBlur(el)
				return
			}
			this.$store.dispatch({
				type: 'addTask',
				name,
				groupId: this.group.id,
				addToEnd: true,
			})
		},
		onTaskMoved() {
			this.$emit('taskMoved', this.currGroup)
		},
		groupToDisply() {},
	},

	created() {},

	watch: {
		group: {
			handler() {
				this.currGroup = JSON.parse(JSON.stringify(this.group))
			},
			immediate: true,
			deep: true,
		},
	},

	components: {
		taskPreview,
		draggable: VueDraggableNext,
	},
}
</script>
