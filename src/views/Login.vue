Here is the updated code with text translated to English, centrally aligned labels above the input fields, and an additional text below the button to navigate users to the registration page:

```html
<template>
  <div class="container52">
    <h2 class="title1">Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group1">
        <label class="prijava" for="email">E-mail</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group1">
        <label class="prijava" for="password">Password</label>
        <input type="password" v-model="password" required/>
      </div>
      <div class="button-container">
        <button type="button" @click="login()">Login</button>
      </div>
      <br><br>
      <p class="registration">Don't have an account? &nbsp;<router-link to="/signup">Register</router-link></p>
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
  padding: 40px;
  margin: 40px auto;
}

.registration {
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
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
  align-items: center; 
  margin-bottom: 20px;
  width: 100%;
}

.prijava {
  font-family: 'Open Sans', sans-serif;
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center; 
}

input {
  font-family: 'Open Sans', sans-serif;
  padding: 15px;
  font-size: 16px;
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
  margin-top: 30px;
}

button[type="button"]:hover {
  background-color: #ff99a8;
}

@media (max-width: 600px) {
  .container52 {
    max-width: 90%;
    padding: 30px;
  }
  .title1 {
    font-size: 26px;
  }
  .prijava {
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
        const response = await fetch("https://wa-backend4.onrender.com/api/auth/login", {
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
          localStorage.setItem('jwtToken', data.token);
          localStorage.setItem('userEmail', data.userEmail);
          
          this.$router.push("/").then(() => {
          window.location.reload();
        });

        console.log("Successful login");
        } else {
          console.log("Error");
        }
      } catch (error) {
        const errorMessage = error && error.message ? error.message : "Invalid email or password";
        this.$message.error(errorMessage);
      }
    },
  },
};
</script>