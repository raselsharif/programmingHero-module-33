
function productLoad() {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => displayProducts(data))
}

function displayProducts(products) {
    const productsArr = Object.values(products.products);
    const productContainer = document.getElementById('product-container');
    for (const product of productsArr) {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
        <h4>ID: ${product.id}</h4>
        <h3>Title: ${product.title}</h3>
        <p>Description: ${product.description}</p>
        <h5>Price: ${product.price} $</h5>
        <h2>Discount: ${product.discountPercentage}</h2>
        <p>Rating: ${product.rating}</p>
        <h3>Stock: ${product.stock}</h3>
        <h2>Brand: ${product.brand}</h2>
        <h3>Category: ${product.category}</h3>
        <img src="${product.thumbnail}" alt="image">
        `
        productContainer.appendChild(productDiv)
    }
}
productLoad();