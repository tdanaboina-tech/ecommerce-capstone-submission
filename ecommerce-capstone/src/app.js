import { Router } from './router/router.js';
import { renderNavbar } from './components/Navbar.js';
import { renderCatalogView } from './components/CatalogView.js';
import { renderProductDetailView } from './components/ProductDetailView.js';
import { renderCartView } from './components/CartView.js';

const STORAGE_KEY = 'novastore_cart_v1';
let cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

const viewContainer = document.getElementById('app-view');

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  const totalItems = Object.values(cart).reduce((sum, n) => sum + n, 0);
  renderNavbar(totalItems);
}

function addToCart(productId) {
  cart[productId] = (cart[productId] || 0) + 1;
  saveCart();
}

function updateQty(productId, delta) {
  const next = (cart[productId] || 0) + delta;
  if (next <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = next;
  }
  saveCart();
  renderCartView(viewContainer, cart, updateQty, clearCart);
}

function clearCart() {
  cart = {};
  saveCart();
}

saveCart();

new Router(
  [
    {
      pattern: /^\/$/,
      handler: () => renderCatalogView(viewContainer, addToCart),
    },
    {
      pattern: /^\/product\/([a-z0-9-]+)$/,
      handler: ([id]) => renderProductDetailView(viewContainer, id, addToCart),
    },
    {
      pattern: /^\/cart$/,
      handler: () => renderCartView(viewContainer, cart, updateQty, clearCart),
    },
  ],
  () => {
    viewContainer.innerHTML = `
      <div class="empty-state">
        <h2>404 - Page Not Found</h2>
        <a href="#/" class="btn-primary">Return Home</a>
      </div>
    `;
  }
);
