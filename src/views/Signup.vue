<template>
  <div class="container5">
    <h2 class="title">Registracija</h2>
    <form @submit.prevent="handleLogin">
        <div class="form-group">
        <label for="name">Ime</label>
        <input type="text" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="lname">Prezime</label>
        <input type="text" v-model="lname" required />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Lozinka</label>
        <input type="password" v-model="password" required/>
      </div>
      <div class="form-group">
        <label for="password">Ponovljena lozinka</label>
        <input type="password" v-model="password2" required/>
      </div>
      <button type="button" @click="handleLogin">Registriraj se</button>
      <br><br>
      <p class="registracija">Imaš već račun? &nbsp;<router-link to="/login">Prijavi se</router-link></p>
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
  padding-bottom: 80px;
  margin: 40px auto;
  margin-bottom: 1%;
  margin-top: 1%;
}

.registracija {
    font-size: 18px;
    margin-bottom: -10%;
    margin-top: -2%;
}
.title {
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: bold;
  color: #000000;
  font-family: 'Open Sans', sans-serif;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

input {
  font-family: 'Open Sans', sans-serif;
  padding: 15px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button[type="button"] {
  font-family: 'Open Sans', sans-serif;
  background-color: #FFB6C1;
  color: white;
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
  .title {
    font-size: 26px;
  }
  label {
    font-size: 16px;
  }
  input {
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
        password2: "",   
    };
  },
  methods: {
  }
};
</script>