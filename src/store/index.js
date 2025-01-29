import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [],
    users: []
  },
  getters: {
    allUser(state){
      return state.users
    },
    allPost(state){
        return state.posts
    },
    postByUser(state,id){
      return  [...state.posts].filter((a => a.userId == id ));
    }
  },
  mutations: {
    Set_POST(state,posts){
      state.posts = posts
    },
    Set_USERS(state,users){
      state.users = users
    }
  },
  actions: {
    async getPosts({commit}){
      try {
          let respo = await fetch("https://jsonplaceholder.typicode.com/posts")
          let datos = await respo.json()

          commit("Set_POST",datos)
        }
        catch(error){
            console.log(error);
  
        }
    },
    async getUsers({commit}){
      try {
        let respo = await fetch("https://jsonplaceholder.typicode.com/users")
        let datos = await respo.json()

        commit("Set_USERS",datos)
      }
      catch(error){
          console.log(error);

      }
    }
  },
  modules: {
  }
})
