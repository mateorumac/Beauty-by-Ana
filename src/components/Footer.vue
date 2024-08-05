<template>
  <footer v-if="$route.path !== '/login' && $route.path !== '/signup'">
  <div class="footer-content">
    <p class="footer-text"><b>
    For news and information follow us on social media</b></p>
    <div class="social-media">
      <a href="https://www.facebook.com/anaminyme.manev" target="_blank" class="social-icon">
        <i class="fa fa-facebook-f"></i>
      </a>
      <a href="https://instagram.com/__beauty_by_ana_?igshid=YmMyMTA2M2Y" target="_blank" class="social-icon">
        <i class="fa fa-instagram"></i>
      </a>
    </div>
    <p class="footer-text1">Copyright © Beauty by Ana 2023</p>
  </div>
</footer>

</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

footer {
  width: 100%;
  background-color: #FFB6C1;
  color: #000000;
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
  padding: 5px 0; /* Increased height */
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.footer-text {
  margin: 5px 0;
  font-size: 20px;
}

.footer-text1 {
  margin: 5px;
  margin-left: 0;
  font-size: 15px;
}
.social-media {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0; /* Space between text and icons */
}

.social-icon {
  margin: 0 10px;
  font-size: 24px;
  color: #000000;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
  color: #fff;
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    
  }

  .social-media {
    flex-direction: row;
    justify-content: center; /* Center align the icons */
    margin-top: 10px;
    
  }

  .social-media .footer-text {
    margin-bottom: 10px;
     /* Space between the text and icons */
  }

  .social-icon {
    margin: 0 10px; /* Space between the icons */
  }
}

</style>

<script>
export default {
  name: "Footer",
};
</script>
