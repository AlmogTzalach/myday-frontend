<template>
    <section class="attr-container">
        <div class="label" :style="{ 'background-color': labelColor }">
            <p>{{ status.title }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "statusCmp",
    prop: {
        statusId: String,
    },
    data() {
        return {}
    },
    computed: {
        labelColor() {

        }
    },
}
</script>
