<template>
  <bdi>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <img src="../assets/user-icon.png" class="user-icon" 
      />
      
      <a href="https://www.youtube.com/watch?v=COfkdOu9KiI">
        <button>
          <img src="../assets/panther-logo.png" alt="buttonpng" border="0" height="50px"  /> </button>
      </a>
      
      <a href="https://www.youtube.com/watch?v=TYklMREHD-s">
          <button>
            <img src="../assets/rhino-logo.png" alt="buttonpng" border="0" height="50px"  />
           </button>
      </a>

      <button> 
        <img src="../assets/blue-chicken.png" alt="buttonpng" border="0" height="50px"  />
      </button>
      
      <h1 class="title">Cordon Bleu</h1>
    </b-navbar>
  </bdi>
</template>

<script>

export default {
  name: "Navbar",
};
</script>

<style scoped>

button {
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}

button:hover{
  background-color: lightblue;
  opacity: 20%;
  border-radius: 30%;
}

.user-icon {
  height: 4.4vw;
  position: absolute;
  right: 0;
  display: block;
}
.title{
  position: absolute;
  left: 50%;
  margin-left: -50px !important;
  display: block;
}
</style>
