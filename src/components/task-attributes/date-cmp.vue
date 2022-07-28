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

		methods: {
			dateChanged() {
				const newTask = this.task
				newTask.date = this.dateInput
				this.$emit('dataChanged', newTask)
			},
		},

		watch: {
			task: {
				handler(task) {
					this.dateInput = task.date
				},
				immediate: true,
				deep: true,
			},
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
