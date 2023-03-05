<template>
  <bdi>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <img src="../assets/user-icon.png" class="user-icon" />
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
