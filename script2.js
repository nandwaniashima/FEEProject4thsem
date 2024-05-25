const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');
// let listCards = [];
let listCards = JSON.parse(sessionStorage.getItem('listCards')) ? JSON.parse(sessionStorage.getItem('listCards')) : [];
// let totalPrice = JSON.parse(sessionStorage.getItem('totalPrice')) ? JSON.parse(sessionStorage.getItem('totalPrice')) : 0;

window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn');
});

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function abc(id) {
    // Find the product object in the products array
    let product = products.find((product) => {
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
        updatedProduct.price = count * products[productIndex].price;

        // Update the element in the array with the updated object
        listCards[productIndex] = updatedProduct;
    }
    reloadCard();
}
function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let outsideCart = document.querySelector('.container');
let list =document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let totalCount = document.querySelector('.quantity');
totalCount.innerText = String(listCards.length);
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
outsideCart.addEventListener('click',($event)=> {
    if($event.target.tagName !== 'IMG')
    body.classList.remove('active');
})

// document.querySelector('.close-icon').addEventListener('click', function() {
//     document.querySelector('.card').classList.remove('active');
// });

const products = [
    {
        id:'cabbage',
        name: 'cabbage',
        image: 'cabbage.png',
        price: 16.70,
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
        id:'apple',
        name: 'apple',
        image: 'apple.png',
        price: 17,
        count: 0
    },
    {
        id:'grapes',
        name: 'grapes',
        image: 'grapes.png',
        price: 14.33,
        count: 0
    },
    {
        id:'baby1',
        name: 'Baby Shampoo',
        image: 'baby1.jpeg',
        price: 35,
        count: 0
    },
    {
        id:'baby2',
        name: 'Baby oil',
        image: 'baby2.jpeg',
        price: 26.4,
        count: 0
    },
    {
        id:'office1',
        name: 'Paper clips',
        image: 'o2.jpeg',
        price: 40.70,
        count: 0
    },
    {
        id:'office2',
        name: 'Markers',
        image: 'o1.jpeg',
        price: 16.70,
        count: 0
    },
    {
        id:'non-veg-1',
        name: 'Fish',
        image: 'n3.jpeg',
        price: 50.70,
        count: 0
    },
    {
        id:'non-veg-2',
        name: 'Freshwater Fish',
        image: 'n1.jpeg',
        price: 16.70,
        count: 0
    },
    {
        id:'beauty1',
        name: 'Body lotion',
        image: 'b1.jpeg',
        price: 90,
        count: 0
    },
    {
        id:'beauty2',
        name: 'Body cream',
        image: 'b2.jpeg',
        price: 64,
        count: 0
    },
    
]
