<template>
	<div class="labels-container">
		<div class="labels-picker-grid">
			<div
				v-if="!isEdit"
				class="label text-center flex align-center justify-center"
				v-for="label in labels"
				:key="label.id"
				:style="{ 'background-color': label.color }"
				@click="onLabelPicked(label.id)"
			>
				<p>{{ label.title }}</p>
			</div>
			<div
				v-else
				class="edit-label-container flex align-center"
				v-for="label in labels"
				:key="label.color"
			>
				<el-input v-model="label.title" @input="onLabelsEdited">
					<template #prefix>
						<div style="display: flex; align-items: center">
							<!-- ///// -->
							<el-popover
								:placement="modalPlacement"
								:width="128"
								trigger="click"
							>
								<template #reference>
									<div
										:style="{ 'background-color': label.color }"
										@mousedown="changePlacement"
										class="color-display"
									>
										<!-- <el-button
										:style="{ 'background-color': label.color }"
									></el-button> -->
									</div>
								</template>
								<div class="colors-opts">
									<div
										v-for="color in colors"
										:style="{
											'background-color': color,
											width: '20px',
											height: '20px',
										}"
										@click="onLabelsEdited(color, label.id)"
										class="color-container"
									></div>
								</div>
							</el-popover>
						</div>

						<!-- <div
							class="color-display"
							:style="{ 'background-color': label.color }"
						>
							<el-color-picker
								v-model="label.color"
								@change="onLabelsEdited"
							/>
						</div> -->
					</template>
				</el-input>
				<img
					class="delete-btn"
					:class="isDisabled(label.id)"
					src="../assets/icons/close-small.svg"
					@click="removeLabel(label.id)"
					:title="isRemovableTitle(label.id)"
				/>
			</div>
			<button
				v-if="isEdit"
				class="new-label-btn flex justify-center align-center"
				@click="onAddLabel"
			>
				<img src="../assets/icons/add.svg" />New label
			</button>
		</div>
		<div class="labels-divider"></div>
		<div
			class="edit-labels-btn-container flex justify-center align-center"
			@click="onToggleEdit"
		>
			<img v-if="!isEdit" src="../assets/icons/edit-labels.svg" />
			<button class="edit-labels-btn">
				{{ this.isEdit ? 'Apply' : 'Edit Labels' }}
			</button>
		</div>
	</div>
</template>
<script>
export default {
	name: 'labelPicker',
	data() {
		return {
			isEdit: false,
			modalPlacement: 'bottom',
			colors: [
				'#037f4c',
				'#9cd326',
				'#cab641',
				'#cab641',
				'#ff642e',
				'#ffadad',
				'#ff7575',
				'#bb3354',
				'#ff158a',
				'#ff5ac4',
				'#faa1f1',
				'#784bd1',
				'#7e3b8a',
				'#401694',
				'#5559df',
				'#225091',
				'#579bfc',
				'#0086c0',
				'#4eccc6',
				'#66ccff',
				'#68a1bd',
				'#9aadbd',
				'#808080',
				'#333333',
				'#7f5347',
				'#d974b0',
				'#ad967a',
				'#a1e3f6',
				'#bd816e',
				'#2b76e5',
				'#175a63',
				'#bda8f9',
				'#a9bee8',
				'#9d99b9',
				'#563e3e',
			],
		}
	},
	props: {
		labels: Array,
	},
	methods: {
		changePlacement(ev) {
			const vpH = window.innerHeight
			this.modalPlacement = ev.clientY > vpH / 2 ? 'top' : 'bottom'
		},
		onLabelPicked(labelId) {
			this.$emit('labelPicked', labelId)
			this.$emit('closePicker')
		},
		onToggleEdit() {
			this.isEdit = !this.isEdit
		},
		onLabelsEdited(clr, labelId) {
			if (clr && labelId) {
				let label = this.labels.find((label) => label.id === labelId)
				label.color = clr
			}
			this.$emit('labelsEdited', this.labels)
		},
		onAddLabel() {
			this.$emit('onAddLabel')
		},
		isRemovableTitle(labelId) {
			if (
				this.statusInUse.includes(labelId) ||
				this.priorityInUse.includes(labelId)
			)
				return "You can't delete a label while in use"
			else return 'Delete'
		},
		isDisabled(labelId) {
			if (
				this.statusInUse.includes(labelId) ||
				this.priorityInUse.includes(labelId)
			)
				return 'is-disabled'
			else return 'is-active'
		},
		removeLabel(labelId) {
			console.log(labelId)
			if (
				this.statusInUse.includes(labelId) ||
				this.priorityInUse.includes(labelId)
			)
				return
			else this.$emit('removeLabel', labelId)
		},
	},
	computed: {
		statusInUse() {
			return this.$store.getters.statusInUse
		},
		priorityInUse() {
			return this.$store.getters.priorityInUse
		},
	},
}
</script>
