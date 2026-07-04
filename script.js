let cartCount = 0;

const products = [
    {id: 1, name: "iPhone 15 Pro", price: 129999, img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400"},
    {id: 2, name: "MacBook Air M3", price: 114900, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400"},
    {id: 3, name: "Sony Headphones", price: 29990, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"},
    {id: 4, name: "Samsung Watch", price: 32999, img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400"},
    {id: 5, name: "iPad Pro", price: 89900, img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400"},
    {id: 6, name: "Canon Camera", price: 55499, img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400"}
];

// Client-side routing - Task 5 requirement
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageName + 'Page').classList.add('active');
    if(pageName === 'products') loadProducts();
}

function loadProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}" loading="lazy">
            <h3>${p.name}</h3>
            <p>₹${p.price.toLocaleString('en-IN')}</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart() {
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
}

window.onload = () => loadProducts();
