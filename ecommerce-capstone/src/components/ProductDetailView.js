import { PRODUCTS } from '../data/products.js';

export function renderProductDetailView(container, productId, onAddToCart) {
  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>Product Not Found</h2>
        <a href="#/" class="btn-primary">Back to Catalog</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="detail-wrapper">
      <a href="#/" class="back-link">&larr; Back to Catalog</a>
      <div class="detail-grid">
        <img src="${product.image}" alt="${product.name}" class="detail-img" />
        <div class="detail-info">
          <span class="tag">${product.category}</span>
          <h1>${product.name}</h1>
          <p class="rating">★ ${product.rating} &bull; ${product.stock} in stock</p>
          <p class="detail-price">$${product.price.toFixed(2)}</p>
          <p class="detail-desc">${product.description}</p>
          <button id="detail-add-btn" class="btn-primary btn-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  `;

  container.querySelector('#detail-add-btn').addEventListener('click', () => {
    onAddToCart(product.id);
  });
}
