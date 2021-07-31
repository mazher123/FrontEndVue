<template>
  <the-header></the-header>
  <router-view> </router-view>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },

    created() {
    this.$store.dispatch('auth/tryLogin');
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
