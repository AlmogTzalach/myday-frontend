<template>
    <el-popover v-model:visible="visible" :placement="modalPlacement" :width="200" trigger="click">
        <template #reference>
            <section class="attr-container" :style="{ 'background-color': status.color }" @click="visible = true" v-click-outside.stop="onClose">
                <div class="label">
                    <p>{{ status.title }}</p>
                </div>
            </section>
        </template>
        <label-picker :labels="this.statusLabels" @labelPicked="changeStatus" @click="visible = false"></label-picker>
    </el-popover>
</template>

<script>
import labelPicker from '../label-picker.vue'
import { ref } from 'vue'

export default {
    name: "statusCmp",

    props: {
        task: Object,
    },

    data() {
        return {
            modalPlacement: 'bottom',
            visible: ref(false)
        }
    },

    methods: {
        onClose() {
            console.log('test');
            this.visible = false
        },
        changePlacement(ev) {
            const vpH = window.innerHeight
            this.modalPlacement = ev.clientY > (vpH / 2) ? 'top' : 'bottom'
        },
        changeStatus(statusId) {
            const newTask = JSON.parse(JSON.stringify(this.task))
            newTask.statusId = statusId
            this.$emit('dataChanged', newTask)
        }
    },

    computed: {
        statusId(){
            const {statusId} = this.task
            return statusId
        },
        status() {
            const statusLabels = this.$store.getters.status
            return statusLabels.find(label => label.id === this.statusId)
        },
        statusLabels() {
            return this.$store.getters.status
        }
    },

    components: {
        labelPicker
    }
}
</script>
