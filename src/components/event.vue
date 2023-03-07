<template>
  <div id="eventComponent" class="container">
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
            <p dir="rtl">סוג אירוע: {{ nameById }}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>מיקום:{{ event.coordinates }}</p>
          </b-col>
        </b-row>
        <b-row>
          <section v-if="!noInjuries">
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
      eventTypeById: "",
    };
  },
  async created() {
    const data = (await api.eventTypes().getEventTypeId(this.event.eventType))
      .data;
    this.eventTypeById = data.name;
  },
  computed: {},
};
</script>

<style scoped>
#eventComponent {
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
</style>
