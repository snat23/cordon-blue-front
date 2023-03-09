
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
  background-image: url('../src/assets/background-cordon.png');
  background-repeat: no-repeat;
  background-size: 500px;
  background-position: -10px 350px;
  background-attachment: fixed;
}
</style>