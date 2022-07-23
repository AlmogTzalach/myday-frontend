<template>
	<section class="task-preview">
		<el-popover
			placement="bottom-start"
			:width="264"
			trigger="click"
			:show-arrow="false"
			:hide-after="0"
			:offset="0"
		>
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
				<div class="edit-title">
					<p contenteditable @input="onTitleUpdate" class="task-title">
						{{ currTask.title }}
					</p>
				</div>
				<div class="conversation-img">
					<img src="../assets/icons/add-update.svg" alt="conversation" />
				</div>
			</div>
			<div class="task-data grid">
				<component
					v-for="cmp in cmpsOrder"
					:is="cmp + 'Cmp'"
					:key="cmp"
					:task="currTask"
					@dataChanged="updateData"
				></component>
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

		computed: {
			cmpsOrder() {
				return this.$store.getters.cmpsOrder
			},
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
			updateData(newTask) {
				this.currTask = newTask
				this.onTaskUpdate()
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
			linkCmp,
			textCmp,
		},
	}
</script>
