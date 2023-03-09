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
    <div class="row mb-0">
      <h4 id="eventName" >{{ event.alertName }}</h4>
    </div>
    <div class="row">
      <div class="col">
        <p class="mb-0">{{ new Date(event.time).toLocaleTimeString() }} :שעה</p>
      </div>
      <div class="col">
        <p class="mb-0">{{ new Date(event.time).toLocaleDateString() }} :תאריך</p>
      </div>
    </div>

    <div class="text-left">
      <i
        v-bind:id="'openExtraInfoButton' + event._id"
        v-bind:href="'#event' + event._id"
        class="fa fa-chevron-down m-2"
        @click="removeDropdown(event._id)"
        data-toggle="collapse"
      >
      </i>
    </div>

    <div v-bind:id="'event' + event._id" class="collapse">
      <b-container>
        <b-row>
          <b-col>
            <p class="detail" dir="rtl">סוג אירוע: {{ this.eventTypeById }}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="detail" dir="rtl">חטמ"ר: {{ this.sectorById }}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p dir="rtl">אמל"ח: {{ this.weaponById }}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>מיקום: {{ event.coordinates }}</p>
          </b-col>
        </b-row>
        <b-row v-if="event.description">
          <b-col>
            <p>תיאור האירוע: {{ event.description }}</p>
          </b-col>
        </b-row>
        <b-row v-if="event.terrorists">
          <b-col>
            <p> כמות מפגעים: {{ event.terrorists}}</p>
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
         <div class="text-left">
      <i
        v-bind:id="'closeExtraInfoButton' + event._id"
        v-bind:href="'#event' + event._id"
        class="fa fa-chevron-up m-2"
        @click="addDropdown(event._id)"
        data-toggle="collapse">
      </i>
    </div>
      </b-container>
    </div>
    <div v-if="event.isOpen">
      <b-button 
      v-bind:id="'closeEvent' + event._id" 
      class="closeButton" 
      @click="closeEvent(event._id)" 
      variant="secondary">סגור אירוע</b-button>

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
      weaponById:"",
      sectorById:""
    };
  },
  async created() {
    const event = (await api.eventTypes().getEventTypeById(this.event.eventType))
      .data;
    this.eventTypeById = event.name;

    const weapon = (await api.weapons().getWeaponById(this.event.weapon))
      .data;
    this.weaponById = weapon.weaponName;

    const sector = (await api.sectors().getSectorById(this.event.sector))
      .data;
    this.sectorById = sector.name;
  },

  computed: {
    
  },
  methods: {
    ...mapActions(["changeSelectedLocation"]),
    async closeEvent(id) {
      await api.events().closeEvent(id);
      // await api.events().sendCloseEventToPolygon(this.event.coordinates[0], this.event.coordinates[1])
      document.getElementById(`eventComponent${id}`).style.border =
        "2px solid #000000";
      document.getElementById(`closeEvent${id}`).style.display = "none";
      await api.events().sendCloseEventToPolygon(this.event.coordinates[0], this.event.coordinates[1])
    },
    removeDropdown(id) {
      document.getElementById(`openExtraInfoButton${id}`).style.display = "none";
    },
    addDropdown(id) {
      document.getElementById(`openExtraInfoButton${id}`).style.display = "flex";
    }
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
  margin-top: 1vh;
  margin-bottom: 1vh;
}
#extraInfoButton {
  margin: 1vh;
}
.closeButton {
  margin-bottom: 1vh;
}
.detail{
  margin-bottom: -1vh;
}
#eventName{
  font-weight: bold;
}

</style>
