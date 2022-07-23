<template>
    <div class="checkbox-summary flex justify-center align-center">
        <p>{{ doneTasks }} / {{ totalTasks }}</p>
    </div>
</template>
<script>
export default {
    props: {
        group: Object
    },
    computed: {
        doneTasks() {
            let doneTasks = 0
            this.group.tasks.forEach(task => { if (task.checkbox) doneTasks++ })
            return doneTasks
        },
        totalTasks() {
            return this.group.tasks.length
        }
    }
}
</script>
<style>
.checkbox-summary{
    height: 100%;
}
</style>