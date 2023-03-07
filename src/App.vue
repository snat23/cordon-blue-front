<template>
  <div id="app">
    <Login />
    <router-link />
  </div>
</template>

<script>
import Login from "./views/Login.vue"


export default {
  name: "App",
  components: {
    Login
  },
  
  
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Heebo");

#app {
  font-family: "Heebo";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
