<template>
    <div>
    <h5 class="display-3 mb-2">ברוכים הבאים למערכת תרנגול כחול  </h5>
    <body id="login">
        <div dir="rtl" class="container home d-flex justify-content-center align-items-center">
            <form id="form" class="row">
                <h1 class="text-center my-30">כניסה</h1>
                <div class="input-group  my-3">
                    <i class=" input-group-text"></i>
                    <input v-model="username" type="text" id="accountNum" class="form-control" placeholder="מספר חשבון">
                </div>
                <div class="input-group  mb-3">
                    <i class="input-group-text"></i>
                    <input v-model="password" type="password" id="password" class="form-control" placeholder="סיסמה">
                </div>
                <button @click="checkUserValidation()" class="btn btn-primary" id="login" type="button">כניסה</button>
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
      currUser: [],
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
      this.currUser =  (await api.users().getUser(this.username, this.hashPassword)).data;
      if(this.currUser){
        this.$router.push('/home') 
      } else {
        alert("couldnt connect")
      }
    }
  }
};
</script>


<style scoped>

#login {
  text-align: center;
  background-image: url('../../src/assets/background-cordon.png');
  background-repeat: no-repeat;
  background-size: 600px;
  background-position: -200px 450px;
  background-attachment: fixed;
}
</style>
