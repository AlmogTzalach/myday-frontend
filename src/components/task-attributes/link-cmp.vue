<template>
    <section class="attr-container">
        <el-link type="primary" :href="this.link">{{ this.link }}</el-link>
    </section>
</template>

<script>
export default {
    name: 'linkCmp',

    props: {
        task: Object,
    },

    data() {
        return {
        }
    },

    computed: {
        link() {
            const { link } = this.task
            return link
        }
    },
}
</script>
