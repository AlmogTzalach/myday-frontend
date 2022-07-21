<template>
    <section class="attr-container">
         <el-link type="primary" :href="this.link"></el-link>
    </section>
</template>

<script>
export default {
    name: 'linkCmp',

    props: {
        link: String,
    },

    data() {
        return {
            linkInput: this.link,
        }
    },

    computed: {

    },
}
</script>
