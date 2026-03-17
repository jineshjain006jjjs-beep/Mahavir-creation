// scripts.js

// A simple script to handle WhatsApp ordering and product management functionality.

// Product data example
data = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }
];

// Function to display products to the user
function displayProducts() {
    console.log('Available Products:');
    data.forEach(product => {
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`);
    });
}

// Function to handle ordering
function orderProduct(productId, quantity) {
    const product = data.find(p => p.id === productId);
    if (!product) {
        console.log('Product not found.');
        return;
    }
    const totalCost = product.price * quantity;
    console.log(`You ordered ${quantity} of ${product.name}. Total cost: $${totalCost}`);
}

// Function to start product ordering process
function startOrdering() {
    displayProducts();
    // Simulate ordering
    orderProduct(1, 2); // Example: Order 2 of Product 1
}

// Start the ordering process
startOrdering();