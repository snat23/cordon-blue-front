<template>
  <div id="app">
    <nav-bar />
    <sidebar />
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import Sidebar from "./components/FloatingSidebar.vue"

export default {
  name: 'App',
  components: {
    NavBar,
    Sidebar
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
  margin-top: 60px;
}
</style>
