<template>
  <l-map
    style="height: 750px"
    :zoom="zoom"
    :center="center"
    @click="getLocation"
  >
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker
      v-for="(event, index) in events"
      :key="index"
      :lat-lng="event"
      :icon="icon"
    ></l-marker>
  </l-map>
</template>

<script>
import { mapActions } from "vuex";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import dangerIcon from "../assets/danger.png";
export default {
  name: "main-map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 10,
      center: latLng(32.0619, 35.1124),
      events: [
        [32.0619, 35.1124],
        [32.1203, 35.1402],
        [32.1223, 35.1202],
      ],
      icon: L.icon({
        iconUrl: dangerIcon,
        iconSize: [22, 22],
        iconAnchor: [16, 37],
      }),
    };
  },
  methods: {
    ...mapActions(["changeSelectedLocation"]),
    getLocation(event) {
      const location = [event.latlng.lat, event.latlng.lng];
      this.changeSelectedLocation(location);
    },
  },
};
</script>
