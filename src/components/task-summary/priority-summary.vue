<template>
    <div class="priority-sum-container flex">
        <div class="priority-sum" v-for="(priorityCount, priorityId) in priorityMap" :key="priorityId"
            :style="priorityClr(priorityId, priorityCount)">
        </div>
    </div>
</template>
<script>

export default {
    props: {
        group: Object
    },
    computed: {
        priorityMap() {
            const priorityMap = this.group.tasks.reduce((acc, currTask) => {
                const currPriority = currTask.priorityId
                if (acc[currPriority]) acc[currPriority]++
                else acc[currPriority] = 1
                return acc
            }, {})

            return priorityMap
        },
        priorityTypes() {
            return this.$store.getters.priorities
        },
    },
    methods: {
        priorityClr(priorityId, priorityCount) {
            return {
                'background-color': this.priorityTypes.find(priority => priority.id === priorityId).color,
                'flex-grow': priorityCount
            }
        },
    },
}
</script>
<style>
.priority-sum-container {
    height: 100%;
    padding: 6px 8px
}

.priority-sum {
    transition: 0.5s;
}

.priority-sum:hover {
    transform: scaleY(115%);
}
</style>