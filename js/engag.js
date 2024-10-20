import { data } from "./data.js";

const engagementRow = document.querySelector('.engagmentRow');

function displayEngagementData() {
    let container = '';
    for (const ring of data.engagement_rings) {
        container += `
            <div class="col-lg-3 col-md-6">
                <div class="card mb-4 px-2 pb-2 text-center">
                    <img src="${ring.image_url}" class="card-img-top mt-3 w-35 mx-auto" alt="${ring.name}">
                    <div class="card-body">
                        <p class="card-text">${ring.name}</p>
                        <h6 class="card-price">$ ${ring.price}</h6>
                        <a href="#" class="btn add-to-cart" data-product-id="${ring.id}">Add To Cart</a>
                    </div>
                </div>
            </div>
        `;
    }
    engagementRow.innerHTML = container;
}

function setupAddToCartButtons() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const productId = parseInt(this.getAttribute('data-product-id'));
            addToCart(productId);
        });
    });
}

function addToCart(productId) {
    const product = data.engagement_rings.find(p => p.id === productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    } else {
        console.error('Product not found');
    }
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCountElement.innerText = cart.length;
}

window.onload = function () {
    displayEngagementData();
    setupAddToCartButtons();
    updateCartCount();
};
