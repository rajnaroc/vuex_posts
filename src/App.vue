<template>
  <router-view/>
</template>

<script>
  import { mapActions } from 'vuex'
export default{
  methods:{
    ...mapActions(["allPost"])
  },
  mounted(){
    this.allPost()
  }
}
</script>

