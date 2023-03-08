<template>
  <div>
    <section v-if="this.selectedLocation.length">
      <ul class="list-group-add-event">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="כותרת אירוע"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.alertName"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-10" label="מיקום" label-for="input-10">
            <b-form-input
              id="input-10"
              v-model="this.selectedLocation"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="סוג אירוע"
            label-for="input-2"
          >
            <b-form-select
              id="input-2"
              v-model="form.eventType"
              :options="eventTypes"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-3" label="חטמ'ר" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.sector"
              :options="sectors"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4" label="אמל''ח" label-for="input-4">
            <b-form-select
              id="input-4"
              v-model="form.weapon"
              :options="weaponTypes"
              required
            ></b-form-select>

            <b-button
              v-show="!this.showAddInjury"
              variant="primary"
              @click="showAddInjuries"
              class="but"
              >הוספת פצועים</b-button
            >
          </b-form-group>

          <section v-show="this.showAddInjury">
            <b-form-group
              id="input-group-7"
              label="פצועים קל"
              label-for="input-7"
            >
              <b-form-input
                id="input-7"
                type="number"
                v-model.number="form.Injuries[0][1]"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-8"
              label="פצועים בינוני"
              label-for="input-8"
            >
              <b-form-input
                id="input-8"
                v-model.number="form.Injuries[1][1]"
                type="number"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-9"
              label="פצועים קשה"
              label-for="input-9"
            >
              <b-form-input
                id="input-9"
                type="number"
                v-model.number="form.Injuries[2][1]"
                required
              ></b-form-input>
            </b-form-group>
            <b-button variant="primary" @click="showAddInjuries" class="but"
              >הוספת פצוע</b-button
            >
          </section>

          <section v-if="!noInjuries && !this.showAddInjury">
            <b-container class="injured-info-container">
              <b-row class="justify-content-md-center">
                <b-button variant="outline-dark" disabled>
                  פצועים קל:
                  {{ this.form.Injuries[0][1] }}
                </b-button>
              </b-row>
              <b-row class="justify-content-md-center">
                <b-button variant="warning" disabled>
                  פצועים בינוני:
                  {{ this.form.Injuries[1][1] }}
                </b-button>
              </b-row>
              <b-row class="justify-content-md-center">
                <b-button variant="danger" disabled>
                  פצועים קשה:
                  {{ this.form.Injuries[2][1] }}
                </b-button>
              </b-row>
            </b-container>
          </section>

          <b-button
            v-show="!this.showAddDesc"
            variant="primary"
            @click="showAddDescription"
            class="but"
            >הוספת תיאור לאירוע
          </b-button>

          <section v-show="this.showAddDesc">
            <b-form-group
              id="input-group-11"
              label="תיאור לאירוע"
              label-for="input-11"
            >
              <b-form-textarea
                id="input-11"
                v-model="form.description"
                required
              ></b-form-textarea>
            </b-form-group>
          </section>

          <section>
            <b-button
              v-show="!this.showAddTerrorists"
              variant="primary"
              @click="showAddTerror"
              class="but"
              >הוספת מפגעים
            </b-button>

            <section v-show="this.showAddTerrorists">
              <b-form-group
                id="input-group-12"
                label="כמות מפגעים"
                label-for="input-12"
              >
                <b-form-input
                  id="input-12"
                  type="number"
                  v-model.number="form.terrorists"
                  required
                ></b-form-input>
              </b-form-group>
              <b-button
                v-show="this.showAddTerrorists"
                variant="primary"
                @click="showAddTerror"
                class="but"
                >הוספת מפגע
              </b-button>
            </section>
          </section>

          <section v-if="this.form.terrorists !== 0 && !this.showAddTerrorists">
            <b-button variant="outline-danger" disabled>
              כמות מפגעים:
              {{ this.form.terrorists }}
            </b-button>
          </section>

          <b-button type="submit" variant="success" class="submit"
            >פרסם</b-button
          >
          <b-button type="reset" variant="danger" class="reset">אפס</b-button>
        </b-form>
      </ul>
    </section>
    <section v-else>
      <b-card class="no-location-error-card">
        <b-card-body>
          <b-card-title>
            <h2>יש לבחור מיקום מהמפה בשביל להוסיף אירוע</h2>
          </b-card-title>
          <b-card-text> </b-card-text>
        </b-card-body>
      </b-card>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import api from "../../api/api.js";

export default {
  data() {
    return {
      form: {
        alertName: null,
        time: Date.now(),
        weapon: null,
        eventType: null,
        coordinates: null,
        sector: null,
        Injuries: [
          [1, 0],
          [2, 0],
          [3, 0],
        ],
        isOpen: true,
        description: null,
        terrorists: 0,
      },
      eventTypes: [],
      sectors: [],
      weaponTypes: [],
      showAddInjury: false,
      show: true,
      injuredId: 0,
      showAddDesc: false,
      showAddTerrorists: false,
    };
  },
  async created() {
    this.eventTypes = (await api.eventTypes().getEventTypes()).data;
    this.sectors = (await api.sectors().getRegionalBrigade()).data;
    this.weaponTypes = (await api.weapons().getWeaponsTypes()).data;

    this.eventTypes = this.eventTypes.map((event) => event.name);
    this.sectors = this.sectors.map((sector) => sector.name);
    this.weaponTypes = this.weaponTypes.map((weapon) => weapon.weaponName);
  },
  methods: {
    ...mapActions(["clearSelectedLocation"]),
    async onSubmit(event) {
      event.preventDefault();

      this.form.eventType = (
        await api.eventTypes().getEventTypeByName(this.form.eventType)
      ).data;
      this.form.eventType = this.form.eventType.eventId;
      this.form.sector = (
        await api.sectors().getSectorByName(this.form.sector)
      ).data;
      this.form.sector = this.form.sector.id;
      this.form.weapon = (
        await api.weapons().getWeaponByName(this.form.weapon)
      ).data;
      this.form.weapon = this.form.weapon.weaponId;
      this.form.coordinates = this.selectedLocation;

      alert(JSON.stringify(this.form));
      await api.events().addEvent(this.form);
      //await api.events().sendEventToPolygon(this.form.coordinates[0], this.form.coordinates[1]);

      this.onReset(event);
    },
    onReset(event) {
      event.preventDefault();
      this.clearSelectedLocation();
      this.form.alertName = "";
      this.form.eventType = null;
      this.form.weaponType = null;
      this.form.sector = null;
      this.form.time = null;
      this.form.Injuries = [
        [1, 0],
        [2, 0],
        [3, 0],
      ];
    },
    showAddInjuries() {
      this.showAddInjury = !this.showAddInjury;
    },

    showAddDescription() {
      this.showAddDesc = true;
    },

    showAddTerror() {
      this.showAddTerrorists = !this.showAddTerrorists;
    },
  },
  computed: {
    ...mapState(["selectedLocation"]),
    noInjuries() {
      return (
        this.form.Injuries[0][1] === 0 &&
        this.form.Injuries[1][1] === 0 &&
        this.form.Injuries[2][1] === 0
      );
    },
  },
};
</script>

<style scoped>
.b-row {
  width: 100%;
  margin-top: 5px;
}
::-webkit-scrollbar {
  display: none;
}
.list-group-add-event {
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 10px;
  max-height: 700px;
  max-width: 600px;
  height: 700px;
  background-color: transparent;
}
.but {
  margin: 5px;
  color: black;
  background-color: #a1cfed;
  border-color: #84bee6;
}
.submit {
  margin: 5px;
  color: black;
  background-color: #a1edc1;
  border-color: #76dfa1;
}
.reset {
  margin: 5px;
  color: black;
  background-color: #f89595;
  border-color: #f37d7d;
}
.no-location-error-card {
  border-radius: 50px;
  border-color: #f72525;
  margin-left: 0%;
  margin-right: 50px;
  width: 300px;
  margin-top: 60px;
}
</style>
