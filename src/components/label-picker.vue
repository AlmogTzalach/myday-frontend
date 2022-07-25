<template >
    <div class="labels-container">
        <!-- <div class="labels-container flex column align-center"> -->
        <div v-if="!isEdit" class="label text-center flex align-center justify-center" v-for="label in labels"
            :key="label.id" :style="{ 'background-color': label.color }" @click="onLabelPicked(label.id)">
            <p>{{ label.title }}</p>
        </div>
        <div v-else class="edit-label-container flex align-center" v-for="label in labels" :key="label.color">
            <el-input v-model="label.title" @input="onLabelsEdited">
                <template #prefix>
                    <div class="color-display" :style="{ 'background-color': label.color }">
                        <el-color-picker v-model="label.color" @change="onLabelsEdited" />
                    </div>
                </template>
            </el-input>
            <img class="delete-btn" :class="isDisabled(label.id)" src="../assets/icons/close-small.svg"
                @click="removeLabel(label.id)" :title="isRemovableTitle(label.id)">
        </div>
        <button v-if="isEdit" class="new-label-btn flex justify-center align-center" @click="onAddLabel"> <img
                src="../assets/icons/add.svg">New
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
        },
        onAddLabel() {
            this.$emit('onAddLabel')
        },
        isRemovableTitle(labelId) {
            if (this.statusInUse.includes(labelId) || this.priorityInUse.includes(labelId)) return "You can't delete a label while in use"
            else return 'Delete'
        },
        isDisabled(labelId) {
            if (this.statusInUse.includes(labelId) || this.priorityInUse.includes(labelId)) return 'is-disabled'
            else return 'is-active'
        },
        removeLabel(labelId) {
            if (this.statusInUse.includes(labelId) || this.priorityInUse.includes(labelId)) return
            else this.$emit('removeLabel', labelId)
        }
    },
    computed: {
        statusInUse() {
            return this.$store.getters.statusInUse
        },
        priorityInUse() {
            return this.$store.getters.priorityInUse
        },
    },
}
</script>