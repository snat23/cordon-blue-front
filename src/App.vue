<template>
  <div id="app">
    <nav-bar />
    <sidebar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue";
import Sidebar from "./components/FloatingSidebar.vue"

export default {
  name: "App",
  components: {
    NavBar,
    Sidebar
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

body {
  /* background-image: url("assets/background.jpg"); */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
