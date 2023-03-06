<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    <!-- <Map /> -->
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Sidebar from "./components/FloatingSidebar.vue";
import Map from "./components/MapComponent.vue"


export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    Map,
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
