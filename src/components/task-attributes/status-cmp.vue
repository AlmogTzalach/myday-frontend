<template>
    <el-popover :placement="modalPlacement" :width="'Min width 200px'" trigger="click" v-model:visible="visible">
        <template #reference>
            <section class="attr-container label-container" :style="{ 'background-color': status.color }" @mousedown="changePlacement"
                @click="visible = !visible">
                <div class="label">
                    <p>{{ status.title }}</p>
                </div>
            </section>
        </template>
        <label-picker :labels="this.statusLabels" @labelPicked="changeStatus" @closePicker="visible = false"
            @labelsEdited="statusLabelsEdited" @onAddLabel="addStatusLabel" @removeLabel="removeStatusLabel"> 
        </label-picker>
    </el-popover>
</template>

<script>
import labelPicker from '../label-picker.vue'

export default {
    name: "statusCmp",

    props: {
        task: Object,
    },

    data() {
        return {
            modalPlacement: 'bottom',
            visible: false
        }
    },

    methods: {
        changePlacement(ev) {
            const vpH = window.innerHeight
            this.modalPlacement = ev.clientY > (vpH / 2) ? 'top' : 'bottom'
        },
        changeStatus(statusId) {
            const newTask = JSON.parse(JSON.stringify(this.task))
            newTask.statusId = statusId
            this.$emit('dataChanged', newTask)
        },
        statusLabelsEdited(labels) {
            this.$emit('statusLabelsEdited', labels)
        },
        addStatusLabel(){
            this.$emit('addStatusLabel')
        },
         removeStatusLabel(labelId) {
            this.$emit('removeStatusLabel', labelId)
        }
    },

    computed: {
        statusId() {
            const { statusId } = this.task
            return statusId
        },
        status() {
            const statusLabels = this.$store.getters.status
            return statusLabels.find(label => label.id === this.statusId)
        },
        statusLabels() {
            return JSON.parse(JSON.stringify(this.$store.getters.status))
        }
    },

    components: {
        labelPicker
    }
}
</script>
