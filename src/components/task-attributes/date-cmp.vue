<template>
	<section class="attr-container">
		<el-date-picker
			v-model="dateInput"
			type="date"
			placeholder="Pick a day"
			format="YYYY/MM/DD"
			value-format="x"
			:clearable="false"
			@change="dateChanged"
		/>
		<p class="date-display">{{ formattedDate }}</p>
	</section>
</template>

<script>
export default {
	name: 'dateCmp',

	props: {
		task: Object,
	},

	data() {
		return {
			dateInput: null,
			// taskToEdit: null,
		}
	},

	computed: {
		formattedDate() {
			const date = new Date(this.dateInput)
			return date.toLocaleString('default', {
				day: 'numeric',
				month: 'short',
				year: '2-digit',
			})
		},
	},
	// computed: {
	// 	taskToEdit() {
	// 		return JSON.parse(JSON.stringify(this.task))
	// 	},
	// },

	methods: {
		dateChanged() {
			// console.log('change', this.taskToEdit)
			// console.log(this.task.date)

			// this.task.date =
			// this.task.title = ev.target.innerText
			// newTask.title = this.task.date
			// this.onTaskUpdate(newTask)

			// const newTask = JSON.parse(JSON.stringify(this.task))
			// this.task.date = this.dateInput
			const newTask = this.task
			newTask.date = this.dateInput
			this.$emit('dataChanged', newTask)
		},
	},

	created() {
		// this.taskToEdit = JSON.parse(JSON.stringify(this.task))
		const { date } = this.task
		this.dateInput = date
	},
}
</script>

<style>
/* .el-date-editor {
    opacity: 0;
    position: absolute;
    z-index: 100;
}

.date-display {
    position: absolute;
} */
</style>
