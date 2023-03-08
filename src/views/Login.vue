<template>
    <body>
        <div class="container home d-flex justify-content-center align-items-center">
            <div id="blue-circle"></div>
            <form id="form" class="row">
                <h1 class="text-center">כניסה</h1>
                <div class="input-group  my-3">
                    <i class="bi bi-person-fill input-group-text"></i>
                    <input v-model="username" type="text" id="accountNum" class="form-control" placeholder="מספר חשבון">
                </div>
                <div class="input-group  mb-3">
                    <i class="bi bi-lock-fill input-group-text"></i>
                    <input v-model="password" type="password" id="password" class="form-control" placeholder="סיסמה">
                </div>
                <button @click="checkUserValidation()" class="btn btn-primary" id="login" type="button">כניסה</button>
            </form>
        </div>
    </body>
</template>

<script>
import api from '../../api/api';
export default {
  name: "Login",
  data() {
    return {
      allUsers: [],
      username: "",
      password: ""
    }
  },
  async created() {   
    this.allUsers =  (await api.users().getUsers()).data; 
    console.log(this.allUsers) 
  },
  methods: {
    checkUserValidation() {
        
        if(this.allUsers.find((user) => user.username === this.username &&
        user.password === this.password)){
            alert("good")
            this.$router.push('/home') 
        } else{
            alert("couldnt connect")
        }
    }
  }
};
</script>
