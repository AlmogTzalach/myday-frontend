<template>
    <header class="login-header flex space-between align-center">
        <router-link to="/">
            <div class="logo-container flex align-center">
                <img src="../assets/monday_logo_icon.png">
                <h1 class="logo-title">myday</h1>
            </div>
        </router-link>
    </header>
    <section :model="loginForm" class="login-page-container flex column align-center">
        <h2>Log in to your account</h2>
        <el-form class="flex column align-center">
            <el-input v-model="loginForm.username" placeholder="example@company.com" size="large" />
            <el-input v-model="loginForm.password" placeholder="Enter your password" size="large" type="password"
                autocomplete="off" />
            <el-button type="primary" @click="onLogin">Log in</el-button>
        </el-form>
        <p>Don't have an account yet? <router-link to="/signup">Sign up</router-link>
        </p>
    </section>
</template>

<script>
export default {
    name: 'loginPage',
    data() {
        return {
            loginForm: {
                username: null,
                password: null
            }
        }
    },
    methods: {
        onLogin() {
            const credentials = {
                username: this.loginForm.username,
                password: this.loginForm.password,
            }
            this.$store.dispatch({ type: 'logIn', credentials })
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
