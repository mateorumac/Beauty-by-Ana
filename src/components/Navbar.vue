<template>
  <nav>
    <div class="logo">
      <a href="/">
        <img src="logo.png" alt="Logo">
      </a>
    </div>
    <ul class="nav-links">
      <li><router-link to="/onama">About</router-link></li>
      <li><router-link to="/cjenik">Prices</router-link></li>
      <li><router-link to="/termini">Booking</router-link></li>
      <li><router-link to="/korisnici">Reviews</router-link></li>
      <li v-if="!isAuthenticated()">
        <router-link to="/signup" class="register-button">Register now</router-link>
      </li>
      <li v-if="isAuthenticated()">
        <button @click="logout" class="register-button">EXIT</button>
      </li>
    </ul>
    <div class="burger" @click="toggleNav">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    <ul v-if="navOpen" class="dropdown">
      <li @click="toggleNav"><router-link to="/onama">About</router-link></li>
      <li @click="toggleNav"><router-link to="/cjenik">Prices</router-link></li>
      <li @click="toggleNav"><router-link to="/termini">Booking</router-link></li>
      <li @click="toggleNav"><router-link to="/korisnici">Reviews</router-link></li>
      <li v-if="!isAuthenticated()" @click="toggleNav">
        <router-link to="/signup" class="register-button">Register now</router-link>
      </li>
      <li v-if="isAuthenticated()">
        <button class="register-button" @click="logout">EXIT</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { isAuthenticated } from '../router/helpers'; // Adjust the path to the correct location

export default {
  data() {
    return {
      navOpen: false       
    };
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
    isAuthenticated,

    async logout() {
  try {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    console.log('Token removed from localStorage.');

    // Clear cookies (if applicable)
    document.cookie.split(';').forEach(cookie => {
      document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    });
    console.log('Cookies cleared.');

    // Send logout request to backend
    const response = await fetch('https://wa-backend4.onrender.com/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Logout response:', data);

    // Optionally redirect to login or home page
     this.$router.push('/home');

  } catch (error) {
    console.error('Logout error:', error);
  }
}

  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #FFB6C1;
  box-sizing: border-box;
  position: relative;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}

.logout {
  font-family: 'Open Sans', sans-serif;
  background-color: #FFF5EE;
  color: black;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 19px;
  padding-left: 20px;
  padding-right: 20px;
}

.logo img {
  height: 50px;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 10px;
}

.nav-links a {
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  transition: color 0.3s ease;
}

.nav-links a:hover:not(.register-button) {
  color: white;
}

.register-button {
  background-color: #FFF5EE;
  padding: 10px 20px;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none; /* Ensure that the button text has no underline */
  border: none; /* Remove any default button borders */
}

.register-button:hover {
  transform: translateY(-2px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
}

.burger {
  display: none;
  cursor: pointer;
}

.line1, .line2, .line3 {
  width: 35px;
  height: 3px;
  background-color: black;
  margin: 6px 0;
}

@media (max-width: 600px) {
  .logo {
    margin-left: 10px; /* Adjust margin to move the logo slightly to the left */
  }

  .nav-links {
    display: none;
  }

  .burger {
    display: block;
  }

  .dropdown {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 76%; /* Move the dropdown more to the right */
    background-color: #FFB6C1;
    width: 38%; /* Reduced width */
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transform: translateX(-50%);
    transition: all 0.3s ease-in-out;
    z-index: 10; /* Ensure the dropdown menu appears above other content */
    align-items: center; /* Align text to the right side */
  }

  .dropdown li {
    margin: 10px 0;
  }

  .dropdown a {
    text-decoration: none;
    color: #000000;
    font-weight: bold;
    padding: 10px;
    transition: color 0.3s ease;
  }

  .dropdown a:hover {
    color: #FFD5E5; /* Change text color on hover instead of background */
  }
}

@media (min-width: 601px) {
  .dropdown {
    display: flex;
    flex-direction: row;
    position: static;
    background-color: transparent;
    width: auto;
    padding: 0;
    box-shadow: none;
    transform: none;
  }

  .dropdown li {
    margin: 0 10px;
  }

  .dropdown a {
    background-color: transparent;
    padding: 0;
    border-radius: 0;
    transition: color 0.3s ease;
  }

  .dropdown a:hover {
    background-color: transparent;
    color: white;
  }
}

</style>