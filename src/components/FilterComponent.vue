<template>
  <div>
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

    <label>מיקום:</label>
    <b-input-group>
      <b-form-input
        id="input-2"
        v-model="place"
        placeholder="Enter name"
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
</template>

<script>
import api from "../../api/api.js";

export default {
  data() {
    return {
      place: null,
      date: null,
      formatted: "",
      selected: "",
      selectedEvent: null,
      selectedWeapon: null,
      eventTypes: null,
      weaponTypes: null,
      events: [],
    };
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

      this.selectedWeapon !== null ? this.selectedWeapon = (await api.weapons().getWeaponByName(this.selectedWeapon)).data : null;
      this.selectedEvent !== null ? this.selectedEvent = (await api.eventTypes().getEventTypeByName(this.selectedEvent)).data : null;
      const dateSelected = new Date(this.date);
      let endOfDaySelected =  new Date();
      endOfDaySelected.setDate(dateSelected.getDate() + 1);
      const filteredEvents = this.filterEventsList.filter((event) => {
        const eventDate = new Date(event.time);
        console.log(((dateSelected <= eventDate) && (eventDate < endOfDaySelected)));
      return (((this.place === event.place) || (this.place === null)) && 
      (((dateSelected <= eventDate) && (eventDate < endOfDaySelected)) || (this.date === null))&&
      ((this.selectedWeapon === null) || (this.selectedWeapon.weaponId === event.weapon)) && 
      ((this.selectedEvent === null) || (this.selectedEvent.eventId === event.eventType)))
      });

      console.log(filteredEvents);
      return this.events;
    },
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
</style>
