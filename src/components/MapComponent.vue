<template>
  <l-map style="height: 400px" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker 
    v-for="(event, index) in events"
    :key="index"
    :lat-lng="event"
    ></l-marker>
  </l-map>
</template>

<script>
import { latLng } from "leaflet";

import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

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
      zoom: 9,
      center: latLng(32.0619, 35.1124),
      events: [[32.0619, 35.1124], [32.1203, 35.1402], [32.1223, 35.1202]],
    };
  },
};
</script>
