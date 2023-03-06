<template>
  <div id="eventComponent" class="container">
    <div class="row">
      <p>{{ event.coordinates }} :מיקום</p>
      <p>{{ event.date }} :תאריך</p>
    </div>
    <div class="row">
      <p>{{ event.eventType }} :סוג אירוע</p>
      <p>{{ event.time }} :שעה</p>
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
  </div>
</template>
<script>
import collapse from 'bootstrap/js/src/collapse';

export default {
  name: 'event',
  props: {
    event: Object,
  },
  created() {
    console.log(this.event);
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
