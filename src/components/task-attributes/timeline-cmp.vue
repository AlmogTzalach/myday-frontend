<template>
	<section class="attr-container" @click="">
		<el-date-picker
			v-model="timeline"
			type="daterange"
			range-separator=""
			start-placeholder=""
			end-placeholder=""
			:unlink-panels="false"
			@change="onTimelineChange"
		/>

		<div
			class="timeline-wrapper grid"
			:style="{ 'grid-template-columns': gridTemplate }"
		>
			<div
				class="previous-timeline"
				:style="{ 'background-color': color }"
			></div>
			<!-- <div class="future-timeline"></div> -->
			<div class="timeline-display">
				{{ formattedTimeline }}
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'timelineCmp',

		props: {
			task: Object,
			color: String,
		},

		data() {
			return {
				timeline: [0, 0],
			}
		},

		computed: {
			formattedTimeline() {
				let fromDate = new Date(this.timeline[0])
				let toDate = new Date(this.timeline[1])
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
				if (!this.timeline) return '0fr 1fr'
				const currTime = Date.now()
				let from = new Date(this.timeline[0])
				let to = new Date(this.timeline[1])

				from = from.getTime()
				to = to.getTime()
				from = Math.floor((currTime - from) / (1000 * 60 * 60 * 24))
				to = Math.ceil((to - currTime) / (1000 * 60 * 60 * 24))
				if (from < 0) from = 0
				if (to < 0) to = 0
				// console.log(currTime - from, to - currTime)

				return `${from}fr ${to}fr`
			},
		},

		methods: {
			onTimelineChange() {
				this.task.timeline[0] = this.timeline[0].getTime()
				this.task.timeline[1] = this.timeline[1].getTime()
				this.$emit('dataChanged', this.task)
			},
		},

		watch: {
			task: {
				handler(task) {
					this.timeline = task.timeline
				},
				immediate: true,
				deep: true,
			},
		},
	}
</script>

<style></style>
