<template>
    <section class="attr-container" :style="{ 'background-color': priority.color }">
        <div class="label">
            <p>{{ priority.title }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "priorityCmp",

    props: {
        priorityId: String,
    },

    data() {
        return {}
    },

    computed: {
        priority() {
            const priorityLabels = this.$store.getters.priorities
            return priorityLabels.find(label => label.id === this.priorityId)
        },
    },
}
</script>
