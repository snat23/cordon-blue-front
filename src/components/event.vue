<template>
    <div id="eventComponent" class="container">
        <div class="row">
            <p>{{event.location}} :מיקום</p>    <p>{{event.date}} :תאריך</p>
        </div>
        <div class="row">
            <p>{{event.type}} :סוג אירוע</p>    <p>{{event.time}} :שעה</p>
        </div>
        
        <div class="text-left">
          <i id="extraInfoButton" href="#demo" class="fa fa-chevron-down" data-toggle="collapse">
        </i>   
        </div>
         
        <div id="demo" class="collapse">
           מידע נוסף
        </div>       
    </div>
  </template>
  <script>
  import collapse from "bootstrap/js/src/collapse";

  export default {
    name: "event",
    props :{
        event : Object,
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
    .row{
        justify-content: space-around;
        margin-top: 2vh;
    }
    #extraInfoButton {
        margin: 2vh;
    }
  </style>
  