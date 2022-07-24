<template >
    <div class="labels-container flex column align-center">
        <div class="label text-center flex align-center justify-center" v-for="label in labels" :key="label.id"
            :style="{ 'background-color': label.color }" @click="onLabelPicked(label.id)">
            <p>{{ label.title }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'labelPicker',
    props: {
        labels: Array
    },
    methods: {
        onLabelPicked(labelId) {
            this.$emit('labelPicked', labelId)
        }
    },
}
</script>
<style >
.labels-container {
    padding-block: 10px;
}

.labels-container .label {
    cursor: pointer;
    width: 160px;
    height: 36px;
}

.labels-container .label:not(:last-child) {
    margin-bottom: 10px;
}
</style>