<template>
  <div v-if="isAuthenticated()" class="booking">
    <h2 class="reztekst">Rezerviraj termin</h2>
    <div class="booking">
    <form  class="rezervacija" @submit.prevent="submitForm">
        <div class="booking">
        <label for="category">Vrsta usluge:</label>
        <select id="category" v-model="selectedCategory" required>
          <option disabled value="">Molimo odaberite jednu</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
        </div>
      <div class="booking">
        <label for="time">Vrijeme:</label>
        <input type="datetime-local" id="time" v-model="selectedTime" required>
      </div>
      <div class="booking">
        <label for="phone">Broj telefona:</label>
        <input type="tel" id="phone" v-model="clientPhone" required>
      </div>
      <div class="booking">
        <button class="rsvbtn" type="submit">Rezerviraj</button>
      </div>
    </form>
      </div></div>
      
    <div v-else>
            <h1>Molimo ulogirajte se kako bi rezervirali termin!</h1>
            <button class="redirect" @click=redirectToPage()>Ulogiraj se</button>
        </div>
        <div v-if="showSuccessPopup" class="success-popup">
        Vaš termin je zabilježen!
        <button @click="closePopup">Zatvori</button>
      </div>
        
  <div v-if="role === 'admin'">
    <h2 class="reztekst">Zakazani termini</h2>
    <ul>
        <li v-for="reservation in reservations" :key="reservation._id" class="reservation-item">
            <div class="reservation-container">
                <div class="booking">
                    <h2>{{ getServiceNameById(reservation.serviceType) }}</h2>
                    <p>Ime i prezime: {{ reservation.comment.split("Reserved by ")[1] }}</p>
                    <p>Datum: {{ new Date(reservation.reservationDate).toLocaleDateString() }}</p>
                    <p>Vrijeme: {{ new Date(reservation.reservationDate).toLocaleTimeString() }}</p>
                    <p>Broj telefona: {{ reservation.phoneNumber }}</p>
                    <button @click="deleteReservation(reservation._id)" class="removeRes">Ukloni rezervaciju</button>
                </div>
            </div>
        </li>
    </ul>
</div>

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

.redirect{
  font-family: 'Open Sans', sans-serif;
  background-color: #FFB6C1;
  color: black;
  padding: 15px 23px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 2%;
}

.redirect:hover{
  background-color: #ff99a8;
}

.removeRes{
  font-family: 'Open Sans', sans-serif;
  background-color: #FFB6C1;
  color: black;
  padding: 15px 23px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.removeRes:hover{
  background-color: #ff99a8;
}

.reservation-item {
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  font-family: 'Open Sans', sans-serif;
}

.reservation-container {
  
  padding: 20px; 
  background-color: #f5f5f5;
  display: flex; 
  align-items: center;
  border-radius: 10px;
  font-family: 'Open Sans', sans-serif;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
}

.reztekst {
  margin-bottom: 20px;
  margin-top: 2%;
  font-family: 'Great Vibes', cursive;
  font-size: 70px;
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

.rezervacija {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  margin-bottom: 1%;
  font-family: 'Open Sans', sans-serif;
}

.booking {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
}

label {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  font-family: 'Open Sans', sans-serif;
}

select,
input[type="datetime-local"],
input[type="text"],
input[type="email"],
input[type="tel"] {
  font-size: 16px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Open Sans', sans-serif;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%23333333' stroke-width='2'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}

.rsvbtn[type="submit"] {
  font-size: 16px;
  font-weight: 500;
  padding: 12px 24px;
  color: black;
  background-color: #FFB6C1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-family: 'Open Sans', sans-serif;
}

button[type="submit"]:hover {
  background-color: #ff99a8;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.comments {
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  height: 100px;
}
</style>
<script>
import  {isAuthenticated}  from '../router/helpers';
import  {getUserRole}  from '../router/helpers';

export default {
  
  data() {
    return {
      role: getUserRole(),
      showSuccessPopup: false,
      selectedCategory: '',  
      selectedTime: '',
      clientPhone: '',
      categories: [
        { id: 1, name: 'Lice + šminkanje' },
        { id: 2, name: 'Nokti' },
        { id: 3, name: 'Stopala' },
        { id: 4, name: 'Depilacija' },
        { id: 5, name: 'Masaža' },
        { id: 6, name: 'Deluxe shape' }
      ],
      reservations: []
    };
  },
  methods: {
    isAuthenticated,
    closePopup() {
    this.showSuccessPopup = false;
  },
  redirectToPage() {
      window.location.href = '/login';
    },
    async submitForm() {
  const formData = {
    selectedCategory: this.selectedCategory,
    selectedTime: this.selectedTime,
    clientPhone: this.clientPhone,
  };

  const jwtToken = localStorage.getItem('jwtToken');

  try {   
    const response = await fetch("http://localhost:3000/api/reserved/reserved", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + jwtToken
      },
      body: JSON.stringify(formData)
    });

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      const responseData = await response.json();
      console.log('Form submitted successfully', responseData);
      this.showSuccessPopup = true;
      this.selectedCategory = '';
      this.selectedTime = '';
      this.clientPhone = '';
      if (responseData.reservation) {
        this.reservations.push(responseData.reservation);
      }
    } else {
      console.error('Received non-JSON response', await response.text());
    }
  } catch (error) {
    // Handle error response
    console.error('Error submitting form', error);
  }
},

async fetchReservations() {
        const jwtToken = localStorage.getItem('jwtToken');

        try {
            const response = await fetch("http://localhost:3000/api/reserved/getAllReservations", {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + jwtToken
                }
            });

            if (response.ok) {
                this.reservations = await response.json();
            } else {
                console.error('Error fetching reservations', await response.text());
            }
        } catch (error) {
            console.error('Error fetching reservations', error);
        }
    },

 getServiceNameById(id) {
        const service = this.categories.find(category => category.id == id);
        return service ? service.name : '';
    },
  
  async deleteReservation(reservationId) {
    try {
        const response = await fetch(`http://localhost:3000/api/reserved/${reservationId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
            }
        });

        if (response.ok) {
            
            this.reservations = this.reservations.filter(reservation => reservation._id !== reservationId);
            console.log('Reservation deleted successfully');
        } else {
            console.error('Error deleting reservation', await response.text());
        }
    } catch (error) {
        console.error('Error deleting reservation', error);
    }
}

  },
  mounted(){
    if (this.role === 'admin') {
        this.fetchReservations();
    }
  }
};
</script>
