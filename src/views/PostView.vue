<template>
    <section class="p-4">
        <h1 class="text-5xl font-bold">Post It Friends</h1>
        <!-- Filtro por usuario -->
        <div class="my-5">
            <label class="block font-semibold">Filtrar por usuario:</label>
            <select class="border p-2 rounded" v-model="userSelected">
                <option value="">Todos</option>
                <option v-for="user in allUsers" :key="user" :value="user.id">
                    {{ user.name }}
                </option>
            </select>
        </div>
        <!-- Lista de notas -->
        <h2 class="text-xl font-bold">Post-its</h2>
        <div class=" bg-[#eed09d] p-[5rem] md:flex flex-wrap gap-5 justify-center">
            <div v-for="post in postsFiltrados" :key="post.id" class="bg-[#ffff72] p-5 w-[30%] shadow-md relative">
                <img class="absolute-left-[-45%] top-[0%] w-[10%]" src="https://cdn.pixabay.com/photo/2013/07/12/14/10/pushpin-147918_640.png" alt="chichenta">
                <h3 class="font-bold text-orange-500 text-xl uppercase ">{{ post.title }}</h3>
                <p class="text-md">{{ post.body }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "PostView",
    data() {
        return {
            userSelected: ""
        };
    },
    computed: {
        ...mapGetters(["allPosts", "allUsers", "postByUser"]),
        postsFiltrados() {
            if (this.userSelected){ 
                return this.postByUser(Number(this.userSelected))
            }
            return this.allPosts
        }
    },
    methods: {
        ...mapActions(["getUsers", "getPosts"])
    },
    mounted() {
        this.getPosts()
        this.getUsers()
    }
};
</script>

