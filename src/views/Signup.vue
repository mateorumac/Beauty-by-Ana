<template>
  <div class="container5">
    <h2 class="title2">Registration</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label class="reg" for="name">First Name</label>
        <input class="reg2" type="text" v-model="name" required />
      </div>
      <div class="form-group">
        <label class="reg" for="lname">Last Name</label>
        <input class="reg2" type="text" v-model="lname" required />
      </div>
      <div class="form-group">
        <label class="reg" for="email">E-mail</label>
        <input class="reg2" type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label class="reg" for="password">Password</label>
        <input class="reg2" type="password" v-model="password" required />
      </div>
      <div class="button-container">
        <button type="button" @click="dodajUsera()">Register</button>
      </div>
      <br><br>
      <p class="registration">Already have an account? &nbsp;<router-link to="/login">Login</router-link></p>
    </form>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

.container5 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  padding: 30px;
  margin: 40px auto;
}

.registration {
  font-size: 18px;
  margin-bottom: -10%;
  margin-top: -2%;
}

.title2 {
  margin-bottom: 30px;
  font-size: 38px;
  font-weight: bold;
  color: #000000;
  font-family: 'Open Sans', sans-serif;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-bottom: 20px;
  width: 100%;
}

.reg {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center; 
}

.reg2 {
  font-family: 'Open Sans', sans-serif;
  padding: 15px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%; 
  max-width: 400px; 
}

.button-container {
  display: flex;
  justify-content: center; 
  width: 100%;
}

button[type="button"] {
  font-family: 'Open Sans', sans-serif;
  background-color: #FFB6C1;
  color: black;
  padding: 15px 23px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 15px;
}

button[type="button"]:hover {
  background-color: #ff99a8;
}

@media (max-width: 600px) {
  .container5 {
    max-width: 90%;
    padding: 30px;
  }
  .title2 {
    font-size: 26px;
  }
  .reg {
    font-size: 16px;
  }
  .reg2 {
    font-size: 14px;
  }
  button[type="button"] {
    font-size: 18px;
    padding: 10px 15px;
  }
}
</style>


<script>
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      lname: "",
      email: "",
      password: "",    
    };
  },
  methods: {
    async dodajUsera() {
      let json = { "name": this.name, "lname": this.lname, "email": this.email, "password": this.password }

      await fetch(' https://wa-backend4.onrender.com/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      }).then(res => res.json()).then(data => {
        this.$router.push('/login')
        console.log(data)
      }).catch((err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }
};
</script>
