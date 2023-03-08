<template>
    <div>
    <h5 id="title" class="display-3 m-0 p-4">ברוכים הבאים למערכת תרנגול כחול  </h5>
    <body id="login">
        <div dir="rtl" class="container home d-flex justify-content-center align-items-center">
            <form id="form" class="row">
                <h1 class="text-center mt-4">התחברות</h1>
                <div class="input-group my-3" style="flex-direction: row-reverse;">
                    <i class=" input-group-text fa fa-user"></i>
                    <input v-model="username" type="text" id="accountNum" class="form-control rounded" placeholder="מספר חשבון">
                </div>
                <div class="input-group mb-3" style="flex-direction: row-reverse;">
                  <i class="input-group-text fa fa-key"></i>
                    <input v-model="password" type="password" id="password" class="form-control rounded" placeholder="סיסמה">
                </div>
                <button @click="checkUserValidation()" class="btn" id="login" type="button">כניסה</button>
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
  text-align: center;
  background-image: url('../../src/assets/background-cordon.png');
  background-repeat: no-repeat;
  background-size: 600px;
  background-position: -200px 450px;
  background-attachment: fixed;
  max-height: 100vh;
}
</style>
