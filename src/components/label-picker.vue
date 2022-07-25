<template >
    <div class="labels-container flex column align-center">
        <div v-if="!isEdit" class="label text-center flex align-center justify-center" v-for="label in labels"
            :key="label.id" :style="{ 'background-color': label.color }" @click="onLabelPicked(label.id)">
            <p>{{ label.title }}</p>
        </div>
        <div v-else class="edit-label-container" v-for="label in labels" :key="label.color">
            <el-input v-model="label.title" @input="onLabelsEdited">
                <template #prefix>
                    <div class="color-display" :style="{ 'background-color': label.color }">
                        <el-color-picker v-model="label.color" @change="onLabelsEdited" />
                    </div>
                </template>
            </el-input>
        </div>
        <button v-if="isEdit" class="new-label-btn" @click="onAddLabel"> <img src="../assets/icons/add.svg">New
            label</button>
        <div class="labels-divider"></div>
        <div class="edit-labels-btn-container flex justify-center align-center" @click="onToggleEdit">
            <img v-if="!isEdit" src="../assets/icons/edit-labels.svg">
            <button class="edit-labels-btn">{{ this.isEdit ? 'Apply' : 'Edit Labels' }}</button>
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
        onToggleEdit() {
            this.isEdit = !this.isEdit
        },
        onLabelsEdited() {
            this.$emit('labelsEdited', this.labels)
        }
    },
}
</script>