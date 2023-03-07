<template>
  <div>
    <label for="example-input">Choose a date</label>
    <b-input-group class="mb-3">
      <b-form-input
        id="example-input"
        v-model="value"
        type="text"
        placeholder="YYYY-MM-DD"
        autocomplete="off"
      ></b-form-input>
      <b-input-group-append>
        <b-form-datepicker
          v-model="value"
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
        :options="eventsOptions"
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
        :options="weaponsOptions"
      ></b-form-select>
    </b-input-group>
    <b-button type="submit" @onClick="getFilteredArray" variant="primary"
      >סנן</b-button
    >
  </div>
</template>

<script>
import api from "../api.js"
export default {
  data() {
    return {
      place: "",
      value: "",
      formatted: "",
      selected: "",
      selectedEvent: null,
      selectedWeapon: null,
      eventsOptions: ["a", "b", "c"],
      weaponsOptions: ["d", "e", "f"],
      events: [],
    };
  },
  methods: {
    onContext(ctx) {
      this.formatted = ctx.selectedFormatted;
      this.selected = ctx.selectedYMD;
    },
    async getFilteredArray() {
      alert("hfjdhf");
      const conditions = {time: this.value, coordinates: this.place, eventType: this.selectedEvent, weapon: this.selectedWeapon, sector: this.selectedSector};
      this.events = await api.getFilteredArray(conditions).data;

      alert(JSON.stringify(this.events));


      return this.events;
    },
  },
};
</script>
