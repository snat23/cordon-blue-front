<template>
  <bdi>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <img src="@/assets/logo.png" class="icon" />
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-nav-form v-if="selectedLocation">
        <b-dropdown id="selectLocation" :text="selectedLocation.name">
          <b-dropdown-item
            @click="locationSelected(location)"
            v-for="location in locationsToOptions"
            :key="location.text"
          >
            {{ location.text }}
          </b-dropdown-item>
        </b-dropdown>
      </b-nav-form>

      <b-tooltip target="selectLocation" placement="right">
        <strong>לחץ </strong> כדי לשנות מיקום
      </b-tooltip>
    </b-navbar>
  </bdi>
</template>

<script>
import { mapActions, mapState } from "vuex";
import api from "../api.js";

export default {
  name: "Navbar",
  data() {
    return {
      locations: [],
    };
  },
  computed: {
    ...mapState(["selectedLocation"]),
    locationsToOptions() {
      return this.locations.map((loc) => {
        return {
          value: loc,
          text: loc.name,
        };
      });
    },
  },
  async created() {
    await this.loadFromServer();
    this.updateLocation(this.locations[0]);
  },
  methods: {
    ...mapActions(["updateLocation"]),
    locationSelected(location) {
      this.updateLocation(location.value);
      this.$alertify.success("המיקום התעדכן");
    },
    async loadFromServer() {
      try {
        const { data } = await api.locations().getAll();
        this.locations = data;
      } catch (err) {
        this.errorMsg("יש בעייה בטעינת המיקומים");
      }
    },
    errorMsg(msg) {
      this.$alertify.error(msg);
    },
    successMsg(msg) {
      this.$alertify.success(msg);
    },
  },
};
</script>

<style scoped>
.icon {
  height: 4.4vw;
}
</style>
