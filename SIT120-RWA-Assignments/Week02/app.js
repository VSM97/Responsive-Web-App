//Selecting Elements
const productElements = document.querySelector(" .products");

//Rendering productcs
function renderProdcuts(){
    products.forEach( (product) => {
        productElements.innerHTML += `
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="./img/t1.png" alt="t-shirt 1">
                    </div>
                    <div class="desc">
                        <h2>T-shirt 1</h2>
                        <h2><small>$</small>10.00</h2>
                    </div>
                    <button class="addTocart" type="button">Add to cart</button>
                    </div>
                </div>
        `
    });
}

renderProdcuts();
