<template>
    <section class="attr-container">
        <p class="long-text">{{ txt }}</p>
    </section>
</template>

<script>
export default {
    name: 'textCmp',

    props: {
        task: Object,
    },

    data() {
        return {
        }
    },

    computed: {
        txt() {
            const { txt } = this.task
            return txt
        }
    },
}
</script>
