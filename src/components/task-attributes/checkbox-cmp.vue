<template>
    <section class="attr-container" @click="toggleCheckbox">
        <el-icon class="check" v-if="checkbox"><Check /></el-icon>
    </section>
</template>

<script>
export default {
    name: 'checkboxCmp',

    props: {
        task: Object,
    },

    data() {
        return {
        }
    },

    computed:{
        checkbox() {
            const {checkbox} = this.task
            return checkbox
        } 
    },

    methods: {
        toggleCheckbox() {
            const newTask = JSON.parse(JSON.stringify(this.task))
            newTask.checkbox = !newTask.checkbox
            this.$emit('dataChanged', newTask)
        }
    },
}
</script>
<style>
.el-icon.check {
    color: rgb(0, 202, 114);
    font-size: 1.5em;
}

</style>