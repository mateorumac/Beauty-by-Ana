<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="container4">
    <div class="row">
      <div class="column left">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Beauty%20by%20Ana%20Pula&t=&z=19&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="yes"
              marginheight="0"
              marginwidth="0"
              style="border:0; width: 100%; height: 100%;"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="column right">
        <img src="bba.png" class="logo1">
        <p class="contact">
          <i class="fa fa-map-marker"></i>&nbsp;
          TRG KRALJA TOMISLAVA 8 <br> &nbsp; &nbsp;&nbsp;PULA<br><br><br>
          <i class="fa fa-phone"></i>&nbsp;
          097 663 43 57 <br><br><br>
          <i class="fa fa-envelope"></i>&nbsp;
          AMMANEV@GMAIL.COM
        </p>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

.container4 {
  padding-top: 4%;
  max-width: 100%;
  margin: 0 auto;
  padding-bottom: 4%;
  overflow: hidden;
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
  transition: transform 0.5s ease-in-out;
}

.column:hover {
  transform: scale(1.02);
}

.mapouter {
  position: relative;
  text-align: center;
  height: 650px;
  width: calc(100% - 40px);
  margin: 0 auto;
  margin-left: 100px; 
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  transition: transform 0.5s ease-in-out;
}

.mapouter:hover {
  transform: scale(1.05);
}

.gmap_canvas {
  overflow: hidden;
  background: none;
  height: 100%;
  width: 100%;
}

.gmap_canvas iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.contact {
  display: inline-block;
  text-align: left;
  font-size: 30px;
  font-family: 'Open Sans', sans-serif;
  transition: color 0.3s ease;
}

.contact i {
  transition: color 0.3s ease;
}

.contact i:hover {
  color: #FFB6C1; 
}

.right {
  text-align: center;
  transition: transform 0.5s ease-in-out;
}

.right:hover {
  transform: scale(1.02);
}

.logo1 {
  height: 700px;
  width: 700px;
  margin-top: -25%;
  margin-bottom: -27%;
}

/* Styles for tablets and larger phones (min-width: 601px and max-width: 1024px) */
@media (min-width: 601px) and (max-width: 1024px) {
  .column {
    width: 100%;
    padding: 10px;
  }

  .mapouter {
    margin-left: 60px; 
    height: 500px; 
  }

  .logo1 {
    height: 500px; 
    width: auto;
    margin-top: 0;
    margin-bottom: 0;
  }

  .contact {
    font-size: 26px; 
  }
}

/* Styles for mobile portrait (max-width: 600px) */
@media (max-width: 600px) {
  .container4 {
    padding-top: 2%;
    padding-bottom: 2%;
    display: flex;
    flex-direction: column; 
    align-items: center; 
  }

  .row {
    display: flex;
    flex-direction: column; 
    width: 100%;
  }

  .column.left, .column.right {
    width: 100%;
    padding: 0; 
  }

  .mapouter {
    margin-left: 0; 
    margin-right: 0; 
    margin-top: 0; 
    height: 400px;
    border-radius: 10px;
    box-shadow: none;
    width: 100%; 
  }

  .logo1 {
    max-width: 100%;
    height: auto;
    margin: -100px 0; 
  }

  .contact {
    font-size: 23px;
    margin-bottom: 10px; 
    text-align: left; 
  }
}

/* Styles for mobile landscape (max-width: 768px) */
@media (max-width: 768px) and (orientation: landscape) {
  .mapouter {
    height: 400px; 
  }

  .contact {
    font-size: 24px; 
  }
}
</style>
