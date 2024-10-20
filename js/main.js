// variables
const dimandRow = document.querySelector('.dimandRow');

// Import data
import { data } from "./data.js";

// Initialize cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display diamond data
function displyDiamondData() {
    let container = '';
    data.diamonds.forEach(diamond => {
        container += `
            <div class="col-lg-3 col-md-6">
                <div class="card mb-4 px-2 pb-2 text-center">
                    <img src="${diamond.url}" class="card-img-top mt-3 w-25 mx-auto" alt="${diamond.title}">
                    <div class="card-body">
                        <p class="card-text">${diamond.title}</p>
                        <h6 class="card-price">$ ${diamond.price}</h6>
                        <a href="#" class="btn add-to-cart" data-product-id="${diamond.id}">Add To Cart</a>
                    </div>
                </div>
            </div>
        `;
    });
    dimandRow.innerHTML = container;
}

// Setup add-to-cart buttons
function setupAddToCartButtons() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const productId = parseInt(this.getAttribute('data-product-id'));
            addToCart(productId);
        });
    });
}

// Add item to cart
function addToCart(productId) {
    const product = data.diamonds.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    } else {
        console.error('Product not found');
    }
}

// Update cart count
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.innerText = cart.length;
    }
}

// Initialize page
window.onload = function () {
    displyDiamondData();
    setupAddToCartButtons();
    updateCartCount();
};
