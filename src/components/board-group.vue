<template>
	<section class="board-group">
		<h4 class="group-title">{{ group.title }}</h4>

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
			<div v-for="task in group.tasks" :key="task.id">
				<task-preview :task="task" :currGroup="group.id" />
			</div>

			<!-- table footer -->
			<div class="group-footer">
				<div class="add-task-line grid">
					<span
						contenteditable
						class="add-task-input"
						@focus="onTaskFocus"
						@blur="onTaskBlur"
						@keyup.enter="onAddTask"
					>
						+Add Task
					</span>

					<div></div>
				</div>
				<div class="task-summary"></div>
			</div>
		</div>
	</section>
</template>

<script>
	import taskPreview from './task-preview.vue'

	export default {
		name: 'boardGroup',

		props: {
			group: Object,
		},

		methods: {
			onTaskFocus(el) {
				el.target.placeholder = '+Add Task'
				el.target.innerText = ''
			},
			onTaskBlur(el) {
				el.target.innerText = '+Add Task'
			},
			onAddTask(el) {
				const name = el.target.innerText
				el.target.blur()
				if (!name) {
					this.onTaskBlur(el)
					return
				}
				console.log(name)
			},
		},

		components: {
			taskPreview,
		},
	}
</script>
