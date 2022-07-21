<template>
	<section class="board-filter">
		<div class="search-filter-container">
			<button class="btn search-btn" contenteditable>
				<img src="../assets/icons/search.svg" alt="" />
				<span>Search</span>
			</button>
		</div>

		<button class="btn person-btn">
			<!-- <img src="../assets/icons/person-round.svg" alt="" /> -->
			<el-icon><User /></el-icon>
			<span>Person</span>
		</button>

		<!-- <button class="btn"> -->
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
		<!-- </button> -->

		<button class="btn">
			&#8645;
			<span> Sort </span>
		</button>
	</section>
</template>

<script>
export default {}
</script>
