<template>
    <div id="LastEvents" class="container" data-spy="scroll">
        <ul class="list-group">
            <li v-for="currEvent in lastEvents" :key="currEvent.id" class="list-group-item">
                <event :event="currEvent"/>
            </li>
        </ul>   
    </div>
</template>

<script>
import event from './event.vue';
    export default {
        components: {
            event, 
        },
        name: "LastEvents",
        props :{
            lastEvents: Array,
        }
    };
</script>

<style scoped>
    .list-group {
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
        margin-bottom: 10px;
        max-height: 400px;
        max-width: 600px;
    }
    
</style>
  