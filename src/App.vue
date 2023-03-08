
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: "App",
  
  
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Heebo");

#app {
  font-family: "Heebo";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e0dede;
  background-image: url('../src/assets/rooster_logo.png');
  background-repeat: no-repeat;
  background-size: 600px;
  background-position: -200px 450px;
  background-attachment: fixed;
}
</style>