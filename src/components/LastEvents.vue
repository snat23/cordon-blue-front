<template>
  <div id="LastEvents" class="container" data-spy="scroll">
    <ul class="list-group">
      <li
        v-for="currEvent in lastEvents"
        :key="currEvent.id"
        class="list-group-item"
      >
        <event :v-if="isEventVisible" @closeEvent="closeEvent" :event="currEvent" />
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
  data() {
    return {
      isEventVisible: true,
    };
  },
  methods: {
    closeEvent() {
      this.isEventVisible = false;
    },
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
</style>
