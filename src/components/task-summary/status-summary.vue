<template>
        <div v-for="status in statusMap">{{ status }}</div>
</template>
<script>

export default {
    props: {
        group: Object
    },
    computed: {
        statusMap() {
            const statusMap = this.group.tasks.reduce((acc, currTask) => {
                const currStatus = currTask.statusId
                if (acc[currStatus]) acc[currStatus]++
                else acc[currStatus] = 1
                return acc
            }, {})

            return statusMap
        },
        statusTypes() {
            return this.$store.getters.status
        },
        // bgClr(statusId) {
        //     return this.statusTypes.find()
        // }
    }
}
</script>
<style>
</style>