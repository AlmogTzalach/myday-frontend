<template >
    <div class="labels-container flex column align-center">
        <div class="label text-center flex align-center justify-center" v-for="label in labels" :key="label.id" :style="{ 'background-color': label.color }">
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
}
</script>
<style >
.labels-container {
    padding: 20px;
}

.labels-container .label {
    cursor: pointer;
    width: 160px;
    height: 36px;
    margin-bottom: 10px;
}
</style>