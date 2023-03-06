<template>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
  
        <b-form-group id="input-group-1" label="כותרת אירוע" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.alertName"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="שעה" label-for="input-5">
          <b-form-timepicker
            id="input-5"
            v-model="form.time"
            required
          ></b-form-timepicker>
        </b-form-group>
  
        <b-form-group id="input-group-2" label="סוג אירוע" label-for="input-2">
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
              :options="eventTypes"
              required
            ></b-form-select>
          </b-form-group>

          <b-button v-show="!this.showAddInjury" variant="primary" @click="showAddInjuries">הוספת פצועים</b-button>

          <section v-show="this.showAddInjury">
            <b-form-group id="input-group-7" label="פצועים קל" label-for="input-7">
              <b-form-input
                id="input-7"
                v-model="form.Injuries[0][1]"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-8" label="פצועים בינוני" label-for="input-8">
              <b-form-input
                id="input-8"
                v-model="form.Injuries[1][1]"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-9" label="פצועים קשה" label-for="input-9">
              <b-form-input
                id="input-9"
                v-model="form.Injuries[2][1]"
                required
              ></b-form-input>
            </b-form-group>
            <b-button variant="primary" @click="showAddInjuries">הוספת פצוע</b-button>
          </section>

          <section v-if="!noInjuries && !this.showAddInjury">

            <b-container class="injured-info-container">
              <b-row class="justify-content-md-center">
                <b-button variant="outline-dark" disabled > פצועים קל 
                  {{this.form.Injuries[0][1]}} 
                </b-button>
              </b-row>
              <b-row class="justify-content-md-center">
                <b-button variant="warning" disabled> פצועים בינוני 
                  {{this.form.Injuries[1][1]}}
                 </b-button>
              </b-row>
              <b-row class="justify-content-md-center">
                <b-button variant="danger" disabled> פצועים קשה 
                  {{this.form.Injuries[2][1]}}
                 </b-button>
              </b-row>
            </b-container>
          </section>
    
          <b-form-group id="input-group-4" label="אמל''ח" label-for="input-4">
            <b-form-select
              id="input-4"
              v-model="form.weapon"
              :options="weaponTypes"
              required
            ></b-form-select>
          </b-form-group>
  
        <b-button type="submit" variant="primary">פרסם</b-button>
        <b-button type="reset" variant="danger">אפס</b-button>
      </b-form>
    </div>
  </template>

<script>
  export default {
    data() {
      return {
        form: {
          Injuries :  [
            [1,0],
            [2,0],
            [3,0],
          ]
        },
        eventTypes: ['a', 'b', 'c', 'd'],
        weaponTypes: ['e', 'f', 'g', 'h'],
        showAddInjury: false,
        show: true,
        injuredId: 0
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        this.form.title = ''
        this.form.eventType = null
        this.form.location = ''
        this.form.weaponType = null
      },
      showAddInjuries() {
        this.showAddInjury =!this.showAddInjury
      },
    },
    computed: {
      noInjuries() {
        console.log(this.form.Injuries[0][1]);
        return (this.form.Injuries[0][1] === 0) && (this.form.Injuries[1][1] === 0) && (this.form.Injuries[2][1] === 0);   
      }
    },
  }
  </script>
