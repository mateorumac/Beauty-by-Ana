<template>
  <div class="container2">
    <div class="row">
      <div class="column left animate-fade-in">
        <p class="about centered-text"><i>Beauty Salon Ana is located in Pula. <br>
          We offer our clients facial care services, <br> massages,
          waxing, hand and foot care, <br> body shaping, makeup, and brow lifting.<br>
          </i></p>
      </div>
      <div class="column right animate-slide-in">
        <img src="rad.jpg" alt="nails" class="rounded-img">
      </div>
    </div>
    <div class="row">
      <div class="column left animate-slide-in">
        <img src="kozmetika.jpg" alt="cosmetics" class="rounded-img">
      </div>
      <div class="column right animate-fade-in">
        <p class="about centered-text"><i>In addition to these services, we also have a department for selling skincare and decorative cosmetics. <br>
          All our clients receive the best professional service, <br> 
          thanks to our skilled and talented team.</i></p>
      </div>
    </div>
    <div class="row">
      <div class="column left animate-fade-in">
        <p class="about centered-text2"><i>Our salon is equipped to high standards, <br> 
          providing clients with a pleasant <br> and warm atmosphere. <br></i></p>
      </div>
      <div class="column right animate-slide-in">
        <img src="salon1.png" alt="salon" class="rounded-img large-img">
      </div>
    </div>
    <div class="row">
      <div class="column left animate-slide-in">
        <img src="salon2.png" alt="salon" class="rounded-img large-img">
      </div>
      <div class="column right animate-fade-in">
        <p class="about centered-text2"><i>We owe our success to the constant <br> improvement 
          of our services and most importantly, <br> the exceptional satisfaction of our clients.</i></p>
      </div>
    </div>
    <div class="row">
      <div class="rectangle animate-pop-in">
        <p class="working-hours-title"><b>WORKING HOURS:</b></p>
        <p class="about"><br>MON & THU - 13:00-20:00 <br><br> TUE, WED, FRI - 09:00-16:00 <br><br> SAT - BY APPOINTMENT</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const observerOptions = {
      threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('.animate-fade-in, .animate-slide-in, .animate-pop-in').forEach(element => {
      observer.observe(element);
    });
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

.container2 {
  max-width: 1400px; /* Increased max-width for more content width */
  margin: 0 auto;
  padding: 20px;
}

.rectangle {
  margin-top: 2%;
  margin-bottom: 4%;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px; /* Increased max-width for modern look */
  height: auto;
  background-color: #FFB6C1;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px #DCDCDC;
  padding: 20px;
  text-align: center;
  opacity: 0;
  transform: scale(0.5);
  transition: transform 1s, opacity 1s; /* Animation for pop-in effect */
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

.column {
  float: left;
  width: 45%; /* Increased width for columns */
  padding: 2.5%;
  box-sizing: border-box;
}

.left, .right {
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s, transform 1s; /* Animation for fade-in and slide-in effects */
}

.visible.animate-fade-in, .visible.animate-slide-in, .visible.animate-pop-in {
  opacity: 1;
  transform: translateY(0);
}

.about {
  padding: 5%;
  margin-top: 20px; /* Margin from the top to start further down */
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  text-align: center;
}

.centered-text {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 90px;
}

.centered-text2 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 130px;
}

.rounded-img {
  max-width: 100%;
  height: 300px; /* Set a consistent height for all images */
  border-radius: 15px; /* Rounded edges for images */
  margin: 20px 0; /* Ensure spacing around images */
  transition: transform 1s;
}

.large-img {
  height: 400px; /* Larger size for the last two images */
}

.working-hours-title {
  font-size: 24px;
  margin-bottom: -30px; /* Reduced space between the title and text */
}

/* Animation classes */
.animate-fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.animate-slide-in.visible {
  opacity: 1;
  transform: translateX(0);
}

.animate-pop-in.visible {
  opacity: 1;
  transform: scale(1);
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes popIn {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 600px) {
  .column {
    float: none;
    width: 100%;
    text-align: center;
  }

  .rounded-img {
    max-width: 100%;
    height: auto;
    margin-left: 0;
  }

  .large-img {
    height: auto;
    max-width: 100%;
  }

  .rectangle {
    margin-left: auto; /* Center align */
    margin-right: auto; /* Center align */
    margin-bottom: 7%;
    width: 90%;
  }

  .about {
    font-size: 18px;
    padding: 10px;
  }
}
</style>
