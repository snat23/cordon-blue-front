<template>
  <bdi>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <img src="../assets/user-icon.png" class="user-icon" 
      />
      
      <button> 
        <img src="../assets/blue-chicken.png" alt="buttonpng" border="0" height="50px"  />
      </button>

      <a href="https://www.youtube.com/watch?v=COfkdOu9KiI">
        <button>
          <img src="../assets/panther-logo.png" alt="buttonpng" border="0" height="50px"  /> </button>
      </a>
      
      <a href="https://www.youtube.com/watch?v=TYklMREHD-s">
          <button>
            <img src="../assets/rhino-logo.png" alt="buttonpng" border="0" height="50px"  />
           </button>
      </a>
      
      <h1>Cordon Blue</h1>
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
button {
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}
</style>
