<template>
    <section class="attr-container">
        <input type="date" v-model="dateInput">
    </section>
</template>

<script>
export default {
    name: "dateCmp",

    props: {
        date: Number,
    },

    data() {
        return {
            dateInput: this.date
        }
    },

    computed: {
        formattedDate() {
            return `${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}/`
        },
    },
}
</script>
