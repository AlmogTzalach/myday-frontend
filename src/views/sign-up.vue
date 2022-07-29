<template>
    <header class="sign-up-header flex space-between align-center">
        <router-link to="/">
            <div class="logo-container flex align-center">
                <img src="../assets/monday_logo_icon.png">
                <h1 class="logo-title">myday</h1>
            </div>
        </router-link>
    </header>
    <section class="sign-up-page-container flex column align-center">
        <h2>Sign up here</h2>
        <el-form :model="signUpForm" class="flex column align-center">
            <el-input v-model="signUpForm.fullName" placeholder="Your full name" size="large" />
            <el-input v-model="signUpForm.username" placeholder="example@company.com" size="large" />
            <el-input v-model="signUpForm.password" placeholder="Enter your password" size="large" type="password"
                autocomplete="off" />
            <el-button type="primary" @click="onSignUp">Sign up</el-button>
        </el-form>
    </section>
</template>

<script>
export default {
    name: 'signUpPage',
    data() {
        return {
            signUpForm: {
                fullName: null,
                username: null,
                password: null
            }
        }
    },
    methods: {
        onSignUp() {
            const userInfo = {
                fullName: this.signUpForm.fullName,
                username: this.signUpForm.username,
                password: this.signUpForm.password,
            }
            this.$store.dispatch({ type: 'signUp', userInfo })
			const defaultBoard = this.$store.getters.boards[0]._id
			this.$router.push(`/board/${defaultBoard}`)
        }
    },
    computed: {

    },
}
</script>

<style >
</style>
