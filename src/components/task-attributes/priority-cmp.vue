<template>
	<el-popover
		:placement="modalPlacement"
		:width="'Min width 200px'"
		trigger="click"
		v-model:visible="visible"
	>
		<template #reference>
			<section
				class="attr-container label-container"
				:style="{ 'background-color': priority.color }"
				@mousedown="changePlacement"
				@click="visible = !visible"
			>
				<div class="label">
					<p>{{ priority.title }}</p>
				</div>
			</section>
		</template>
		<label-picker
			:labels="this.priorityLabels"
			@labelPicked="changePriority"
			@closePicker="visible = false"
			@labelsEdited="priorityLabelsEdited"
			@onAddLabel="addPriorityLabel"
			@removeLabel="removePriorityLabel"
		>
		</label-picker>
	</el-popover>
</template>

<script>
import labelPicker from '../label-picker.vue'

export default {
	name: 'priorityCmp',

	props: {
		task: Object,
	},

	data() {
		return {
			modalPlacement: 'bottom',
			visible: false,
		}
	},

	computed: {
		priorityId() {
			const { priorityId } = this.task
			return priorityId
		},
		priority() {
			const priorityLabels = this.$store.getters.priorities
			return priorityLabels.find((label) => label.id === this.priorityId)
		},
		priorityLabels() {
			return JSON.parse(JSON.stringify(this.$store.getters.priorities))
		},
	},
	methods: {
		changePlacement(ev) {
			const vpH = window.innerHeight
			this.modalPlacement = ev.clientY > vpH / 2 ? 'top' : 'bottom'
		},
		changePriority(priorityId) {
			const newTask = JSON.parse(JSON.stringify(this.task))
			newTask.priorityId = priorityId
			this.$emit('dataChanged', newTask)
		},
		priorityLabelsEdited(labels) {
			this.$emit('priorityLabelsEdited', labels)
		},
		addPriorityLabel() {
			this.$emit('addPriorityLabel')
		},
		removePriorityLabel(labelId) {
			this.$emit('removePriorityLabel', labelId)
		},
	},

	components: {
		labelPicker,
	},
}
</script>
