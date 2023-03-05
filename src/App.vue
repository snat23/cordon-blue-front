<template>
  <div id="app">
    <filter-component />
    <!-- <nav-bar />
    <router-view /> -->
  </div>
</template>

<script>
import FilterComponent from "./components/FilterComponent.vue";

export default {
  name: "App",
  components: {
    FilterComponent,
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
