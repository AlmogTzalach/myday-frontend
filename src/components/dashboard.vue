<template>
	<section class="dashboard-page">
		<div class="chart lebel-chart">
			<div class="title">
				<h1>Members tasks:</h1>
				<button v-for="btn in btns" @click="setChartType1(btn)">
					{{ btn }}
				</button>
			</div>
			<div class="chart-container">
				<DoughnutChart :chartData="labelData" v-if="type1 === 'Doughnut'" />
				<BarChart :chartData="labelData" v-if="type1 === 'bar'" />
			</div>
		</div>

		<div class="chart member-chart">
			<div class="title">
				<h1>Labels:</h1>
				<button v-for="btn in btns" @click="setChartType2(btn)">
					{{ btn }}
				</button>
			</div>
			<div class="chart-container">
				<DoughnutChart
					:chartData="membersData"
					v-if="type2 === 'Doughnut'"
				/>
				<BarChart :chartData="membersData" v-if="type2 === 'bar'" />
			</div>
		</div>
	</section>
</template>

<script>
import { DoughnutChart } from 'vue-chart-3'
import { BarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
	name: 'dashboard',
	props: {
		currBoard: Object,
	},
	components: { DoughnutChart, BarChart },
	data() {
		return {
			btns: ['Doughnut', 'bar'],
			type1: 'Doughnut',
			type2: 'bar',
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
						backgroundColor: [
							'#77CEFF',
							'#0079AF',
							'#123E6B',
							'#97B0C4',
							'#A5C8ED',
						],
					},
				],
			},
		}
	},
	created() {
		if (!this.currBoard) return
		let labelCount = {}
		let membersCount = []
		console.log(this.currBoard)

		this.currBoard.groups.forEach((group) => {
			group.tasks.forEach((task) => {
				const status = task.statusId
				if (!labelCount[status]) labelCount[status] = 0
				labelCount[status]++

				task.people.forEach((p) => {
					if (!membersCount[p.fullName]) membersCount[p.fullName] = 0
					membersCount[p.fullName]++
				})
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

		for (var member in membersCount) {
			this.membersData.members.push(member)
			this.membersData.datasets[0].data.push(membersCount[member])
		}
	},
	methods: {
		setChartType1(type) {
			this.type1 = type
		},
		setChartType2(type) {
			this.type2 = type
		},
	},
}
</script>
