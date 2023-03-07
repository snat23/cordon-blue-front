<template>
  <div id="eventComponent" class="container">
    <div class="row">
      <p>{{ event.coordinates }} :מיקום</p>
      <p>{{ new Date(event.time).toLocaleDateString() }} :תאריך</p>
    </div>
    <div class="row">
      <p dir="rtl">סוג אירוע: {{ nameById }}</p>
      <p>{{ new Date(event.time).toLocaleTimeString() }} :שעה</p>
    </div>

    <div class="text-left">
      <i
        id="extraInfoButton"
        v-bind:href="'#event' + event.id"
        class="fa fa-chevron-down"
        data-toggle="collapse"
      >
      </i>
    </div>

    <div v-bind:id="'event' + event.id" class="collapse">
      <p>{{ event.alertName }} :מידע נוסף</p>
    </div>
    <b-button @click="closeEvent(event._id)" variant="secondary">סגור</b-button>
  </div>
</template>
<script>
import collapse from "bootstrap/js/src/collapse";
import api from "../../api/api.js";

export default {
  name: "event",
  props: {
    event: Object,
  },
  data() {
    return {
      nameById: "",
    };
  },
  async created() {
    //console.log(this.event.eventType);
    const data = (await api.eventTypes().getEventTypeId(this.event.eventType))
      .data;
    this.nameById = data.name;
  },
  methods: {
    async closeEvent(id) {
      this.$emit("closeEvent");
      console.log(this.event.isOpen);
      await api.events().closeEvent(id);
      console.log(this.event.isOpen);
    },
  },
};
</script>

<style scoped>
#eventComponent {
  border-radius: 25px;
  border: 2px solid #000000;
  margin: 2vh;
  max-width: 70vh;
  max-height: 30vh;
}
.row {
  justify-content: space-around;
  margin-top: 2vh;
}
#extraInfoButton {
  margin: 2vh;
}
</style>
