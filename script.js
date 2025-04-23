function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({ behavior:"smooth" });
}
function scrollToMenu() {
    const about = document.getElementById('about');
    menuSection.scrollIntoView({ behavior:"smooth" });
}
let cart = [];

// Function to toggle cart visibility
function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.style.display = cartElement.style.display === 'none' ? 'block' : 'none';
}

// Function to add products to the cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    displayCart();
}

// Function to display the cart items
function displayCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    let totalPrice = 0;

    // Clear existing items
    cartItemsContainer.innerHTML = '';

    // If the cart is empty, show a message
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('totalPrice').innerText = '0';
        return;
    }

    // Display all the items in the cart
    cart.forEach((item, index) => {
        totalPrice += item.price;

        // Create a new div for each item
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} - Rs ${item.price}</span>
            <span class="remove-item" onclick="removeFromCart(${index})">Remove</span>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Update the total price
    document.getElementById('totalPrice').innerText = totalPrice;
}

// Function to remove items from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item at the specified index
    displayCart(); // Refresh the cart display
}

// Function to handle checkout
function Buynow()
{
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    // Calculate the total price
    let totalPrice = cart.reduce((total, item) => total + item.price, 0);

    // Get the message from the textarea
    const message = document.getElementById('message').value;

    // Display the total price and message
    alert(`Your total is Rs ${totalPrice}. Thank you for your purchase! Your message: "${message}"`);

    // Clear the cart and message after checkout
    cart = [];
    document.getElementById('message').value = '';
    displayCart();
}