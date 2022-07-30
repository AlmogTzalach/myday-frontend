<template>
    <el-popover :placement="modalPlacement" :width="200" trigger="click" @mousedown="changePlacement">
        <template #reference>
            <section class="attr-container">
                <div class="person-container flex">
                    <div class="avatar-container" v-if="people.length" v-for="person in people" :key="person._id">
                        <img v-if="person.imgUrl" class="avatar" :src="person.imgUrl" :title="person.fullName">
                        <div v-else class="avatar no-image-avatar">
                            <p>{{ person.fullName.charAt(0) }}</p>
                        </div>
                    </div>
                    <div class="empty-avatar-container" v-else>
                        <img class="empty-avatar" src="../../assets/icons/person-round.svg" />
                    </div>
                </div>
            </section>
        </template>
        <div class="avatar-modal-container">
            <div class="small-avatar-container" v-if="people.length" v-for="person in people" :key="person._id">
                <img v-if="person.imgUrl" class="small-avatar" :src="person.imgUrl" :title="person.fullName">
                <div v-else class="avatar no-image-avatar">
                    <p>{{ person.fullName.charAt(0) }}</p>
                </div>
                <span class="small-avatar-name flex align-center">{{ person.fullName }}<img
                        src="../../assets/icons/close-small.svg" @click="onRemovePerson(person._id)"></span>
            </div>
            <div v-if="people.length" class="avatar-modal-divider"></div>
            <div v-for="user in usersNotOnTask" :key="user._id" class="users-to-add flex align-center"
                @click="onAddPerson(user)">
                <img v-if="user.imgUrl" class="avatar" :src="user.imgUrl" :title="user.fullName">
                <div v-else class="avatar no-image-avatar">
                    <p>{{ user.fullName.charAt(0) }}</p>
                </div>
                <span>{{ user.fullName }}</span>
            </div>
        </div>
    </el-popover>
</template>

<script>
export default {
    name: 'peopleCmp',

    props: {
        task: Object,
    },

    data() {
        return {
            modalPlacement: 'bottom',
        }
    },

    methods: {
        changePlacement(ev) {
            const vpH = window.innerHeight
            this.modalPlacement = ev.clientY > vpH / 2 ? 'top' : 'bottom'
        },
        onAddPerson(person) {
            const newTask = JSON.parse(JSON.stringify(this.task))
            newTask.people.push(person)
            this.$emit('dataChanged', newTask)
        },
        onRemovePerson(personId) {
            const newTask = JSON.parse(JSON.stringify(this.task))
            const idx = newTask.people.findIndex(person => person._id === personId)
            newTask.people.splice(idx, 1)
            this.$emit('dataChanged', newTask)
        }
    },

    computed: {
        people() {
            const { people } = this.task
            return people
        },
        users() {
            return this.$store.getters.users
        },
        usersNotOnTask() {
            const users = this.$store.getters.users
            const peopleId = this.task.people.map(person => person._id)
            return users.reduce((acc, user) => {
                if (!peopleId.includes(user._id)) acc.push(user)
                return acc
            }, [])
        },
    },
}
</script>
