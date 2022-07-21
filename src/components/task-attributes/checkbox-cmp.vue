<template>
    <section class="attr-container">
        <el-checkbox v-model="checkboxInput" size="large"  />
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
            checkboxInput: this.checkbox,
        }
    },

    computed: {

    },
}
</script>
