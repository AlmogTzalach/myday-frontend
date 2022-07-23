<template>
    <div class="status-sum-container flex">
        <div class="status-sum" v-for="(statusCount, statusId) in statusMap" :key="statusId"
            :style="statusClr(statusId, statusCount)">
        </div>
    </div>
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
    },
    methods: {
        statusClr(statusId, statusCount) {
            return {
                'background-color': this.statusTypes.find(status => status.id === statusId).color,
                'flex-grow': statusCount
            }
        },
    },
}
</script>
<style>
.status-sum-container {
    height: 100%;
    padding: 6px 8px
}

.status-sum {
    transition: 0.5s;
}

.status-sum:hover {
    transform: scaleY(115%);
}
</style>