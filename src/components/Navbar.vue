<template>
  <bdi>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <img src="../assets/user-icon.png" class="user-icon" 
      />
      <h1>Cordon Blue</h1>
      <button> 
        <img src="../assets/blue-chicken.png" alt="buttonpng" border="0" height="50px"  />
      </button>
      <button> <img src="../assets/blue-chicken.png" alt="buttonpng" border="0" height="50px"  /> </button>
      <button> <img src="../assets/blue-chicken.png" alt="buttonpng" border="0" height="50px"  /> </button>
    </b-navbar>
  </bdi>
</template>

<script>

export default {
  name: "Navbar",
  data() {
    return {
      locations: [],
    };
  },
  computed: {
  },
  async created() {
  },
  methods: {
  },
};
</script>

<style scoped>
.user-icon {
  height: 4.4vw;
  float: left;
}
</style>
