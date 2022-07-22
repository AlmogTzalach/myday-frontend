<template>
    <el-popover placement="bottom" :width="200" trigger="click" @show="logEv">
        <template #reference>
            <section class="attr-container" :style="{ 'background-color': priority.color }">
                <div class="label">
                    <p>{{ priority.title }}</p>
                </div>
            </section>
        </template>
        <label-picker :labels="this.priorityLabels"></label-picker>
    </el-popover>
</template>

<script>
import labelPicker from '../label-picker.vue'

export default {
    name: "priorityCmp",

    props: {
        task: Object,
    },

    data() {
        return {}
    },

    computed: {
        priorityId() {
            const { priorityId } = this.task
            return priorityId
        },
        priority() {
            const priorityLabels = this.$store.getters.priorities
            return priorityLabels.find(label => label.id === this.priorityId)
        },
        priorityLabels() {
            return this.$store.getters.priorities
        }
    },
    methods: {
        logEv(ev) {
            console.log(ev);
        }
    },

    components: {
        labelPicker
    }
}
</script>
