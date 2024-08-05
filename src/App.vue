<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #f5f5f5; /* Soft, light gray background color */
  color: #333; /* Darker text color for better contrast */
}
</style>
