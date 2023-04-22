<template>
<div class="slider">
  <div class="slide-track">
    <div class="slide">
      <img src="leda.jpg">
    </div>

    <div class="slide">
      <img src="lice.jpg">
    </div>

    <div class="slide">
      <img src="noga.jpg">
    </div>

    <div class="slide">
      <img src="nokti.jpg">
    </div>

    <div class="slide">
      <img src="guza.jpg">
    </div>

    <div class="slide">
      <img src="leda.jpg">
    </div>

    <div class="slide">
      <img src="lice.jpg">
    </div>

    <div class="slide">
      <img src="noga.jpg">
    </div>

    <div class="slide">
      <img src="nokti.jpg">
    </div>

    <div class="slide">
      <img src="guza.jpg">
    </div>
  </div>
</div>

      <div class="container1">
        <div class="row">
          
          <div class="column left">
            
            <img src="ana.jpg" alt="Ana">
          </div>

          <div class="column right">
            <h2> TRETMANI LICA I TIJELA U PULI </h2>
            <p class="homepage"><i>Profesionalna usluga i stručnost naših <br>zaposlenika  vašoj koži će, 
               kao najvećem <br> organu  našeg tijela,  dati ono što joj je potrebno <br> 
              kako bi postala i  ostala zdrava i lijepa,  a <br> vaše tijelo zadržalo  
              vitalnost i njegovan izgled. <br><br><br>
            Izgled nam je svima važan i prvi  dojmovi se <br>brzo pamte i dugo traju. 
             Ako ste pod stresom, <br> umorni ili jednostavno 
             želite  uživati i  opustiti <br> se dođite u naš salon.
             Uz stručni rad s vrhunskom <br>kozmetikom 
             brinemo o vašoj ljepoti i zdravlju.</i></p>
             <button class="join-button" @click="redirectToPage"><b>Rezerviraj termin</b></button>
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
  padding-bottom: 1%;
}
    
.row::after {
  content: "";
  clear: both;
  display: table;
}

.column {
  float: left;
  width: 50%;
  padding: 10px;
}
      
h2{
  font-family: 'Open Sans', sans-serif;
  margin-top: 7%;
  margin-bottom: 35px;
  font-size: 38px;     
}

.homepage {
  font-size: 25px;
  margin:5%;
  font-family: 'Open Sans', sans-serif;
}

img {
  max-width: 80%;
  height: auto;
}
     
.slider {
  padding-top: 5%;  
  padding-bottom: 5%;
  height: 320px;
  margin: auto;
  position: relative;
  width: 75%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.slide-track {
  display: flex;
  width: calc(250px * 10);
  animation: scroll 40s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 5));
  }
}

.slide {
  height: 200px;
  width: 250px;
  padding: 15px;
  display: flex;
  align-items: center;
  perspective: 100px;
}

img {
  width: 100%;
  transition: transform 1s;
}

img:hover {
  transform: translateZ(20px);
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
  padding: 20px 40px;
  background-color: #FFB6C1;
  color: black;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-family: 'Open Sans', sans-serif;
}

.join-button:hover {
  transform: translateY(-2px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 600px) {
        
  .left, .right {
    width: 100%;
  }
  .slider{
    margin-top: 55px;
    margin-bottom: 40px;
  }
  .join-button {
    margin-bottom: 10px;
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
    