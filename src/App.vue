<template>
  <div id="app">
    <filter-component />
   <!-- <Navbar />
   <NewEventComponent /> -->
  </div>
</template>

<script>
import FilterComponent from "./components/FilterComponent.vue";
import NewEventComponent from './components/NewEventComponent.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: "App",
  components: {
    FilterComponent,
    NewEventComponent,
    Navbar,
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
