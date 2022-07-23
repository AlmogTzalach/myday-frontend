<template>
    <section class="attr-container">
                <div v-for="person in people" :key="person.id" class="flex align-center">
                    <el-avatar :size="30" :src="person.imgUrl" :fit="'fill'" :title="person.fullName" />
                </div>
    </section>
</template>

<script>
export default {
    name: "peopleCmp",

    props: {
        task: Object,
    },

    data() {
        return {
            modalPlacement: 'bottom'
        }
    },

    methods: {
        changePlacement(ev) {
            const vpH = window.innerHeight
            this.modalPlacement = ev.clientY > (vpH / 2) ? 'top' : 'bottom'
        },
    },

    computed: {
        people() {
            const { people } = this.task
            return people
        },
        users() {
            return this.$store.getters.users
        }
    },
}
</script>
 <style>
 .avatar{
    width: 30px;
    height: 30px;
    border-radius: 50%;
 }
 </style>