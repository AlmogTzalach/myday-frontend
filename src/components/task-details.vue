<template>
	<el-drawer v-model="visible" :show-close="true" :size="700" @close="onCloseChat">
		  <template #header="{ close, titleId, titleClass }">
			<h4 :class="titleClass" :titleId="titleId">{{ task.title }}</h4>
		</template>
		<section class="task-details-container">
			<el-input v-model="commentInput" placeholder="Write an update..." size="large" />
			<div v-if="task.comments.length">
				<ul class="clean-list">
					<li v-for="comment in task.comments">
						<comment-preview :comment="comment"></comment-preview>
					</li>
				</ul>
			</div>
			<div v-else>
				<h2>No comments</h2>
			</div>
		</section>
	</el-drawer>
</template>

<script>
import commentPreview from '../components/comment-preview.vue'

export default {
	name: 'taskDetails',
	props: {
		visible: Boolean,
		task: Object,
	},
	emits: ['onCloseChat'],
	data() {
		return {
			commentInput: null
		}
	},
	computed: {
		titleClass(){
			return 'task-details-title'
		}
	},
	methods: {
		onCloseChat() {
			console.log('here');
			// this.$emit('onCloseChat')
		}

	},
	components: {
		commentPreview
	}
}
</script>
