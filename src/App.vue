<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
    }
  },  
  methods: {
    getUserInfo() {
      this.axios.get('/user').then((res)=>{
        this.$store.dispatch("saveUsername",res.username);
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then(res=>{
        this.$store.dispatch("saveCartcount",res);
      })
    }
  },
  mounted() {
    this.getUserInfo();
    this.getCartCount();
  } 
}
</script>

<style lang="scss">
  @import './assets/reset.scss';
#app {
  .container {
    width: 1226px;
    margin: 0 auto;
  }
}
</style>
