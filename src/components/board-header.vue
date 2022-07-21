<template>
	<header class="board-header">
		<div class="board-actions flex">
			<div class="title-input flex">
				<h1 contenteditable @input="updateBoard">{{ board.title }}</h1>
				<!-- <input type="text" v-model="board.title" contenteditable /> -->
				<!-- <button>star</button>
				<button>info</button> -->
			</div>
			<div class="btns flex">
				<button @click="addMember()" class="btn add-member-btn">
					+ <span>invite / {{ board.members.length }}</span>
				</button>
			</div>
		</div>

		<div class="board-vue flex">
			<div class="btn-container">
				<!-- <el-icon :size="size" :color="color">
					<Edit />
				</el-icon> -->
				<button @click="setTableVue" class="btn vue-btn">
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
		setTableVue() {
			console.log('set vue')
		},
		updateBoard(e) {
			console.log(e.target.innerText)
		},
	},
}
</script>
