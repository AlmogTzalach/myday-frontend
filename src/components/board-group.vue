<template>
	<section class="board-group">
		<div class="group-title-container" :class="collapseClass">
			<div class="group-title" :style="{ color: group.style.color }">
				<div class="empty-left"></div>
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

				<div
					v-if="!isCollapsed"
					class="collapse-group-btn"
					@click="toggleCollapse"
				>
					<el-icon><ArrowDownBold /></el-icon>
				</div>
				<div v-else class="collapse-group-btn" @click="toggleCollapse">
					<el-icon><ArrowRightBold /></el-icon>
				</div>

				<div class="header-wrapper">
					<el-tooltip
						effect="dark"
						content="Click to edit"
						placement="top"
						class="el-title"
						:trigger-keys="[]"
					>
						<h4
							contenteditable
							@keydown.enter="$event.target.blur()"
							@blur="updateGroupTitle"
						>
							{{ group.title }}
						</h4>
					</el-tooltip>
				</div>
			</div>
		</div>

		<div class="group-table">
			<!-- table header -->
			<div class="group-header-row task-row grid">
				<div class="task-name task-title">
					<div class="empty-left"></div>
					<div
						class="side-border side-border-top"
						:style="{ 'background-color': group.style.color }"
					></div>
					<!-- <el-tooltip
						effect="dark"
						content="this title cannot be edited"
						placement="top"
						class="el-title"
					> -->
					<p
						class="flex justify-center align-center task-main-header"
						:class="collapseClass"
					>
						Task
					</p>
					<!-- </el-tooltip> -->
				</div>

				<!-- <div class="task-data grid"> -->
				<draggable
					:list="cmpsOrder"
					class="task-data grid"
					:class="collapseClass"
					@end="cmpOrderChanged"
				>
					<p v-for="title in cmpsOrder" :key="title">{{ title }}</p>
				</draggable>
				<!-- </div> -->
				<!-- <p class="empty-data"></p> -->
			</div>

			<!-- table content -->
			<draggable
				:list="taskToDisdplay"
				group="tasks"
				@end="onTaskMoved"
				:data-groupid="group.id"
				:disabled="isDraggable"
			>
				<div
					v-for="task in taskToDisdplay"
					:key="task.id"
					:class="collapseClass"
				>
					<task-preview :task="task" :group="group" />
				</div>
			</draggable>

			<!-- table footer -->
			<div class="group-footer">
				<div class="add-task-line grid" :class="collapseClass">
					<div class="add-task-start grid">
						<div class="empty-left"></div>
						<div
							class="side-border side-border-bottom"
							:style="indicatorStyle"
						></div>
						<div class="add-task-wrapper flex align-center">
							<div
								contenteditable
								class="add-task-input"
								@focus="onTaskFocus"
								@blur="onAddTask"
								@keydown.enter="$event.target.blur()"
							>
								+ Add Task
							</div>
						</div>
					</div>
					<div class="add-task-empty-data"></div>
				</div>
			</div>
		</div>
		<div class="task-summary-row grid">
			<div class="empty-cell grid" :class="collapseClass">
				<div></div>
				<div
					class="scroll-border"
					:style="{
						'background-color': isCollapsed ? group.style.color : '',
					}"
				></div>
				<div class="collapse-border"></div>
			</div>
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
			isCollapsed: false,
		}
	},
	computed: {
		taskToDisdplay() {
			const regexTxt = new RegExp(this.filter.txt, 'i')
			let filteredTasks = this.group.tasks.filter((task) =>
				regexTxt.test(task.title)
			)
			return filteredTasks
		},
		cmpsOrder() {
			const cmpsOrder = this.$store.getters.cmpsOrder
			return JSON.parse(JSON.stringify(cmpsOrder))
		},
		indicatorStyle() {
			return {
				'--indicatorHover': this.group.style.color,
				'--indicator': this.group.style.addTaskColor,
			}
		},
		isDraggable() {
			return window.matchMedia('(any-hover: none)').matches
		},
		collapseClass() {
			return this.isCollapsed ? 'group-collapsed' : ''
		},
	},

	methods: {
		onTaskFocus(ev) {
			ev.target.innerText = ''
		},
		onTaskBlur(ev) {
			ev.target.innerText = '+ Add Task'
		},
		onAddTask(ev) {
			const name = ev.target.innerText
			ev.target.blur()
			this.onTaskBlur(ev)
			if (!name) return

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
			this.group.title = title
			this.$emit('updateGroup', this.group)
		},
		deleteGroup() {
			this.$emit('deleteGroup', this.group.id)
		},
		cmpOrderChanged() {
			this.$emit('cmpOrderChanged', this.cmpsOrder)
		},
		toggleCollapse() {
			this.isCollapsed = !this.isCollapsed
		},
	},

	components: {
		taskPreview,
		draggable: VueDraggableNext,
		checkboxSummary,
		statusSummary,
		prioritySummary,
	},
}
</script>

<style>
.side-border-bottom {
	background-color: var(--indicator);
}

.add-task-line:hover .side-border-bottom {
	background-color: var(--indicatorHover);
}

.add-task-input:focus .side-border-bottom {
	background-color: var(--indicatorHover);
}
</style>
