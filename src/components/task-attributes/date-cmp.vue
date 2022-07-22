<template>
    <section class="attr-container">
        <el-date-picker v-model="dateInput" type="date" placeholder="Pick a day" format="YYYY/MM/DD" value-format="x"
            :clearable="false" />
        <p class="date-display">{{ this.formattedDate }}</p>
    </section>
</template>

<script>
export default {
    name: 'dateCmp',

    props: {
        date: Number,
    },

    data() {
        return {
            dateInput: this.date,
        }
    },

    computed: {
        formattedDate() {
            const date = new Date(this.dateInput)
            return date.toLocaleString('default', { day: 'numeric', month: 'short', year: '2-digit' })
        },
    },
}
</script>

<style>
.el-date-editor {
    opacity: 0;
    position: absolute;
    z-index: 100;
}

.date-display {
    position: absolute;
}
</style>