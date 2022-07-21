<template>
    <section class="attr-container">
        <div v-for="user in people" :key="user.id">
            <img class="avatar" :src="user.imgUrl" :title="user.fullName">
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
 .avatar {
     position: relative;
     display: inline-block;
     /* margin-top: 20px; */
     width: 30px;
     height: 30px;
     border-radius: 50%;
 }
 
 .avatar[title]:hover::after {
     content: attr(title);
     position: absolute;
     top: -100%;
     left: 0;
 }
 </style>