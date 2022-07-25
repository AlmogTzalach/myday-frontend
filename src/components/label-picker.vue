<template >
    <div class="labels-container flex column align-center">
        <div v-if="!isEdit" class="label text-center flex align-center justify-center" v-for="label in labels"
            :key="label.id" :style="{ 'background-color': label.color }" @click="onLabelPicked(label.id)">
            <p>{{ label.title }}</p>
        </div>
        <div v-else class="edit-label-container" v-for="label in labels" :key="label.color">
            <el-input :value="label.title">
                <template #prefix>
                    <div class="color-display" :style="{ 'background-color': label.color }">
                        <el-color-picker v-model="label.color" @change="onChangeLabelColor" />
                    </div>
                </template>
            </el-input>
        </div>
        <div class="labels-divider"></div>
        <div class="edit-labels-btn-container flex justify-center align-center" @click="onEditLabels">
            <img src="../assets/icons/edit-labels.svg">
            <button class="edit-labels-btn">Edit Labels</button>
        </div>
    </div>
</template>
<script>

export default {
    name: 'labelPicker',
    data() {
        return {
            isEdit: false,
        }
    },
    props: {
        labels: Array
    },
    methods: {
        onLabelPicked(labelId) {
            this.$emit('labelPicked', labelId)
            this.$emit('closePicker')
        },
        onEditLabels() {
            this.isEdit = true
        },
        onLabelsEdited() {
            this.$emit('labelsEdited', this.labels)
        }
    },
}
</script>