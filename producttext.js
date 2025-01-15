document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));
            const product = { name, price };

            // Add item to cart
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${name} has been added to the cart.`);
        });
    });
});
