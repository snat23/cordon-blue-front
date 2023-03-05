<template>
  <div id="app">
    <NewEventComponent />
    <!-- <nav-bar />
    <router-view /> -->
  </div>
</template>

<script>
import NewEventComponent from './components/NewEventComponent.vue';

export default {
  name: "App",
  components: {
    NewEventComponent,
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
