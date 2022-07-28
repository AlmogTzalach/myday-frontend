<template>
	<header class="board-header">
		<div class="board-actions flex">
			<div class="title-input flex">
				<el-tooltip
					effect="dark"
					content="Click to edit"
					placement="bottom"
					class="el-title"
					:trigger-keys="[]"
				>
					<h1
						contenteditable
						@keydown.enter="$event.target.blur()"
						@blur="updateBoardTitle"
						ref="titleInput"
					>
						{{ board.title }}
					</h1>
				</el-tooltip>
			</div>
			<!-- <div class="btns flex">
				<button @click="addMember()" class="btn add-member-btn">
					+ <span>invite / {{ board.members.length }}</span>
				</button>
			</div> -->
		</div>

		<div class="board-vue flex">
			<div class="btn-container" @click="setView('table')">
				<button class="btn vue-btn flex">
					<img src="../assets/icons/home.svg" alt="" />
					Main Table
				</button>
				<div></div>
			</div>
			<span>|</span>
			<div class="btn-container" @click="setView('chart')">
				<button class="btn vue-btn flex">Chart</button>
				<div></div>
			</div>
			<!-- <button class="btn add-vue-btn">+</button> -->
		</div>
	</header>
</template>

<script>
export default {
	name: 'board-header',
	props: {
		board: Object,
	},
	mounted() {
		this.$refs.titleInput.focus()
	},
	methods: {
		addMember() {
			console.log('add memeber')
		},
		updateBoardTitle(ev) {
			const newBoard = JSON.parse(JSON.stringify(this.board))
			newBoard.title = ev.target.innerText
			this.$emit('updateBoardTitle', newBoard)
		},
		setView(view) {
			this.$emit('setView', view)
		},
	},
}
</script>
