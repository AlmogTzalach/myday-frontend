<template >
    <div class="labels-container flex column align-center">
        <div class="label text-center flex align-center justify-center" v-for="label in labels" :key="label.id"
            :style="{ 'background-color': label.color }" @click="onLabelPicked(label.id)" >
            <p>{{ label.title }}</p>
        </div>
        <div class="labels-divider"></div>
        <div class="edit-labels-btn-container flex justify-center align-center">
            <img src="../assets/icons/edit-labels.svg">
            <button class="edit-labels-btn">Edit Labels</button>
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