<template>
  <div
    @click="
      changeSelectedLocation([event.coordinates[0], event.coordinates[1]])
    "
    v-bind:id="'eventComponent' + event._id"
    class="container event"
    v-bind:style="[
      event.isOpen
        ? { border: '2px solid #f00c0c' }
        : { border: '2px solid #000000' },
    ]"
  >
    <div class="row">
      <h5>{{ event.alertName }}</h5>
    </div>
    <div class="row">
      <div class="col">
        <p>{{ new Date(event.time).toLocaleTimeString() }} :שעה</p>
      </div>
      <div class="col">
        <p>{{ new Date(event.time).toLocaleDateString() }} :תאריך</p>
      </div>
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
      <h5>:מידע נוסף</h5>
      <b-container>
        <b-row>
          <b-col>
            <p dir="rtl">סוג אירוע: {{ this.eventTypeById }}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>מיקום: {{ event.coordinates }}</p>
          </b-col>
        </b-row>
        <b-row>
          <section v-if="injuries">
            <b-container class="injured-info-container">
              <b-row class="justify-content-md-center">
                <b-button variant="outline-dark" disabled>
                  פצועים קל:
                  {{ this.event.Injuries[0][1] }}
                </b-button>
              </b-row>
              <b-row class="justify-content-md-center">
                <b-button variant="warning" disabled>
                  פצועים בינוני:
                  {{ this.event.Injuries[1][1] }}
                </b-button>
              </b-row>
              <b-row class="justify-content-md-center">
                <b-button variant="danger" disabled>
                  פצועים קשה:
                  {{ this.event.Injuries[2][1] }}
                </b-button>
              </b-row>
            </b-container>
          </section>
        </b-row>
      </b-container>
    </div>
    <div v-if="event.isOpen">
      <b-button
        id="closeEvent"
        @click="closeEvent(event._id)"
        variant="secondary"
        >סגור אירוע</b-button
      >
    </div>
  </div>
</template>
<script>
import collapse from "bootstrap/js/src/collapse";
import api from "../../api/api.js";
import { mapActions } from "vuex";

export default {
  name: "event",
  props: {
    event: Object,
  },
  data() {
    return {
      eventTypeById: "",
      injuries: true,
    };
  },
  async created() {
    const data = (await api.eventTypes().getEventTypeById(this.event.eventType))
      .data;
    console.log("data" + data);
    this.eventTypeById = data.name;
  },

  computed: {},
  methods: {
    ...mapActions(["changeSelectedLocation"]),
    async closeEvent(id) {
      console.log(this.event.isOpen);
      await api.events().closeEvent(id);
      console.log(this.event.isOpen);
      console.log(`eventComponent${id}`);
      document.getElementById(`eventComponent${id}`).style.border =
        "2px solid #000000";
      document.getElementById(`eventComponent${id}`).style.display = "none";
    },
  },
};
</script>

<style scoped>
.event {
  border-radius: 25px;
  border: 2px solid #000000;
  margin: 2vh;
  max-width: 70vh;
  background-color: aliceblue;
}
.row {
  justify-content: space-around;
  margin-top: 2vh;
}
#extraInfoButton {
  margin: 2vh;
}
#closeEvent {
  margin-bottom: 1vh;
}
</style>
