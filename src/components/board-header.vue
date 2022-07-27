<template>
	<header class="board-header">
		<div class="board-actions flex">
			<div class="title-input flex">
				<el-tooltip
					effect="dark"
					content="Click to edit"
					placement="bottom"
					class="el-title"
				>
					<h1
						contenteditable
						@keydown.enter="$event.target.blur()"
						@blur="updateBoardTitle"
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
			<div class="btn-container">
				<button @click="setTableVue" class="btn vue-btn flex">
					<img src="../assets/icons/home.svg" alt="" />
					Main Table
				</button>
				<div></div>
			</div>
			<span>|</span>
			<button class="btn add-vue-btn">+</button>
		</div>
	</header>
</template>

<script>
export default {
	name: 'board-header',
	props: {
		board: Object,
	},
	methods: {
		addMember() {
			console.log('add memeber')
		},
		setTableView() {
			console.log('set view')
		},
		updateBoardTitle(ev) {
			const newBoard = JSON.parse(JSON.stringify(this.board))
			newBoard.title = ev.target.innerText
			this.$emit('updateBoardTitle', newBoard)
		},
	},
}
</script>
