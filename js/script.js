
  
document.addEventListener("DOMContentLoaded", function () {
    let cart = [];

    const addToCartButtons = document.querySelectorAll(".product button");

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const product = {
                id: index + 1,
                name: button.parentElement.querySelector("h2").textContent,
                price: parseFloat(button.parentElement.querySelector("p").textContent.slice(1)),
                image: button.parentElement.querySelector("img").src,
            };
            cart.push(product);
            updateCartCount();
            updateCartTotal();
        });
    });

    function updateCartCount() {
        const cartCount = document.getElementById("cart-count");
        cartCount.textContent = cart.length;
    }

    function updateCartTotal() {
        const cartTotal = document.getElementById("cart-total");
        const total = cart.reduce((acc, product) => acc + product.price, 0);
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    const cartCounter = document.querySelector(".cartcounter");
    cartCounter.addEventListener("click", function () {
        const cartItems = document.getElementById("cart-items");
        cartItems.innerHTML = "";

        cart.forEach((product) => {
            const item = document.createElement("div");
            item.classList.add("cart-item");
            item.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="cart-item-image" width="100px">
                <span>${product.name} - $${product.price}</span>
                <button class="remove-btn">Remove</button>
            `;
            cartItems.appendChild(item);
        });

        const removeButtons = document.querySelectorAll(".remove-btn");
        removeButtons.forEach((button, index) => {
            button.addEventListener("click", function () {
                cart.splice(index, 1);
                updateCartCount();
                updateCartTotal();
                updateCartItems();
            });
        });
    });
});




