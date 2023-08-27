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
            <p class="homepage">
              <i v-for="rev in reviews" :key="rev._id">
            {{ rev.reviewerName }} {{ rev.rating }} &starf;<br>
            {{ rev.review }}<br><br><br>
              </i>
            </p>
            </div>
            <div v-if="isAuthenticated()" class="reviews">
            <h2>Ostavi svoj dojam!</h2>
            <form>
            <div class="form-group3">
            <label for="username">Vaše ime</label>
            <input type="text" id="username" v-model="username"/>
            <label for="review">Vaš dojam</label>
            <textarea id="review" v-model="review"></textarea>
            </div>
            <div class="form-group3">
            <div class="star-rating">
	        <input type="radio" id="5-stars" name="rating" value="5" v-model="rating" />
	        <label for="5-stars" class="star">&bigstar;</label>
	        <input type="radio" id="4-stars" name="rating" value="4"  v-model="rating" />
	        <label for="4-stars" class="star">&bigstar;</label>
	        <input type="radio" id="3-stars" name="rating" value="3" v-model="rating" />
	        <label for="3-stars" class="star">&bigstar;</label>
	        <input type="radio" id="2-stars" name="rating" value="2" v-model="rating" />
	        <label for="2-stars" class="star">&bigstar;</label> 
	        <input type="radio" id="1-star" name="rating" value="1" v-model="rating" />
	        <label for="1-star" class="star">&bigstar;</label>
            </div>
            </div>
            <button type="button" @click="submitReview()">Pošalji</button>
            </form>
            </div>
            <div v-else>
            <p>Ulogirajte se kako bi ostavili svoj dojam!</p>
        </div>
          </div>
          <div v-if="showSuccessPopup" class="success-popup">
        Vaš dojam je zabilježen!
        <button @click="closePopup">Zatvori</button>
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

.success-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  color: white;
  z-index: 1000;
}

.success-popup button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
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
import  {isAuthenticated}  from '../router/helpers';
export default {
  name: 'ReviewForm',
  data() {
    return {
      rating: null,
      review: '',
      username: '',
      showSuccessPopup: false,
      reviews: []
    };
  },
  mounted(){ 
    this.fetchReviews();
  },
  methods: {
    isAuthenticated,
    closePopup() {
    this.showSuccessPopup = false;
  },
    async submitReview() {
  const reviewData = {
    review: this.review,
    rating: this.rating,
    reviewerName: this.username
  };


  try {   
    const response = await fetch("http://localhost:3000/api/review/review", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    });

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      const responseData = await response.json();
      console.log('Review submitted successfully', responseData);
      this.showSuccessPopup = true;
      this.username = '';
      this.review = '';
      this.rating = 0;
      if (responseData.review) {
        this.reviews.push(responseData.review);
      }
    } else {
      console.error('Received non-JSON response', await response.text());
    }
  } catch (error) {
    // Handle error response
    console.error('Error submitting review', error);
  }
},

  async fetchReviews() {
        try {
            const response = await fetch("http://localhost:3000/api/review/svi");
            if(response.ok) {
                this.reviews = await response.json();
            } else {
                console.error("Failed to fetch reviews");
            }
        } catch (error) {
            console.error('Error fetching the reviews:', error);
        }
    }

  }
};
</script>