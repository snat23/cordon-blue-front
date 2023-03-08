<template>
  <div id="map">
    <l-map
      style="height: 750px"
      :zoom="zoom"
      :center="center"
      @click="getLocation"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        v-for="(event, index) in noFlightsEvents"
        :key="index"
        :lat-lng="event.coordinates"
        :icon="eventIcon"
      ></l-marker>

      <l-marker
        v-for="(event, index) in flights"
        :key="index"
        :lat-lng="event.coordinates"
        :icon="flightIcon"
      ></l-marker>

      <l-circle
        v-if="isCurrent"
        :lat-lng="this.selectedLocation"
        :radius="circle.radius"
        :color="circle.color" 
      />
    </l-map>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LCircle } from "vue2-leaflet";
import dangerIcon from "../assets/danger.png";
import currentIcon from "../assets/asterisk.png";
import flightIcon from "../assets/flight.png";
import api from '../../api/api.js'

export default {
  name: "main-map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircle,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 10,
      center: latLng(32.0619, 35.1124),
      events: [],
      eventIcon: L.icon({
        iconUrl: dangerIcon,
        iconSize: [22, 22],
        iconAnchor: [16, 37],
      }),
      currentIcon: L.icon({
        iconUrl: currentIcon,
        iconSize: [22, 22],
        iconAnchor: [16, 37],
      }),
      flightIcon: L.icon({
        iconUrl: flightIcon,
        iconSize: [18, 18],
        iconAnchor: [16, 37],
      }),
      isCurrent: false,
      circle: {},
      flightsEvent:[],
    };
  },
  async created () {
    const allEvents = await (await api.events().getEvents()).data;
    console.log(allEvents)
    // this.events = (allEvents.filter((event) => event.isOpen)).map((event) => {event.coordinates, event.eventType});
    // console.log(this.events)
    this.events = (allEvents.filter((event) => event.isOpen));
    console.log(this.events)
  },
  methods: {
    ...mapActions(["changeSelectedLocation"]),
    getLocation(event) {
      this.circle = {
        center: [event.latlng.lat, event.latlng.lng],
        radius: 200,
        color: "red",
      };
      this.isCurrent = true;
      this.changeSelectedLocation([event.latlng.lat, event.latlng.lng]);
    },
  },
  computed: {
    ...mapState(["selectedLocation"]),
    flights(){
      return this.events.filter((event) => event.eventType == 9);
    },
    noFlightsEvents(){
      return this.events.filter((event) => event.eventType !== 9);
    }
  },
};
</script>

<style scoped>

</style>