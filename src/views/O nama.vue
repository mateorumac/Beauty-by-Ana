<template>  
      <div class="container2">
        <div class="row">         
          <div class="column left"> <br><br>
            <p class="about"><i>Salon ljepote Ana nalazi se u Puli. <br>
                Našim klijentima nudimo usluge njege lica, <br> masaže, 
                depilacije, njege ruku i stopala, <br> oblikovanja tijela, šminkanja i brow lifting.<br>
                Uz ove usluge također imamo i odjel  prodaje <br> preparativne i dekorativne kozmetike.</i></p>
            <img src="rad.jpg" alt="nokti">
             <p class="about"><i> Naš uspjeh dugujemo konstantnom <br> poboljšavanju 
              vlastitih usluga i ono najvažnije, <br> iznimnom zadovoljstvu naših klijenata.</i></p> <br>
            <img src="salon1.png" alt="salon" style="width: 80%;">
          </div>
            <div class="column right"> <br>
              <img src="kozmetika.jpg" alt="kozmetika" style="width: 80%;">
              <p class="about"><i>Naš salon opremljen je po visokim standardima, <br> 
              pružajući klijentima ugodnu i toplu atmosferu. <br>
             Svi naši klijenti dobiju najbolju profesionalnu uslugu, <br> 
            za što se brine naš stručni i talentirani tim. </i></p> <br>             
              <img src="salon2.png" alt="salon" style="width: 80%;">
              <div class="rectangle">
                <p class="about"><br><b> RADNO VRIJEME: </b><br><br>
                PON I ČET - 13:00-20:00 <br><br> UTO , SRI , PET - 09:00-16:00 <br><br> SUB - PO DOGOVORU </p>
              </div>
            </div>
        </div>
      </div>     
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
      
.container2 {
  max-width: 100%;
  margin: 0 auto;
}

.rectangle {
  margin-top: 4%;
  margin-bottom: 7%;
  margin-left: 25% ;
  width: 450px;
  height: 370px;
  background-color: #FFB6C1;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px #DCDCDC;
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

.about{
  margin:5%;
  padding: 5%;
  font-family: 'Open Sans', sans-serif;
  font-size: 25px;
}
      
.left img {
  max-width: 80%;
  height: auto;
  padding-left: 7%;
  padding-top: 5%;
  padding-bottom: 5%;
  margin-left:-5%;
}

.right img {
  max-width: 80%;
  height: auto;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-right: 5%;
}

@media (max-width: 600px) {
        
  .left, .right {
    width: 100%;
  }
    
  .right img {
    width: 100%;
    margin-left: 8%;
  }
  
  .rectangle{
    margin-left: 0%;
    margin-bottom: 7%;
  }       
}  
</style>