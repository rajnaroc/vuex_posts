<template>
    <section class="">
        <h1>Post <I></I>t Friends</h1>
        <div class="">
            <label class="">Filtrar por usuario</label>
            <select class="" id="" v-model="userSelected">
                <option value="" disabled>Todos</option>
                <option :value="user.name" v-for="(user, index) in allUsers" :key="index">
                    {{ user.name }}
                </option>
            </select>
        </div>
        <!-- lista de notas -->
        <div class="">
            <h2 class="">Post its</h2>
            <div v-for="(post, index) in allPost" :key="index" class="">
                <h3 class="font-bold text-orange-500">{{ post.title }}</h3>
                <h3 class="">{{ post.body }}</h3>

            </div>
        </div>
    </section>
</template>

<script>
    import { mapActions,mapGetters } from 'vuex'
export default {
    name: "PostView",
    data(){
        return{
            userSelected: ""
        }
    },
    computed:{
    ...mapGetters(["allPost", "allUsers"])
    },methods:{
        ...mapActions(["getUsers","getPosts"])
    },
    mounted(){
        this.getPosts()
        this.getUsers()
    }
}
</script>

<style>

</style>