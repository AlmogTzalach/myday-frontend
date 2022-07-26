<template>
	<!-- <el-button @click="visible = true">
		Open Drawer with customized header
	</el-button> -->
	<el-drawer v-model="visible" :show-close="true" :size="700">
		<template #header="{ close, titleId, titleClass }">
			<h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
		</template>
		This is drawer content.
	</el-drawer>
</template>

<script>
	export default {
		props: {
			visible: Boolean,
		},
	}
</script>
