<template>
	<section class="board-filter">
		<!-- <div class="search-filter-container"> -->
		<el-input
			v-model="filter.txt"
			class="w-50 m-2 search-input"
			placeholder="Search"
			@input="setFilterBy"
		/>

		<!-- <button class="search-btn" contenteditable> -->
		<!-- <img src="../assets/icons/search.svg" alt="" /> -->
		<!-- <input
				type="text"
				v-model="filter.txt"
				placeholder="Search"
				@input="setFilterBy"
			/> -->
		<!-- </button> -->
		<!-- <el-icon><Filter /></el-icon> -->
		<!-- </div> -->
		<!-- <el-icon><User /></el-icon> -->

		<!-- <el-tooltip
			effect="dark"
			content="Filter by person"
			placement="top"
			class="el-title"
		>
			<button class="btn person-btn">
				<img src="../assets/icons/person-round.svg" alt="" />
				<span>Person</span>
			</button>
		</el-tooltip>

		<el-tooltip
			effect="dark"
			content="Filter by anything"
			placement="top"
			class="el-title"
		>
			<button class="btn">
				<div class="btn1 flex">
					<img src="../assets/icons/filter.svg" alt="" />
					<span> Filter </span>
				</div>

				<div class="btn2">
					<img src="../assets/icons/down.svg" alt="" />
				</div>
			</button>
		</el-tooltip>

		<el-tooltip
			effect="dark"
			content="Sort by any column"
			placement="top"
			class="el-title"
		>
			<button class="btn sort-btn">
				<div>&#8645;</div>
				<span> Sort </span>
			</button>
		</el-tooltip> -->
	</section>
</template>

<script>
export default {
	name: 'boardFilter',
	data() {
		return {
			filter: {
				txt: '',
			},
		}
	},
	methods: {
		setFilterBy() {
			this.$emit('setFilter', this.filter)
		},
	},
}
</script>
