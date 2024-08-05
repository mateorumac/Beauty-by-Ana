<template>
  <div>
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img src="leda.jpg" alt="Carousel Image">
        </div>
        <div class="slide">
          <img src="lice.jpg" alt="Carousel Image">
        </div>
        <div class="slide">
          <img src="noga.jpg" alt="Carousel Image">
        </div>
        <div class="slide">
          <img src="nokti.jpg" alt="Carousel Image">
        </div>
        <div class="slide">
          <img src="guza.jpg" alt="Carousel Image">
        </div>
        <!-- Repeat for smooth scrolling -->
        <div class="slide">
          <img src="leda.jpg" alt="Carousel Image">
        </div>
        <div class="slide">
          <img src="lice.jpg" alt="Carousel Image">
        </div>
        <div class="slide">
          <img src="noga.jpg" alt="Carousel Image">
        </div>
        <div class="slide">
          <img src="nokti.jpg" alt="Carousel Image">
        </div>
        <div class="slide">
          <img src="guza.jpg" alt="Carousel Image">
        </div>
      </div>
    </div>

    <div class="container1">
      <div class="content">
        <div class="column left">
          <img src="ana.jpg" alt="Ana" class="main-photo">
        </div>
        <div class="column right">
          <h2>FACIAL AND BODY TREATMENTS PULA</h2>
          <p class="homepage">
            <i>Professional service and expertise of our staff will provide your skin, as the largest organ of our body, what it needs to become and remain healthy and beautiful, and your body to retain vitality and a well-groomed appearance.<br><br>
            Appearance is important to all of us and first impressions are quickly remembered and last long. If you are stressed, tired, or simply want to enjoy and relax, come to our salon. With professional work and top cosmetics, we take care of your beauty and health.</i>
          </p>
          <button class="join-button" @click="redirectToPage"><b>Book now</b></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

* {
  box-sizing: border-box;
}

.container1 {
  padding-top: 5%;
  max-width: 100%;
  margin: 0 auto;
  padding-bottom: 3%; /* Add more space at the bottom */
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  align-items: center;
}

.column {
  padding: 10px;
}

.left {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrally align content */
  justify-content: center;
  padding-left: 40px; /* More space between image and text */
}

h2 {
  font-family: 'Open Sans', sans-serif;
  margin-top: 7%;
  margin-bottom: 20px; /* Reduced margin */
  font-size: 38px;
  text-align: center; /* Center align text */
  animation: fadeIn 2s ease-in-out;
}

.homepage {
  font-size: 25px;
  margin: 5%;
  margin-bottom: 20px; /* Reduced margin */
  font-family: 'Open Sans', sans-serif;
  text-align: center; /* Center align text */
  animation: fadeIn 2s ease-in-out;
}

.main-photo {
  max-width: 80%;
  height: auto;
  border-radius: 15px; /* Rounded edges */
  animation: zoomIn 2s ease-in-out;
}

.slider {
  padding-top: 5%;
  padding-bottom: 7%; /* Add more space at the bottom */
  height: 320px;
  margin: auto;
  position: relative;
  width: 75%;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 15px; /* Ensure the entire slider has rounded edges */
  animation: slideIn 2s ease-in-out;
}

.slide-track {
  display: flex;
  width: calc(300px * 10); /* Adjusted width */
  animation: scroll 40s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-300px * 5)); /* Adjusted width */
  }
}

.slide {
  height: 300px; /* Adjusted height */
  width: 300px; /* Adjusted width */
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 100px;
  border-radius: 15px; /* Rounded edges */
  overflow: hidden; /* Ensure content within the slide has rounded edges */
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s;
  border-radius: 15px; /* Ensures the image inside also has rounded edges */
}

.slide img:hover {
  transform: scale(1.1);
}

.slider::before,
.slider::after {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.slider::before {
  left: 0;
  top: 0;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.join-button {
  padding: 15px 30px; /* Improved button size */
  background-color: #FFB6C1; /* Matching the pink color palette */
  color: black; /* Black text */
  border-radius: 20px; /* More rounded edges */
  border: none;
  font-size: 20px; /* Larger font size */
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  font-family: 'Open Sans', sans-serif;
  margin-top: 20px; /* Space between text and button */
}

.join-button:hover {
  transform: translateY(-3px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.3);
  background-color: #FF91A4; /* Slightly darker hover color */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 600px) {
  .left, .right {
    width: 100%;
    text-align: center;
  }

  .content {
    flex-direction: column; /* Stack the columns vertically */
  }

  .main-photo {
    max-width: 100%; /* Ensure the image takes full width */
    height: auto;
    margin-bottom: 20px; /* Add some space below the image */
  }

  .right {
    padding-left: 0; /* Remove padding for mobile */
  }

  h2 {
    font-size: 28px; /* Adjust font size for mobile */
    margin-top: 10px; /* Adjust margin for mobile */
    margin-bottom: 15px; /* Adjust margin for mobile */
  }

  .homepage {
    font-size: 18px; /* Adjust font size for mobile */
    margin: 0 10px 10px; /* Adjust margins for mobile */
  }

  .slider {
    margin-top: -20px; /* Less margin from navbar to carousel */
    margin-bottom: -50px; /* Less margin from carousel to other content */
  }

  .slide {
    height: 200px; /* Adjusted height for mobile */
    width: 200px; /* Adjusted width for mobile */
  }

  .join-button {
    margin-bottom: 10px;
    padding: 15px 30px; /* Slightly larger button padding for mobile */
    font-size: 20px; /* Slightly larger button font size for mobile */
  }
}
</style>

<script>
export default {
  methods: {
    redirectToPage() {
      window.location.href = '/termini';
    }
  }
};
</script>
```