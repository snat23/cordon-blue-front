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
          injured: [],
        },
        eventTypes: ['a', 'b', 'c', 'd'],
        
        weaponTypes: ['e', 'f', 'g', 'h'],
        show: true
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
      }
    }
  }</script>
