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

		<p class="timeline-display" :style="{ 'background-color': color }">
			{{ formattedTimeline }}
		</p>
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
		},

		methods: {
			onTimelineChange(val) {
				// console.log(val)
			},
		},

		watch: {
			task: {
				handler(task) {
					// this.timeline = task.timeline
				},
				immediate: true,
				deep: true,
			},
		},
	}
</script>

<style></style>
