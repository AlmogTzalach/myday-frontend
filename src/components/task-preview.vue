<template>
	<task-details :visible="isChatShown"></task-details>
	<section class="task-preview">
		<el-popover placement="bottom-start" :width="264" trigger="click" :show-arrow="false" :hide-after="0"
			:offset="0">
			<template #reference>
				<div class="task-menu-btn">
					<img src="../assets/icons/menu.svg" alt="menu" />
				</div>
			</template>
			<div class="task-popover">
				<div class="task-popover-line" @click="onDelete">
					<img src="../assets/icons/delete.svg" />
					<span>Delete</span>
				</div>
			</div>
		</el-popover>
		<div class="task-row grid">
			<div class="task-name name-cell grid">
				<div class="empty-left"></div>
				<!-- <div class="left-indicator"></div> -->
				<div class="side-border" :style="{ 'background-color': group.style.color }"></div>
				<div class="task-title-wrapper flex space-between">
					<div class="edit-title flex align-center">
						<p contenteditable @input="onTitleUpdate" class="task-title">
							{{ currTask.title }}
						</p>
					</div>
					<div class="conversation-img" @click="onTaskChat">
						<el-tooltip effect="dark" content="Start conversetion" placement="top" class="el-title">
							<img src="../assets/icons/add-update.svg" alt="conversation" />
						</el-tooltip>
					</div>
				</div>
			</div>
			<div class="task-data grid">
				<component v-for="cmp in cmpsOrder" :is="cmp + 'Cmp'" :key="cmp" :task="currTask"
					@dataChanged="updateData" @statusLabelsEdited="updateStatusLabels"
					@priorityLabelsEdited="updatePriorityLabels">
				</component>
				<p class="empty-data"></p>
			</div>
		</div>
	</section>
</template>

<script>
import statusCmp from './task-attributes/status-cmp.vue'
import priorityCmp from './task-attributes/priority-cmp.vue'
import peopleCmp from './task-attributes/people-cmp.vue'
import dateCmp from './task-attributes/date-cmp.vue'
import checkboxCmp from './task-attributes/checkbox-cmp.vue'
import linkCmp from './task-attributes/link-cmp.vue'
import textCmp from './task-attributes/text-cmp.vue'
import taskDetails from '@/components/task-details.vue'

export default {
	name: 'taskPreview',

	props: {
		task: Object,
		group: Object,
	},

	data() {
		return {
			currTask: null,
			isChatShown: false,
		}
	},

	computed: {
		cmpsOrder() {
			return this.$store.getters.cmpsOrder
		},
	},

	methods: {
		onTaskChat() {
			this.isChatShown = !this.isChatShown
		},
		onDelete() {
			this.$store.dispatch({
				type: 'removeTask',
				groupId: this.group.id,
				taskId: this.task.id,
			})
		},
		onTaskUpdate() {
			this.$store.dispatch({
				type: 'updateTask',
				groupId: this.group.id,
				newTask: JSON.parse(JSON.stringify(this.currTask)),
			})
		},
		onTitleUpdate(ev) {
			this.currTask.title = ev.target.innerText
			this.onTaskUpdate()
		},
		updateData(newTask) {
			this.currTask = newTask
			this.onTaskUpdate()
		},
		updateStatusLabels(labels) {
			this.$store.dispatch({ type: 'updateStatusLabels', labels })
		},
		updatePriorityLabels(labels) {
			this.$store.dispatch({ type: 'updatePriorityLabels', labels })
		}
	},

	created() {
		this.currTask = JSON.parse(JSON.stringify(this.task))
	},

	components: {
		taskDetails,
		statusCmp,
		priorityCmp,
		peopleCmp,
		dateCmp,
		checkboxCmp,
		linkCmp,
		textCmp,
	},
}
</script>
