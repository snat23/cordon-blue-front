<template>
  <div>
    <Navbar />
    <Sidebar :lastEventsList="events"/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Sidebar from "../components/FloatingSidebar.vue";
import api from '../../api/api';

export default {
  name: "Home",
  components: {
    Navbar,
    Sidebar,
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

