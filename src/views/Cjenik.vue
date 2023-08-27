<template>
  <div class="container3"> 
    <div class="buttons-container" v-if="role === 'admin'">
      <button class="discount" @click="discount1">Primjeni 10% popusta na sve </button>
      <button class="remove" @click="removeDiscount">Ukloni popust</button>              
      <button class="discount" @click="discount2" style="margin-left:6%;">Primjeni 20% popusta na sve</button>           
    </div>
    <h1> Cjenik usluga </h1>
    <ul class="pricelist" style="margin-bottom:10%">
      <li v-for="(item, index) in items" 
    :key="item.name" 
    :class="{ 'item': true, 'no-bottom-border': index === items.length - 1 }">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">{{ item.displayPrice }}</span>
      </li>     
    </ul>
    
    <div class="new-item" v-if="role === 'admin'">
      <label for="item-name">Stavka:</label>
      <input id="item-name" v-model="newItemName" type="text" />
      <label for="item-price">Cijena:</label>
      <input id="item-price" v-model="newItemPrice" type="text" />
      <button @click="addItem">Dodaj</button>
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
  margin-bottom: 0,5%;
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
import  {getUserRole}  from '../router/helpers';

export default {
  data() {
    return {
      appliedDiscount: false,
      role: getUserRole(),
      allItems: [],
      items: [],              
        newItemName: '',
        newItemPrice: ''       
};

},
methods: {
  async fetchItems() {
      try {
          let response = await fetch("http://localhost:3000/api/item/");
          if (!response.ok) { 
              throw new Error('Network response was not ok');
          }
          let data = await response.json();
          this.items = data.map(item => ({
            ...item,
            displayPrice: `${item.price}€` 
          }));
      } catch (error) {
          console.error("Error fetching the items:", error);
      }
    },

   applyDiscount(rate) {
    let canApplyDiscount = this.items.every(item => item.price === item.originalPrice);

    if (!canApplyDiscount) {
        console.warn("A discount is already applied. Remove it before applying a new one.");
        return;
    }

    this.items.forEach(item => {
        item.price = parseFloat((item.originalPrice * (1 - rate)).toFixed(2));
        item.displayPrice = `${item.price}€`;
        this.updateItemOnServer(item);
    });
},

    discount1() {
      this.applyDiscount(0.10);
    },

    discount2() {
      this.applyDiscount(0.20);
    },

    removeDiscount() {
  this.items.forEach(item => {
    if (item.price !== item.originalPrice) {
      item.price = item.originalPrice;
      item.displayPrice = `${item.originalPrice}€`;
      this.removeItemDiscountOnServer(item);
    }
  });
},

    async updateItemOnServer(item) {
    try {
        if (!item || !item._id) {  // Ensure you're using _id
            throw new Error("Item or item ID missing.");
        }

        const url = `http://localhost:3000/api/item/${item._id}/discount`;

        const config = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        };

        const response = await fetch(url, config);
        if (!response.ok) {
            const responseBody = await response.json(); 
            throw new Error(`Server responded with status ${response.status}: ${responseBody.message}`);
        }

        const updatedItem = await response.json();
        console.log("Item updated successfully:", updatedItem);

    } catch (error) {
        console.error("Error during fetch:", error.message);
    }
  },

async removeItemDiscountOnServer(item) {
    try {
        const response = await fetch(`http://localhost:3000/api/item/${item._id}/removeDiscount`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error during fetch:", error.message, "Full error:", error);
    }
},

async addItem(name, price) {
  let item = {
      name: this.newItemName,
      price: parseFloat(this.newItemPrice),
      originalPrice: parseFloat(this.newItemPrice)
    };
   try {
    
    let response = await fetch("http://localhost:3000/api/item/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    let responseData = await response.json();

    if (responseData.success) {
  let addedItem = {
    ...responseData.item,
    displayPrice: `${responseData.item.price}€`
  };
  this.items.push(addedItem);

    } else {
      console.error("Failed to add the item on the server side");
    }

  } catch (error) {
    console.error("Error adding the item:", error);
  }

  this.newItemName = '';
  this.newItemPrice = '';
},
},
 mounted() {
    this.fetchItems();
  }
};
</script>