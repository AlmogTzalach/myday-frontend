<template>
    <section class="attr-container">
        <p :class="isLongText" contenteditable @focus="isEdit = true" @blur="onSaveText" @keydown.enter="onSaveText">{{
                txt
        }}</p>
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
            isEdit: false
        }
    },

    computed: {
        txt() {
            const { txt } = this.task
            return txt
        },
        isLongText() {
            return !this.isEdit ? 'long-text' : ''
        },
    },
    methods: {
        onSaveText(ev) {
            const newTask = JSON.parse(JSON.stringify(this.task))
            newTask.txt = ev.target.innerText
            ev.target.blur()
            this.$emit('dataChanged', newTask)
        }
    },
}
</script>
