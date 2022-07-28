<template >
    <section>
        <div class="comment-container">
            <div class="comment-avatar flex align-center">
                <img v-if="comment.byMember?.imgUrl" class="avatar" :src="comment.byMember.imgUrl">
                <div v-else class="no-image-avatar">
                    <p>{{ comment.byMember.fullName.charAt(0) }}</p>
                </div>
                <p class="user-name">{{ comment.byMember.fullName }}</p>
            </div>
            <!-- <p class="comment-text">{{ comment.txt }}</p> -->
            <div v-html="comment.txt"></div>
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