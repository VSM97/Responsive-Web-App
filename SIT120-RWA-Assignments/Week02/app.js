//Selecting Elements
const productElements = document.querySelector(" .products");
const cartElements = document.querySelector(" .cart-items");

//Rendering productcs
function renderProdcuts(){
    products.forEach( (product) => {
        productElements.innerHTML += `
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.imgSrc}" alt="${product.name}">
                    </div>
                    <div class="desc">
                        <h2>${product.name}</h2>
                        <h2><small>$</small>${product.price}</h2>
                            <button class="addTocart" type="button" onclick="addToCart(${product.id})">Add to cart</button>
                    </div>
                </div>
        `
    });
}

renderProdcuts();

//Declare Cart
let cart = [];

//addToCart Function
function addToCart(id){
    //ignore items already in cart
    if (cart.some((item) => item.id === id)){
        alert("Product already added to cart!!!")
    } else{
        const item = products.find((product)  => product.id === id)
        cart.push({
            ...item,
            numberOfUnits : 1
        });
    }


    updateCart();
}

//Update Cart
function updateCart(){
    renderCartItems();
    renderSubTotal();
}

//Render cart items
function renderCartItems(){
    cartElements.innerHTML = ""; //clear cart elements
    cart.forEach( (item) => {
        cartElements.innerHTML += `
            <div class="cart-item">
                <div class="item-info">
                    <img src="${item.imgSrc}" alt="${item.name}">
                    <h4>${item.name}</h4>
                </div>
                <div class="unit-price">
                    <small>$</small>${item.price}
                </div>
                <div class="units">
                    <button onclick="changeNumberOfUnits('minus',${item.id})"><div class="btn minus">-</div></button>
                    <div class="number">${item.numberOfUnits}</div>
                    <button onclick="changeNumberOfUnits('plus', ${item.id})"><div class="btn plus">+</div></button>
                </div>
            </div>
            `;

        });
}

//change numberOfUnits of an item
function changeNumberOfUnits(action, id){
    cart = cart.map( (item) => {

        let oldNumberOfUnits = item.numberOfUnits;

        if(item.id === id){
            oldNumberOfUnits--
        }else if(action === "plus"){
            oldNumberOfUnits++;
        }


        return item;
    })
}
