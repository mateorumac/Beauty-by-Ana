<template>
  <footer v-if="$route.path !== '/login' && $route.path !== '/signup'">
    <div class="footer-content">
      <div class="contact-info">
        <p><i class="fa fa-map-marker"></i> TRG KRALJA TOMISLAVA 8, PULA</p>
        <p><i class="fa fa-phone"></i> 097 663 43 57</p>
        <p><i class="fa fa-envelope"></i> AMMANEV@GMAIL.COM</p>
      </div>
      <div class="social-media">
        <p class="footer-text">Follow to stay updated</p>
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
  padding: 10px 0; 
}

.footer-content {
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  text-align: center;
  padding: 0 20px; 
}

.contact-info {
  flex: 1; 
  text-align: left; 
  font-size: 18px;
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
}

.contact-info p {
  margin: 0; 
  font-size: 16px; 
}

.contact-info i {
  margin-right: 10px;
}

.social-media {
  flex: 1; 
  display: flex;
  align-items: center; 
  justify-content: center; 
}

.footer-text {
  margin-right: 20px; 
  font-size: 16px; 
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

.footer-text1 {
  flex: 1;
  text-align: right; 
  font-size: 16px; 
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contact-info {
    text-align: center; 
    margin-bottom: 1px; 
  }

  .social-media {
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-bottom: 1px; 
  }

  .footer-text {
    display: none; 
  }

  .footer-text1 {
    font-size: 14px;
    margin: 0; 
  }
}
</style>

<script>
export default {
  name: "Footer",
};
</script>
