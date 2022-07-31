<template>
	<el-drawer
		:model-value="visible"
		:show-close="true"
		:size="700"
		@close="onCloseChat"
	>
		<template #header="{ close, titleId, titleClass }">
			<h4 class="task-details-title" :titleId="titleId">{{ task.title }}</h4>
		</template>
		<section class="task-details-container flex column">
			<!-- <el-input v-model="commentInput" placeholder="Write an update..." size="large"
				@keydown.enter="onAddComment" /> -->
			<div
				class="update-editor-placeholder"
				v-if="!isEditUpdate"
				@click="isEditUpdate = true"
			>
				<p>Write an update...</p>
			</div>
			<div v-else class="editor-container flex column">
				<!-- <editor class="comment-editor" @blur="isEditUpdate = false" -->
				<editor
					class="comment-editor"
					api-key="jq0xk1psk83zvejw0k3dt8vne8z5gdzqvispp8zz675es1c1"
					v-model="commentInput"
					:init="{
						resize: false,
						menubar: false,
						toolbar:
							'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
					}"
				/>
				<el-button
					class="add-comment-btn"
					type="primary"
					@click="onAddComment"
					>Update</el-button
				>
			</div>
			<div v-if="task.comments.length">
				<ul class="clean-list">
					<li v-for="comment in task.comments">
						<comment-preview :comment="comment"></comment-preview>
					</li>
				</ul>
			</div>
			<div v-else class="no-updates-container">
				<!-- <div class="no-updates-img"> -->
				<img src="../assets/no-updates.svg" alt="" />
				<!-- </div> -->
				<!-- <div class="no-updates-txt"> -->
				<h2>No updates yet for this item</h2>
				<p>
					Be the first one to update about progress, mention someone or
					upload files to share with your team members
				</p>
				<!-- </div> -->
			</div>
		</section>
	</el-drawer>
</template>

<script>
import commentPreview from '../components/comment-preview.vue'
import Editor from '@tinymce/tinymce-vue'

export default {
	name: 'taskDetails',
	props: {
		visible: Boolean,
		task: Object,
	},
	emits: ['onCloseChat', 'onAddComment'],
	data() {
		return {
			isEditUpdate: false,
			commentInput: null,
		}
	},
	computed: {
		titleClass() {
			return 'task-details-title'
		},
	},
	methods: {
		// onAddComment(ev) {
		// 	ev.target.blur()
		// 	this.$emit('onAddComment', this.commentInput, this.task.id)
		// 	this.commentInput = null
		// },
		onAddComment() {
			this.$emit('onAddComment', this.commentInput, this.task.id)
			// this.commentInput = null
			this.isEditUpdate = false
		},
		onCloseChat() {
			this.$emit('onCloseChat')
		},
	},
	components: {
		commentPreview,
		editor: Editor,
	},
}
</script>
<style></style>
