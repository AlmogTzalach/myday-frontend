<template>
	<section class="board-filter">
		<div class="search-filter-container">
			<button class="btn search-btn" contenteditable>
				<img src="../assets/icons/search.svg" alt="" />
				<!-- <span placeholder="Search"></span> -->
				<input
					type="text"
					v-model="filter.txt"
					placeholder="Search"
					@input="setFilterBy"
				/>
			</button>
		</div>

		<el-tooltip
			effect="dark"
			content="Filter by person"
			placement="top"
			class="el-title"
		>
			<button class="btn person-btn">
				<!-- <img src="../assets/icons/person-round.svg" alt="" /> -->
				<el-icon><User /></el-icon>
				<span>Person</span>
			</button>
		</el-tooltip>

		<el-tooltip
			effect="dark"
			content="Filter by anything"
			placement="top"
			class="el-title"
		>
			<button>
				<div class="btn1 flex">
					<el-icon><Filter /></el-icon>
					<!-- <img src="../assets/icons/filter.svg" alt="" /> -->
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
			<button class="btn">
				&#8645;
				<span> Sort </span>
			</button>
		</el-tooltip>
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
