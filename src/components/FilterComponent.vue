<template>
<div dir="ltr">
  <div v-if="showFilter">
    <label for="example-input">בחר תאריך</label>
    <b-input-group class="mb-3">
      <b-form-input
        id="example-input"
        v-model="date"
        type="text"
        placeholder="YYYY-MM-DD"
        autocomplete="off"
      ></b-form-input>
      <b-input-group-append>
        <b-form-datepicker
          v-model="date"
          button-only
          right
          locale="en-US"
          aria-controls="example-input"
          @context="onContext"
        ></b-form-datepicker>
      </b-input-group-append>
    </b-input-group>
    <hr />
    <label>סוג אירוע</label>
    <b-input-group>
      <b-form-select
        v-model="selectedEvent"
        :options="eventTypes"
      ></b-form-select>
    </b-input-group>

    <label>מיקום X:</label>
    <b-input-group>
      <b-form-input
        id="input-2"
        v-model="placeX"
        required
      ></b-form-input>
    </b-input-group>

    <label>מיקום Y:</label>
    <b-input-group>
      <b-form-input
        id="input-2"
        v-model="placeY"
        required
      ></b-form-input>
    </b-input-group>

    <label>אמל''ח</label>
    <b-input-group>
      <b-form-select
        v-model="selectedWeapon"
        :options="weaponTypes"
      ></b-form-select>
    </b-input-group>
    <b-button
      type="submit"
      @click="getFilteredArray"
      variant="primary"
      class="but"
      >סנן</b-button
    >
  </div>
  <div v-else > 
    <div> <b-button
      @click="backToFilter"
      variant="primary"
      class="but"
      >חזור לסינון</b-button
    >
    <h1>אירועים לאחר סינון </h1></div>
      <last-events :lastEvents="currentFilteredEvents"  class="col-12 mt-3 text-center list-group" id="lastEventsCom"/>
  </div>
</div>
</template>

<script>
import api from "../../api/api.js";
import LastEvents from "./LastEvents.vue";
export default {
  data() {
    return {
      placeX: null,
      placeY: null,
      date: null,
      formatted: "",
      selected: "",
      selectedEvent: null,
      selectedWeapon: null,
      eventTypes: null,
      weaponTypes: null,
      events: [],
      showFilter: true,
      currentFilteredEvents: [],
    };
  },
   components: {
    LastEvents,
  },
  props: {
    filterEventsList: Array,
  },
  async created() {
    this.eventTypes = (await api.eventTypes().getEventTypes()).data;
    this.weaponTypes = (await api.weapons().getWeaponsTypes()).data;

    this.eventTypes = this.eventTypes.map((event) => event.name);
    this.weaponTypes = this.weaponTypes.map((weapon) => weapon.weaponName);
  },
  methods: {
    onContext(ctx) {
      this.formatted = ctx.selectedFormatted;
      this.selected = ctx.selectedYMD;
    },
    async getFilteredArray() {
      let place;
      if(this.placeX!= null && this.placeY!= null){
        place = [this.placeX, this.placeY];
      } else {
        place = null;
      }
      
      this.selectedWeapon !== null ? this.selectedWeapon = (await api.weapons().getWeaponByName(this.selectedWeapon)).data : null;
      this.selectedEvent !== null ? this.selectedEvent = (await api.eventTypes().getEventTypeByName(this.selectedEvent)).data : null;
      let dateSelected = null;   
      let endOfDaySelected = null;

      if(this.date !== null) {
        dateSelected = new Date(this.date);
        endOfDaySelected = new Date(dateSelected);
        endOfDaySelected.setDate(dateSelected.getDate() + 1);
      }

  const filteredEvents = this.filterEventsList.filter((event) => 
    (this.checkPlace(event, place) && 
    this.checkDate(event, dateSelected, endOfDaySelected) &&
    this.checkWeapon(event) &&
    this.checkType(event))
 );

      this.showFilter=false;
      this.currentFilteredEvents = filteredEvents;

    },
    backToFilter() {
      this.showFilter=true;
      this.placeX = null,
      this.placeY = null,
      this.date = null,
      this.formatted = "",
      this.selected = "",
      this.selectedEvent = null,
      this.selectedWeapon = null,
      this.events = [],
      this.currentFilteredEvents = []
    },
    checkPlace(event, place) {
      return place === null || place.toString() === event.coordinates.toString(); 
    },
    checkDate(event, dateSelected, endOfDaySelected) {
      return this.date === null || (dateSelected <= new Date(event.time) && new Date(event.time) < endOfDaySelected); 
    },
    checkWeapon(event) {
      return this.selectedWeapon === null || this.selectedWeapon.weaponId === event.weapon; 
    },
    checkType(event) {
      return this.selectedEvent === null || this.selectedEvent.eventId === event.eventType;
    }
  },
};
</script>

<style scoped>
.but {
  margin: 5px;
  color: black;
  background-color: #a1cfed;
  border-color: #84bee6;
}
#lastEventsCom {
  width: 400px;
  margin-left: -100px;
}
.list-group {
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 10px;
  max-height: 100vh;
  width: 10px;
}
</style>
