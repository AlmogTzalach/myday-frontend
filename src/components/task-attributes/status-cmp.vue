<template>
    <section class="attr-container" :style="{ 'background-color': status.color }">
        <div class="label">
            <p>{{ status.title }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "statusCmp",

    props: {
        statusId: String,
    },

    data() {
        return {}
    },

    computed: {
        status() {
            const statusLabels = this.$store.getters.status
            return statusLabels.find(label => label.id === this.statusId)
        },
    },
}
</script>
