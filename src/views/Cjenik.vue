<template>
  <div class="container3">
    <div class="buttons-container" v-if="!isUserLoggedIn">
      <button class="discount" @click="discount1">Primjeni 10% popusta na sve </button>
      <button class="remove" @click="removeDiscount">Ukloni popust</button>              
      <button class="discount" @click="discount2" style="margin-left:6%;">Primjeni 20% popusta na sve</button>           
    </div>
    <h1> Lice + Šminkanje </h1>
    <ul class="pricelist">
      <li v-for="(item, index) in items" :key="item.name" :class="{ 'item': true, 'no-bottom-border': index === items.length - 1 }">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.price }}</span>
      </li>     
    </ul>
    <div class="new-item" v-if="!isUserLoggedIn">
      <label for="item-name">Stavka:</label>
      <input id="item-name" v-model="newItemName" type="text" />
      <label for="item-price">Cijena:</label>
      <input id="item-price" v-model="newItemPrice" type="text" />
      <button @click="addItem('items', newItemName, newItemPrice)">Dodaj</button>
    </div>        
  </div>

  <div class="container3">
    <h1> Nokti </h1>
    <ul class="pricelist">
      <li v-for="(item, index) in items2" :key="item.name" :class="{ 'item': true, 'no-bottom-border': index === items2.length - 1 }">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.price }}</span>
      </li>      
    </ul>
    <div class="new-item" v-if="!isUserLoggedIn">
      <label for="item-name">Stavka:</label>
      <input id="item-name" v-model="newItemName" type="text" />
      <label for="item-price">Cijena:</label>
      <input id="item-price" v-model="newItemPrice" type="text" />
      <button @click="addItem('items2', newItemName, newItemPrice)">Dodaj</button>
    </div>
  </div>

  <div class="container3">
    <h1> Stopala </h1>
    <ul class="pricelist">
      <li v-for="(item, index) in items3" :key="item.name" :class="{ 'item': true, 'no-bottom-border': index === items3.length - 1 }">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.price }}</span>
      </li>     
    </ul>
    <div class="new-item" v-if="!isUserLoggedIn">
      <label for="item-name">Stavka:</label>
      <input id="item-name" v-model="newItemName" type="text" />
      <label for="item-price">Cijena:</label>
      <input id="item-price" v-model="newItemPrice" type="text" />
      <button @click="addItem('items3', newItemName, newItemPrice)">Dodaj</button>
    </div>
  </div>

  <div class="container3">
    <h1> Depilacija </h1>
    <ul class="pricelist">
      <li v-for="(item, index) in items4" :key="item.name" :class="{ 'item': true, 'no-bottom-border': index === items4.length - 1 }">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.price }}</span>
      </li>     
    </ul>
    <div class="new-item" v-if="!isUserLoggedIn">
      <label for="item-name">Stavka:</label>
      <input id="item-name" v-model="newItemName" type="text" />
      <label for="item-price">Cijena:</label>
      <input id="item-price" v-model="newItemPrice" type="text" />
      <button @click="addItem('items4', newItemName, newItemPrice)">Dodaj</button>
    </div>
  </div>

  <div class="container3">
    <h1> Masaža </h1>
    <ul class="pricelist">
      <li v-for="(item, index) in items5" :key="item.name" :class="{ 'item': true, 'no-bottom-border': index === items5.length - 1 }">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.price }}</span>
      </li>      
    </ul>
    <div class="new-item" v-if="!isUserLoggedIn">
      <label for="item-name">Stavka:</label>
      <input id="item-name" v-model="newItemName" type="text" />
      <label for="item-price">Cijena:</label>
      <input id="item-price" v-model="newItemPrice" type="text" />
      <button @click="addItem('items5', newItemName, newItemPrice)">Dodaj</button>
    </div>
  </div>

  <div class="container31">
    <h1> Delux shape </h1>
    <ul class="pricelist">
      <li v-for="(item, index) in items6" :key="item.name" :class="{ 'item': true, 'no-bottom-border': index === items6.length - 1 }">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.price }}</span>
      </li>     
    </ul>
    <div class="new-item" v-if="!isUserLoggedIn">
      <label for="item-name">Stavka:</label>
      <input id="item-name" v-model="newItemName" type="text" />
      <label for="item-price">Cijena:</label>
      <input id="item-price" v-model="newItemPrice" type="text" />
      <button @click="addItem('items6', newItemName, newItemPrice)">Dodaj</button>
    </div>
  </div>
</template>
    
<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

h1{
  font-family: 'Great Vibes', cursive;
  font-size: 45px;
}

.new-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 45px;
  margin-bottom: -7%;
}

.new-item label {
  margin-right: 15px;
  margin-left: 15px;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
}

.new-item input {
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: 'Open Sans', sans-serif;
}

.new-item button {
  background-color: #FFB6C1;
  color: black;
  border-radius: 5px;
  border: none;
  padding: 8px;
  cursor: pointer;
  margin-left: 20px;
  width: 130px;
  font-size: 18px;
}

.new-item button:hover {
  transform: translateY(-2px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
}

.container3 {
  padding-top: 3%;
  padding-bottom: 0%;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  
}

.container31 {
  padding-top: 3%;
  padding-bottom: 5%;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  
}

.pricelist {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 10px solid #FFB6C1;
  border-radius: 10px;
  overflow: hidden;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  border-bottom: 3px solid #FFB6C1;
  padding: 10px;
}

.no-bottom-border {
  border-bottom: none;
}

span {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
}

.buttons-container{
  margin-top: 1%;
  padding-bottom: 3%;
}

.discount{
  font-family: 'Open Sans', sans-serif;
  background-color: #FFB6C1;
  color: black;
  padding: 15px 23px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.discount:hover{
  transform: translateY(-2px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
}

.remove{
  font-family: 'Open Sans', sans-serif;
  background-color: black;
  color: #FFB6C1;
  padding: 15px 23px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-left:6%;
}

.remove:hover{
  transform: translateY(-2px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 600px) {
  li.item {
    flex-direction: column;
    align-items: center;
  }
  .item-price {
    margin-top: 10px;
  }
  .discount {
    font-size: 18px;
    padding: 10px 15px;
  }
  .discount2 {
    font-size: 18px;
    padding: 10px 15px;
    margin-left:-1%;
  }
  .remove {
    font-size: 18px;
    padding: 10px 15px;
    margin-left:-1%;
  }
  .buttons-container{
  margin-top: 1%;
  padding: 2%;
  padding-bottom: 3%;
}
}
</style>

<script>

export default {
  data() {
    return {
      isUserLoggedIn: false,
      appliedDiscount: false,
      items: [
        { name: 'Njega lica', price: '27€', originalPrice: 27 },
        { name: 'Anti-age njega lica', price: '34€', originalPrice:34},
        { name: 'Dubinsko čišćenje lica', price: '34€', originalPrice:34},
        { name: 'Anti-age dubinsko čišćenje lica', price: '47€',originalPrice:47},
        { name: 'Brow lift', price: '30€', originalPrice:30 },
        { name: 'Šminkanje', price: '27€' , originalPrice:27},
        { name: 'Šminkanje + trepavice', price: '34€' , originalPrice:34}, ],

      items2: [
        { name: 'Manikura', price: '11€', originalPrice:11},
        { name: 'Lakiranje', price: '4€', originalPrice:4 },
        { name: 'Dipping na prirodne nokte', price: '20€', originalPrice:20 },
        { name: 'Dipping na produžene nokte', price: '27€', originalPrice:27 },
        { name: 'Skidanje gela / akrila / trajnog laka', price: '7€', originalPrice:7 },
        { name: 'Popravak jednog nokta', price: '4€', originalPrice:4 }, ],
       
      items3: [ 
        { name: 'Estetska pedikura', price: '16€', originalPrice:16 },
        { name: 'Trajni lak', price: '16€' , originalPrice:16},
        { name: 'Pedikura + trajni lak', price: '27€', originalPrice:27 },
        { name: 'Lakiranje', price: '6€', originalPrice:6 },
        { name: 'Rekonstrukcija nokta', price: '7€', originalPrice:7 }, ],

       items4: [ 
        { name: 'Depilacija naušnica', price: '4€', originalPrice:4 },
        { name: 'Depilacija brade', price: '4€', originalPrice:4 },
        { name: 'Korekcija obrva', price: '5€', originalPrice:5 },
        { name: 'Korekcija + bojanje obrva', price: '10€', originalPrice:10 },
        { name: 'Depilacija cijelih nogu', price: '15€', originalPrice:15 },
        { name: 'Parcijalna depilacija', price: '9€', originalPrice:9 },
        { name: 'Bikini', price: '6€', originalPrice:6 },
        { name: 'Brazilka', price: '8€', originalPrice:8 },
        { name: 'Brazilka šećernom pastom', price: '14€', originalPrice:14 },
        { name: 'Depilacija ruku', price: '8€', originalPrice:8 },
        { name: 'Depilacija pazuha', price: '5€', originalPrice:5 },
        { name: 'Depilacija leđa', price: '10€', originalPrice:10 }, ],
        
        items5: [ 
        { name: 'Masaža lica', price: '11€', originalPrice:11 },
        { name: 'Masaža lica i glave', price: '14€', originalPrice:14 },
        { name: 'Parcijalna masaža', price: '14€' , originalPrice:14},
        { name: 'Aroma masaža cijelog tijela', price: '26€', originalPrice:26 },
        { name: 'Anticelulitna parcijalna masaža', price: '20€' , originalPrice:20},
        { name: 'Aparativna limfna drenaža', price: '11€', originalPrice:11 },
        { name: 'Total relax', price: '34€', originalPrice:34 }, ],

        items6: [ 
        { name: 'Delux shape noge', price: '34€', originalPrice:34 },
        { name: 'Delux shape trbuh', price: '20€', originalPrice:20 },
        { name: 'Delux shape paket 10 tretmana noge', price: '279€', originalPrice:279 },
        { name: 'Delux shape paket 10 tretmana trbuh', price: '146€', originalPrice:146 },
        { name: 'Delux shape full body 10 tretmana', price: '340€', originalPrice:340 }, ],
        
        newItemName: '',
        newItemPrice: ''
};
},
methods: {
    discount1() {
  if (!this.appliedDiscount) {
    let itemsArray = [this.items, this.items2, this.items3, this.items4, this.items5, this.items6];
    itemsArray.forEach(items => {
      items.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.9).toFixed(2);
        item.price = `${price}€`;
      });   
    });
    this.appliedDiscount = true;   
  }
},
    discount2() {
  if (!this.appliedDiscount) {
    let itemsArray = [this.items, this.items2, this.items3, this.items4, this.items5, this.items6];
    itemsArray.forEach(items => {
      items.forEach(item => {
        let [price, currency] = item.price.split(" ");
        price = Number(price.slice(0, -1));
        price = (price * 0.8).toFixed(2);
        item.price = `${price}€`;
      });
    });
    this.appliedDiscount = true;
  }
},
    removeDiscount() {
  if (this.appliedDiscount) {
    const items = [this.items, this.items2, this.items3, this.items4, this.items5, this.items6];
    items.forEach(itemList => {
      itemList.forEach(item => {
        item.price = item.originalPrice + '€';
      });
    });
    this.appliedDiscount = false;
  }
},

addItem(pricelist, name, price, originalPrice) {
  let item = { name: name, price: `${price}€`, originalPrice: `${price}`};
  switch (pricelist) {
    case 'items':
      this.items.push(item);
      break;
    case 'items2':
      this.items2.push(item);
      break;
    case 'items3':
      this.items3.push(item);
      break;
    case 'items4':
      this.items4.push(item);
      break;
    case 'items5':
      this.items5.push(item);
      break;
    case 'items6':
      this.items6.push(item);
      break;
    default:
      console.error(`Invalid pricelist: ${pricelist}`);
  }
  this.newItemName = '';
  this.newItemPrice = '';
},
},
};
</script>