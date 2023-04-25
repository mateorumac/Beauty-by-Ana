<template>
    <div class="container1">
        <div class="row">
          
          <div class="column left">
            <h2> ZANIMA NAS VAŠE MIŠLJENJE! </h2>
            <p class="homepage"><i> 
               Iznimno cijenimo mišljenje naših mušterija <br> koja  nam pomažu u konstantom  rastu <br> i unaprjeđivanju nas i naših usluga. <br>
               Ukoliko ste imali iskustva sa radom našeg <br>salona, molimo Vas da  
               ostavite  Vaše <br> mišljenje i iskustvo kako bi pomogli   budućim <br>korisnicima u odabiru baš našeg salona.</i></p> 
              <br><br><br>
            <img src="kor1.jpg">  
          </div>

          <div class="column right">
            <div style="width:65%, margin-left:40%">
            <p class="homepage"><i> Marija L. 5 &starf;<br> Meni je iskustvo bilo fantastično. 
            Cure su super  i odlično su mi <br> popravile obrve i trepavice. Definitivno se vraćam drugi put! <br><br><br>
            Marina Z. 5&starf; <br> KAKO. DOBRA. MASAŽA. <br> Nitko me nikad nije ovako dobro izmasirao kao Ana! Dva dana <br> 
            nakon nisam se mogla pomaknuti hahah, ali kad je bol prošla <br> osjećala sam se bolje nego ikada! <br><br><br>
            Slađana B. 5&starf; <br> Puno hvala Ana na noktićima, jako mi se sviđaju. Muž kaže da nisam nikad imala tako dobre :)  </i></p>
            </div>
            <div class="reviews">
            <h2>Ostavi svoj dojam!</h2>
            <form @submit.prevent="submitReview">
            <div class="form-group3">
            <label for="review">Vaš dojam</label>
            <textarea id="review" v-model="review"></textarea>
            </div>
            <div class="form-group3">
            <div class="star-rating">
	        <input type="radio" id="5-stars" name="rating" value="5" />
	        <label for="5-stars" class="star">&bigstar;</label>
	        <input type="radio" id="4-stars" name="rating" value="4" />
	        <label for="4-stars" class="star">&bigstar;</label>
	        <input type="radio" id="3-stars" name="rating" value="3" />
	        <label for="3-stars" class="star">&bigstar;</label>
	        <input type="radio" id="2-stars" name="rating" value="2" />
	        <label for="2-stars" class="star">&bigstar;</label> 
	        <input type="radio" id="1-star" name="rating" value="1" />
	        <label for="1-star" class="star">&bigstar;</label>
            </div>
            </div>
            <button type="button">Pošalji</button>
            </form>
            </div>
          </div>
        </div>
      </div>     
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
.form-group3 {
  margin-bottom: 1rem;
}
label {
  display: block;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 10px;
}
input[type="text"],
textarea {
  width: 65%;
  padding: 2%;
  font-family: 'Open Sans', sans-serif;
}

button[type="button"] {
  font-family: 'Open Sans', sans-serif;
  background-color: #FFB6C1;
  color: black;
  padding: 15px 23px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 15px;
}

button[type="button"]:hover {
  background-color: #ff99a8;
}

.star-rating {
	border: 0;
	display: flex;
	flex-direction: row-reverse;
	font-size: 2em;
	justify-content: auto;
	text-align: center;
	width: 5em;
    margin-left: 40%;
}

.star-rating input {
	display: none;
}

.star-rating label {
	color: rgb(128, 128, 128);
	cursor: pointer;
}

.star-rating :checked ~ label {
	color: rgb(255, 212, 59);
}

.star-rating :hover ~ label {
	color: rgb(250, 176, 5);
}
</style>

<script>

export default {
  name: 'ReviewForm',
  data() {
    return {
      rating: 1,
      review: ''
    }
  }}
</script>