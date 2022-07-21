<template>
    <section class="attr-container" @click="toggleCheckbox">
        <el-icon class="check" v-if="checkbox"><Check /></el-icon>
    </section>
</template>

<script>
export default {
    name: 'checkboxCmp',

    props: {
        checkbox: Boolean,
    },

    data() {
        return {
        }
    },

    methods: {
        toggleCheckbox() {
            this.$emit('onToggleCheckbox')
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