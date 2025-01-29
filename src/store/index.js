import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [],
    users: []
  },
  getters: {
    allPosts(state){
      return state.posts
    },
    allUsers(state){
      return state.users
    },
    postByUser: (state) => (Id) =>{
      return state.posts.filter((p) => p.userId == Id)
      
    }
  },
  mutations: {
    SET_POSTS(state, posts){
      state.posts = posts
    },
    SET_USERS(state, users){
      state.users = users
    }
  },
  actions: {
    async getPosts({commit}){
      try{
        let resp = await fetch('http://jsonplaceholder.typicode.com/posts')
        let data = await resp.json()
        commit('SET_POSTS', data)
      }catch(error){
        console.log('Error al solicitar los posts', error)
      }
    },
    async getUsers({commit}){
      try{
        let resu = await fetch('http://jsonplaceholder.typicode.com/users')
        let users = await resu.json()
        commit('SET_USERS', users)
      }catch(error){
        console.log('Error al solicitar los users', error)
      }
    }
  },
  modules: {
  }
})