<template>
  <footer v-if="$route.path !== '/login' && $route.path !== '/signup'">
    <div class="footer-content">
      <!-- Contact Information -->
      <div class="contact-info">
        <p><i class="fa fa-map-marker"></i> TRG KRALJA TOMISLAVA 8, PULA</p>
        <p><i class="fa fa-phone"></i> 097 663 43 57</p>
        <p><i class="fa fa-envelope"></i> AMMANEV@GMAIL.COM</p>
      </div>
      <!-- Social Media -->
      <div class="social-media">
        <p class="footer-text">Follow to stay updated</p>
        <a href="https://www.facebook.com/anaminyme.manev" target="_blank" class="social-icon">
          <i class="fa fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com/__beauty_by_ana_?igshid=YmMyMTA2M2Y" target="_blank" class="social-icon">
          <i class="fa fa-instagram"></i>
        </a>
      </div>
      <!-- Copyright -->
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
  padding: 10px 0; /* Increased height for better spacing */
}

.footer-content {
  display: flex;
  justify-content: space-between; /* Distribute items across the footer */
  align-items: center; /* Center items vertically */
  text-align: center;
  padding: 0 20px; /* Horizontal padding */
}

.contact-info {
  flex: 1; /* Allow this section to take as much space as needed */
  text-align: left; /* Align text to the left */
  font-size: 18px;
  display: flex;
  flex-direction: column; /* Stack contact info vertically */
  align-items: flex-start; /* Align items to the start of the container */
}

.contact-info p {
  margin: 0; /* Remove margin for consistent spacing */
  font-size: 16px; /* Ensure font size is consistent */
}

.contact-info i {
  margin-right: 10px;
}

.social-media {
  flex: 1; /* Center the social media section */
  display: flex;
  align-items: center; /* Align items vertically */
  justify-content: center; /* Center the social media icons */
}

.footer-text {
  margin-right: 20px; /* Space between text and icons */
  font-size: 16px; /* Ensure font size is consistent */
}

.social-icon {
  margin: 0 10px;
  font-size: 24px; /* Ensure icons are the same size */
  color: #000000;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
  color: #fff;
}

.footer-text1 {
  flex: 1; /* Allow this section to take as much space as needed */
  text-align: right; /* Align text to the right */
  font-size: 16px; /* Ensure font size is consistent */
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contact-info {
    text-align: center; /* Center-align text on small screens */
    margin-bottom: 1px; 
  }

  .social-media {
    display: flex;
    align-items: center;
    justify-content: center; /* Center the social media icons */
    margin-bottom: 1px; /* Space between social media and copyright */
  }

  .footer-text {
    display: none; /* Hide the "Follow to stay updated" text on mobile */
  }

  .footer-text1 {
    font-size: 14px;
    margin: 0; /* Smaller font size for copyright */
  }
}
</style>

<script>
export default {
  name: "Footer",
};
</script>
