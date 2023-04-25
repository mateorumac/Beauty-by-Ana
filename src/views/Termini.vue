<template>
  <div class="booking">
    <h2 class="reztekst">Rezerviraj termin</h2>
    <form class="rezervacija" @submit.prevent="submitForm">
        <div class="booking">
        <label for="category">Kategorija:</label>
        <select id="category" v-model="selectedCategory" required>
          <option disabled value="">Molimo odaberite jednu</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
        </div>
      <div class="booking">
        <label for="service">Usluga:</label>
        <select id="service" v-model="selectedService" required>
          <option disabled value="">Molimo odaberite jednu</option>
          <option v-for="service in services" :key="service.id" :value="service.id">{{ service.name }}</option>
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
        <label for="comments">Dodatni komentari:</label>
        <input type="text" id="comments" v-model="clientComments" placeholder="Dodatni komentari...">
      </div>
      <div class="booking">
        <button class="rsvbtn" type="submit">Rezerviraj</button>
      </div>
    </form>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

.reztekst {
  margin-bottom: 20px;
  margin-top: 2%;
  font-family: 'Great Vibes', cursive;
  font-size: 70px;
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
  background-color: #ff99a8;;
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
export default {
  data() {
    return {
      selectedCategory: '',  
      selectedService: '',
      selectedTime: '',
      clientPhone: '',
      clientComments: '',
      categories: [
        { id: 1, name: 'Lice + šminkanje' },
        { id: 2, name: 'Nokti' },
        { id: 3, name: 'Stopala' },
        { id: 4, name: 'Depilacija' },
        { id: 5, name: 'Masaža' },
        { id: 6, name: 'Deluxe shape' }
      ],
      services: [
        { id: 1, name: 'Njega lica' },
        { id: 1, name: 'Nokti' },
        { id: 3, name: 'Stopala' },
        { id: 4, name: 'Depilacija' },
        { id: 5, name: 'Masaža' },
        { id: 6, name: 'Deluxe shape' }
      ]
    };
  }
  }
</script>
