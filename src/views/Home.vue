<template>
    <Navbar />
    <Sidebar :lastEventsList="events"/>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Sidebar from "./components/FloatingSidebar.vue";
import api from '../api/api.js';
import Map from "./components/MapComponent.vue"

export default {
  name: "Home",
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
  },
};
</script>

<style>
</style>