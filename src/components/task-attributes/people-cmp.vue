<template>
	<section class="attr-container">
		<el-popover
			:placement="modalPlacement"
			:width="200"
			trigger="click"
			@show="changePlacement"
		>
			<template #reference>
				<div class="avatar-container flex align-center">
					<div
						v-if="people.length"
						v-for="person in people"
						:key="person.id"
					>
						<el-avatar
							class="avatar"
							:size="30"
							:src="person.imgUrl"
							:fit="'fill'"
							:title="person.fullName"
						/>
					</div>
					<div v-else>
						<img
							class="empty-avatar"
							src="../../assets/icons/person-round.svg"
						/>
					</div>
				</div>
			</template>
			<div class="avatar-container">
				<div v-for="user in users" :key="user.id" class="flex align-center">
					<el-avatar
						:size="30"
						:src="user.imgUrl"
						:fit="'fill'"
						:title="user.fullName"
					/>
					<span>{{ user.fullName }}</span>
				</div>
			</div>
		</el-popover>
	</section>
</template>

<script>
export default {
	name: 'peopleCmp',

	props: {
		task: Object,
	},

	data() {
		return {
			modalPlacement: 'bottom',
		}
	},

	methods: {
		changePlacement(ev) {
			const vpH = window.innerHeight
			this.modalPlacement = ev.clientY > vpH / 2 ? 'top' : 'bottom'
		},
	},

	computed: {
		people() {
			const { people } = this.task
			return people
		},
		users() {
			return this.$store.getters.users
		},
	},
}
</script>
