<template>
    <header class="login-header flex space-between align-center">
        <router-link to="/">
            <div class="logo-container flex align-center">
                <img src="../assets/monday_logo_icon.png">
                <h1 class="logo-title">myday</h1>
            </div>
        </router-link>
    </header>
    <section class="login-page-container flex column align-center">
        <h2>Log in to your account</h2>
        <el-form class="flex column align-center">
            <el-input v-model="userName" placeholder="example@company.com" size="large" />
            <el-input v-model="password" placeholder="Enter your password" size="large" type="password"
                autocomplete="off" />
            <el-button type="primary" @submit="onLogin">Log in</el-button>
        </el-form>
        <p>Don't have an account yet? <router-link to="/signup">Sign up</router-link></p>
    </section>
</template>

<script>
export default {
    name: 'loginPage',
    data() {
        return {
            userName: null,
            password: null
        }
    },
    methods: {

    },
    computed: {

    },
}
</script>

<style >
</style>
