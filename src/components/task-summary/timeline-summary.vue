<template>
	<div class="timeline-summary flex justify-center align-center">
		<div
			class="timeline-wrapper grid"
			:style="{ 'grid-template-columns': gridTemplate }"
		>
			<div
				class="previous-timeline"
				:style="{ 'background-color': group.style.color }"
			></div>
			<div class="timeline-display">
				{{ timelineSummary }}
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			group: Object,
		},

		computed: {
			timeline() {
				if (!this.group.tasks.length) return null
				const firstTimeline = this.group.tasks[0].timeline

				return this.group.tasks.reduce(
					(acc, task) => {
						if (task.timeline[0] < acc[0]) acc[0] = task.timeline[0]
						if (task.timeline[1] > acc[1]) acc[1] = task.timeline[1]
						return acc
					},
					[firstTimeline[0], firstTimeline[1]]
				)
			},
			timelineSummary() {
				const timeline = this.timeline
				if (!timeline) return '-'

				let fromDate = new Date(timeline[0])
				let toDate = new Date(timeline[1])
				fromDate = fromDate.toLocaleString('default', {
					day: 'numeric',
					month: 'short',
				})
				toDate = toDate.toLocaleString('default', {
					day: 'numeric',
					month: 'short',
				})
				return fromDate + ' - ' + toDate
			},
			gridTemplate() {
				if (!this.group.tasks.length) return '0fr 1fr'
				const currTime = Date.now()
				let from = new Date(this.timeline[0])
				let to = new Date(this.timeline[1])

				from = from.getTime()
				to = to.getTime()
				from = Math.floor((currTime - from) / (1000 * 60 * 60 * 24))
				to = Math.ceil((to - currTime) / (1000 * 60 * 60 * 24))
				if (from < 0) from = 0
				if (to < 0) to = 0

				return `${from}fr ${to}fr`
			},
		},
	}
</script>
