<template>
    <div >
    <h5 id="title" class="display-3 m-0 p-4">ברוכים הבאים למערכת תרנגול כחול  </h5>
    <body id="login">
        <div dir="rtl" class="container home d-flex justify-content-center align-items-center">
            <form id="form" class="row">
                <h1 class="text-center mt-4">התחברות</h1>
                <div class="input-group my-3" style="flex-direction: row-reverse;">
                    <i class=" input-group-text fa fa-user"></i>
                    <input v-model="username" type="text" id="accountNum" class="form-control rounded" placeholder="שם משתמש ">
                </div>
                <div class="input-group mb-3" style="flex-direction: row-reverse;">
                  <i class="input-group-text fa fa-key"></i>
                    <input v-model="password" type="password" id="password" class="form-control rounded" placeholder="סיסמה">
                </div>
                <button @click="checkUserValidation()" class="btn" type="button">כניסה</button>
            </form>
        </div>
    </body>
  </div>
</template>

<script>
import api from '../../api/api';

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    }
  },
  computed: {
  hashPassword() {
    var md2 = require('js-md2');
    return md2(`${this.password}`);
 }
  },
  methods: {
    async checkUserValidation() {
      const currUser =  (await api.users().getUser(this.username, this.hashPassword)).data;
      if(currUser){
        this.$swal({
            text: "ברוכים הבאים למערכת הכי טובה בצהל ",
            icon: "success",
            confirmButtonText: "סגור",
        });
        this.$router.push('/home') 
      } else {
        this.$swal({
            title: "שגיאה",
            text: "נראה כי אינך מורשה להתחבר למערכת",
            icon: "error",
            confirmButtonText: "סגור",
        });
      }
    }
  }
};
</script>


<style scoped>

.btn {
  margin: 5px;
  color: black;
  background-color: #a1cfed;
  border-color: #84bee6;
}

#title{
  background-color: #1775b4;
  color: white
}

#login {
  font-family: "Heebo";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 900px;
  background-color: #e0dede;
  background-image: url('../../src/assets/background-cordon.png');
  background-repeat: no-repeat;
  background-size: 500px;
  background-position: -10px 350px;
  background-attachment: fixed;
}
</style>
