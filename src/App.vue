<template>
  <div id="app">
    <Navbar />
    <Sidebar :lastEventsList="events"/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Sidebar from "./components/FloatingSidebar.vue";
import api from '../api/api.js';
import Map from "./components/MapComponent.vue"

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    Map,
  },
  data() {
    return {
      events: [],
    }
  },
  async created() {   
    this.events = await (await api.events().getEvents()).data;  
    console.log(this.events);
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
  background-color: #fae7c5;
  background-image: url('../src/assets/rooster_logo.png');
  background-repeat: no-repeat;
  background-size: 600px;
  background-position: -200px 450px;
  background-attachment: fixed;
}
</style>
