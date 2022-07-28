<template>
	<DoughnutChart :chartData="labelData" />
	<DoughnutChart :chartData="membersData" />
</template>

<script lang="ts">
import { DoughnutChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
	name: 'dashboard',
	props: {
		currBoard: Object,
	},
	components: { DoughnutChart },
	data() {
		return {
			labelData: {
				labels: [],
				datasets: [
					{
						data: [],
						backgroundColor: [],
					},
				],
			},
			membersData: {
				members: [],
				datasets: [
					{
						data: [],
						backgroundColor: [],
					},
				],
			},
		}
	},
	created() {
		if (!this.currBoard) return
		let labelCount = {}
		let membersCount = []
		// console.log(this.currBoard)

		this.currBoard.groups.forEach((group) => {
			group.tasks.forEach((task) => {
				const status = task.statusId
				if (!labelCount[status]) labelCount[status] = 0
				labelCount[status]++

				// task.poeple.forEach((p) => {
				// 	console.log(p)
				// })
			})
		})

		for (var labelId in labelCount) {
			this.currBoard.labels.status.forEach((label) => {
				if (label.id === labelId) {
					this.labelData.labels.push(label.title)
					this.labelData.datasets[0].data.push(labelCount[labelId])
					this.labelData.datasets[0].backgroundColor.push(label.color)
				}
			})
		}
	},
}
</script>
