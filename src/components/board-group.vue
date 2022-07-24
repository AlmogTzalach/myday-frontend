<template>
	<section class="board-group">
		<div class="group-title" :style="{ color: group.style.color }">
			<el-popover
				placement="bottom-start"
				:width="264"
				trigger="click"
				:show-arrow="false"
				:hide-after="0"
				:offset="0"
			>
				<template #reference>
					<div class="group-menu-btn">
						<img src="../assets/icons/menu.svg" alt="menu" />
					</div>
				</template>
				<div class="group-popover">
					<div class="group-popover-line" @click="deleteGroup">
						<img src="../assets/icons/delete.svg" />
						<span>Delete</span>
					</div>
				</div>
			</el-popover>

			<el-icon>
				<ArrowDownBold />
			</el-icon>

			<div class="header-wrapper">
				<el-tooltip
					effect="dark"
					content="Click to edit"
					placement="top"
					class="el-title"
				>
					<h4 contenteditable @input="updateGroupTitle">
						{{ group.title }}
					</h4>
				</el-tooltip>
			</div>
		</div>

		<div class="group-table" :style="{ 'border-color': group.style.color }">
			<!-- table header -->
			<div class="group-header-row task-row grid">
				<div class="task-name task-title">
					<el-tooltip
						effect="dark"
						content="this title cannot be edited"
						placement="top"
						class="el-title"
					>
						<p>Task</p>
					</el-tooltip>
				</div>
				<div class="task-data grid">
					<p v-for="title in cmpsOrder" :key="title">{{ title }}</p>
					<p class="empty-data"></p>
				</div>
			</div>

			<!-- table content -->
			<draggable
				:list="group.tasks"
				group="tasks"
				@end="onTaskMoved"
				:data-groupid="group.id"
			>
				<div v-for="task in group.tasks" :key="task.id">
					<task-preview :task="task" :groupId="group.id" />
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
		<div class="task-summary-row grid">
			<div class="empty-cell"></div>
			<div class="task-data grid">
				<div v-for="title in cmpsOrder" :key="title" class="summary-data">
					<component
						v-if="title === 'checkbox'"
						:is="'checkboxSummary'"
						:group="group"
					></component>
					<component
						v-else-if="title === 'status'"
						:is="'statusSummary'"
						:group="group"
					></component>
					<component
						v-else-if="title === 'priority'"
						:is="'prioritySummary'"
						:group="group"
					></component>
				</div>
				<div></div>
			</div>
		</div>
	</section>
</template>

<script>
	import taskPreview from './task-preview.vue'
	import { VueDraggableNext } from 'vue-draggable-next'
	import checkboxSummary from './task-summary/checkbox-summary.vue'
	import statusSummary from './task-summary/status-summary.vue'
	import prioritySummary from './task-summary/priority-summary.vue'

	export default {
		name: 'boardGroup',

		props: {
			group: Object,
			filter: Object,
		},

		data() {
			return {
				// 	currGroup: {},
			}
		},

		computed: {
			cmpsOrder() {
				return this.$store.getters.cmpsOrder
			},
		},

		methods: {
			onTaskFocus(ev) {
				ev.target.placeholder = '+ Add Task'
				ev.target.innerText = ''
			},
			onTaskBlur(ev) {
				ev.target.innerText = '+ Add Task'
			},
			onAddTask(ev) {
				ev.preventDefault()
				const name = ev.target.innerText
				ev.target.blur()
				if (!name) {
					this.onTaskBlur(ev)
					return
				}
				this.$store.dispatch({
					type: 'addTask',
					name,
					groupId: this.group.id,
					addToEnd: true,
				})
			},
			onTaskMoved(ev) {
				const fromId = ev.from.dataset.groupid
				const toId = ev.to.dataset.groupid
				this.$emit('taskMoved', fromId, toId, ev.oldIndex, ev.newIndex)
			},
			updateGroupTitle(ev) {
				const title = ev.target.innerText
				// const group = JSON.parse(JSON.stringify(this.currGroup))
				this.group.title = title
				this.$emit('updateGroup', this.group)
			},
			deleteGroup() {
				this.$emit('deleteGroup', this.group.id)
			},
		},

		// created() {
		// 	this.currGroup = JSON.parse(JSON.stringify(this.group))
		// },

		// watch: {
		// 	group: {
		// 		handler() {
		// 			this.currGroup = JSON.parse(JSON.stringify(this.group))
		// 		},
		// 		immediate: true,
		// 		deep: true,
		// 	},
		// },

		components: {
			taskPreview,
			draggable: VueDraggableNext,
			checkboxSummary,
			statusSummary,
			prioritySummary,
		},
	}
</script>
