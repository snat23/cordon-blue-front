<template>
  <div id="app">
    
   <Navbar />
   <NewEventComponent />
  </div>
</template>

<script>
import NewEventComponent from './components/NewEventComponent.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: "App",
  components: {
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
