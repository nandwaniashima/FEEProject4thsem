let searchForm = document.querySelector('.search-form');
let isUserLoggedIn = JSON.parse(sessionStorage.getItem('loggedIn')) ? JSON.parse(sessionStorage.getItem('loggedIn')) : false;
// let listCards = [];
let listCards = JSON.parse(sessionStorage.getItem('listCards')) ? JSON.parse(sessionStorage.getItem('listCards')) : [];
// let totalPrice = JSON.parse(sessionStorage.getItem('totalPrice')) ? JSON.parse(sessionStorage.getItem('totalPrice')) : 0;

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
}




let navbar = document.querySelector('.navbar');
let userIcon = document.getElementById('user');
let userCircle = document.getElementById('userCircle');

document.querySelector('#menu-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
}
window.onscroll=() =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');

}

function abc(id) {
  // Find the product object in the products array
  let product = products2.find((product) => {
      return product.id === id;
  });

  // If the product is not found in listCards, clone it to avoid directly modifying the original object
  if (!listCards.find((listCard) => listCard.id === id)) {
      product = { ...product }; // Create a shallow copy of the product object
  }

  // Find the index of the product in listCards
  const idx = listCards.findIndex((listCard) => listCard.id === id);

  // Increment the count property
  product.count++;

  // If the product is not in listCards, add it
  if (idx === -1) {
      listCards.push(product);
  }

  body.classList.add('active');
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = '';
  let quantity = 0;
  let totalPrice = 0;

  if (listCards.length === 0) {
      // If the cart is empty, set total price and quantity to zero
      total.innerText = '$0';
      totalCount.innerText = '0';
  } else {
      listCards.forEach((value) => {
          const productTotal = value.price * value.count;
          totalPrice += productTotal;
          quantity += value.count;

          if (value !== null) {
              let newDiv = document.createElement('li');
              newDiv.innerHTML = `
                  <div>${value.name}</div>
                  <div><img src="images/${value.image}" alt="${value.name}" /></div>
                  <div>$${productTotal.toLocaleString()}</div>
                  <div> 
                      <button onclick="changeQuantity(${value.id}, ${value.count - 1})">-</button>
                      <div class="count">${value.count}</div>
                      <button onclick="changeQuantity(${value.id}, ${value.count + 1})">+</button>
                  </div>
              `;
              listCard.appendChild(newDiv);
          }
      });

      // Update the total price and quantity display elements
      total.innerText = `$${totalPrice.toLocaleString()}`;
      totalCount.innerText = quantity.toString();
  }

  // Save the current state of the cart to sessionStorage
  sessionStorage.setItem('listCards', JSON.stringify(listCards));
}

function changeQuantity(id,count){
  let productIndex = listCards.findIndex((product)=> {
      return product.id === id.id;
  })
  if(count === 0) {
      listCards.splice(productIndex, 1);
  } else{
      let updatedProduct = Object.assign({}, listCards[productIndex]);
      updatedProduct.count = count;
      updatedProduct.price = count * products2[productIndex].price;

      // Update the element in the array with the updated object
      listCards[productIndex] = updatedProduct;
  }
  reloadCard();
}

function myFunction() {
  console.log("File loaded");
  if(isUserLoggedIn) {
    userIcon.style.display = 'none';
    userCircle.style.display = 'flex';
  } else {
    userIcon.style.display = 'block';
    userCircle.style.display = 'none';
  }
  // Your code here...
}

window.addEventListener('load', myFunction);

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let outsideCart = document.querySelector('.container');
let list =document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let totalCount = document.querySelector('.quantity');
let crossIcon = document.querySelector('.close-icon');
totalCount.innerText = String(listCards.length);

crossIcon.addEventListener('click', ()=> {
  body.classList.remove('active');
})

openShopping.addEventListener('click', ()=> {
  body.classList.add('active');
  reloadCard();
})
closeShopping.addEventListener('click',()=>{
  body.classList.remove('active');
})

// outsideCart.addEventListener('click',($event)=> {
//   if($event.target.tagName !== 'IMG')
//   body.classList.remove('active');
// })

  const products2 = [
    {
        id:'Colgate',
        name: 'Colgate',
        image: 'b4.jpeg',
        price: 13.99,
        count: 0
    },
    {
        id:'onion',
        name: 'onion',
        image: 'onion.png',
        price: 3.99,
        count: 0
    },
    {
        id:'baby4',
        name: 'Milk Bottle',
        image: 'baby4.jpeg',
        price: 11.99,
        count: 0
    },
    {
        id:'diary4',
        name: 'Amul butter',
        image: 'd3.jpeg',
        price: 9.99,
        count: 0
    },
    {
        id:'pen',
        name: 'Pen',
        image: 'o4.jpeg',
        price: 1.99,
        count: 0
    },
    {
        id:'Avacado',
        name: 'Avacado',
        image: 'Avacado.png',
        price: 17.99,
        count: 0
    },
    {
        id:'eggs',
        name: 'Eggs',
        image: 'n4.jpeg',
        price: 4.99,
        count: 0
    },
    {
        id:'watermelon',
        name: 'Watermelon',
        image: 'watermelon.png',
        price: 7.99,
        count: 0
    },
    {
        id:'compact',
        name: 'Compact',
        image: 'b6.jpeg',
        price: 15,
        count: 0
    },
    {
        id:'baby6',
        name: 'Baby Food',
        image: 'baby6.jpeg',
        price: 8.99,
        count: 0
    },
    
]