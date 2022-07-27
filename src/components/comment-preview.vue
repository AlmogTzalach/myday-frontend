<template >
    <section>
        <div class="comment-container">
            <div class="comment-avatar flex align-center">
                <img class="avatar" :src="comment.byMember.imgUrl">
                <p class="user-name">{{ comment.byMember.fullName }}</p>
            </div>
            <p class="comment-text">{{ comment.txt }}</p>
        </div>
    </section>
</template>
<script>
export default {
    name: 'commentPreview',
    props: {
        comment: Object,
    },
}
</script>
<style >
</style>