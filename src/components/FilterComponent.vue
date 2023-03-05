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
      <b-form-select v-model="selectedEvent" :options="options"></b-form-select>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      place: "",
      value: "",
      formatted: "",
      selected: "",
      selectedEvent: null,
      options: ["a", "b", "c"],
    };
  },
  methods: {
    onContext(ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted;
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD;
    },
  },
};
</script>
