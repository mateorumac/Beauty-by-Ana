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
  padding-bottom: 3%; 
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
  align-items: center; 
  justify-content: center;
  padding-left: 40px; 
}

h2 {
  font-family: 'Dancing Script', cursive;
  margin-top: 7%;
  margin-bottom: 20px; 
  font-size: 38px;
  text-align: center; 
  animation: fadeIn 2s ease-in-out;
}

.homepage {
  font-size: 1.6rem;
  margin: 5%;
  margin-bottom: 20px; 
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  animation: fadeIn 2s ease-in-out;
}

.main-photo {
  max-width: 80%;
  height: auto;
  border-radius: 15px; 
  animation: zoomIn 2s ease-in-out;
}

.slider {
  padding-top: 5%;
  padding-bottom: 7%; 
  height: 320px;
  margin: auto;
  position: relative;
  width: 75%;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 15px;
  animation: slideIn 2s ease-in-out;
}

.slide-track {
  display: flex;
  width: calc(300px * 10); 
  animation: scroll 40s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-300px * 5)); 
  }
}

.slide {
  height: 300px; 
  width: 300px; 
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 100px;
  border-radius: 15px; 
  overflow: hidden; 
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s;
  border-radius: 15px; 
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
  padding: 15px 30px; 
  background-color: #FFB6C1; 
  color: black; 
  border-radius: 20px; 
  border: none;
  font-size: 20px; 
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  font-family: 'Open Sans', sans-serif;
  margin-top: 20px; 
}

.join-button:hover {
  transform: translateY(-3px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.3);
  background-color: #FF91A4; 
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

@media (min-width: 1024px) and (max-width: 1440px) {
  .container1 {
    padding-top: 5%;
    padding-bottom: 3%;
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  .content {
    display: flex;
    align-items: center;
  }

  .left {
    flex: 1;
    display: flex;
    justify-content: center;
    padding-right: 20px;
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
  }

  h2 {
    font-size: 32px;
    text-align: center;
    margin-bottom: 20px;
  }

  .homepage {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
  }

  .main-photo {
    max-width: 100%;
    height: auto;
    border-radius: 15px;
  }

  .join-button {
    padding: 12px 24px;
    font-size: 18px;
    margin-top: 20px;
    background-color: #FFB6C1;
    border-radius: 15px;
    transition: transform 0.3s ease;
    width: auto;
  }

  .join-button:hover {
    background-color: #FF91A4;
    transform: translateY(-3px);
  }
}

@media (min-width: 769px) and (max-width: 1023px) {
  .container1 {
    padding-top: 5%;
    padding-bottom: 3%;
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .left {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .right {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    text-align: center;
  }

  h2 {
    font-size: 28px;
    text-align: center;
    margin-bottom: 15px;
    margin-top: -10px;
  }

  .homepage {
    font-size: 18px;
    text-align: center;
    margin: 10px 20px;
  }

  .main-photo {
    max-width: 80%;
    height: auto;
    border-radius: 15px;
  }

  .join-button {
    padding: 12px 24px;
    font-size: 18px;
    margin-top: 20px;
    background-color: #FFB6C1;
    border-radius: 15px;
    transition: transform 0.3s ease;
  }

  .join-button:hover {
    background-color: #FF91A4;
    transform: translateY(-3px);
  }
}

@media (max-width: 768px) {
  .left, .right {
    width: 100%;
    text-align: center;
  }

  .content {
    flex-direction: column; 
  }

  .main-photo {
    max-width: 100%; 
    height: auto;
    margin-bottom: 20px; 
  }

  .right {
    padding-left: 0; 
  }

  h2 {
    font-size: 28px; 
    margin-top: 10px; 
    margin-bottom: 15px; 
  }

  .homepage {
    font-size: 18px; 
    margin: 0 10px 10px; 
  }

  .slider {
    margin-top: -20px; 
    margin-bottom: -50px; 
  }

  .slide {
    height: 200px; 
    width: 200px; 
  }

  .join-button {
    margin-bottom: 10px;
    padding: 15px 30px; 
    font-size: 20px; 
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