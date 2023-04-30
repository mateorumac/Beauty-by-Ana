<template>
  <div class="container52">
    <h2 class="title1">Prijava</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group1">
        <label class="prijava" for="email">E-mail</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group1">
        <label class="prijava" for="password">Lozinka</label>
        <input type="password" v-model="password" required/>
      </div>
      <button type="button" @click="login()">Prijavi se</button>
    </form>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

.container52 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  padding-bottom: 80px;
  margin: 40px auto;
  margin-bottom: 4.3%;
  margin-top: 4.3%;
}

.title1 {
  margin-bottom: 45px;
  font-size: 38px;
  font-weight: bold;
  color: #000000;
  font-family: 'Open Sans', sans-serif;
}

.form-group1 {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.prijava {
  font-family: 'Open Sans', sans-serif;
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 15px;
}

input {
  font-family: 'Open Sans', sans-serif;
  padding: 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
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
  margin-top: 30px;
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
  name: "Login",
  data() {
    return {
        email: "",
        password: "",    
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": 'application/json; charset=utf-8' },
          credentials: 'include',
          body: JSON.stringify({
            email: this.email,
            password: this.password,

          }),
        });
        const data = await response.json();
        if (response.ok) {
          document.cookie = `token=${data.token}; max-age=${7 * 24 * 60 * 60}; secure; path=/`;
          this.$router.push("/");
          console.log("Uspješna prijava");
        } else {
          console.log("error");
        }
      } catch (error) {

        this.$message.error(error.message || "Invalid email or password");
      }
    },
  },
};
</script>