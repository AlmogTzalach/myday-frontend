<template>
    <el-popover placement="bottom" :width="200" trigger="click">
        <template #reference>
            <section class="attr-container" :style="{ 'background-color': status.color }">
                <div class="label">
                    <p>{{ status.title }}</p>
                </div>
            </section>
        </template>
        <label-picker :labels="this.statusLabels"></label-picker>
    </el-popover>
</template>

<script>
import labelPicker from '../label-picker.vue'

export default {
    name: "statusCmp",

    props: {
        statusId: String,
    },

    data() {
        return {}
    },

    computed: {
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
