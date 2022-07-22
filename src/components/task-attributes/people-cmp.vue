<template>
    <section class="attr-container">
        <div v-for="user in people" :key="user.id" class="flex align-center">
            <!-- <img class="avatar" :src="user.imgUrl" :title="user.fullName"> -->
            <el-avatar :size="30" :src="user.imgUrl" :fit="'fill'" :title="user.fullName" />
        </div>
    </section>
</template>

<script>
export default {
    name: "peopleCmp",

    props: {
        people: Array,
    },

    data() {
        return {}
    },

    computed: {
    },
}
</script>
 <style>
 </style>