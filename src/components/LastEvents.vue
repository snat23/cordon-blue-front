<template>
  <div id="LastEvents" class="container" data-spy="scroll">
    <ul class="list-group">
      <li
        v-for="currEvent in lastEvents"
        :key="currEvent.id"
        class="list-group-item"
      >
        <event :event="currEvent" />
      </li>
    </ul>
  </div>
</template>

<script>
import event from "./event.vue";
export default {
  components: {
    event,
  },
  name: "LastEvents",
  props: {
    lastEvents: Array,
  },
};
</script>

<style scoped>
.list-group {
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 10px;
  max-height: 700px;
  max-width: 600px;
}
<<<<<<< HEAD
=======
::-webkit-scrollbar {
  display: none;
}
li {
  margin-bottom: 10px;
  background-color: transparent;
  border-color: transparent;
}
>>>>>>> ad6d8f0b09df78f635501d5af91768ea8dd4dd75
</style>
