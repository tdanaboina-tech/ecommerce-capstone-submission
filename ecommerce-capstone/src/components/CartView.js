import { PRODUCTS } from '../data/products.js';

export function renderCartView(container, cart, onUpdateQty, onClearCart) {
  const entries = Object.entries(cart);

  if (entries.length === 0) {
    container.innerHTML = `
      <section class="empty-state">
        <h2>Your Cart is Empty</h2>
        <p>Explore the catalog to add items to your order.</p>
        <a href="#/" class="btn-primary">Browse Products</a>
      </section>
    `;
    return;
  }

  let subtotal = 0;
  const rowsHtml = entries
    .map(([id, qty]) => {
      const product = PRODUCTS.find((p) => p.id === id);
      if (!product) return '';
      const lineTotal = product.price * qty;
      subtotal += lineTotal;
      return `
        <div class="cart-row">
          <div>
            <h3>${product.name}</h3>
            <span class="muted">$${product.price.toFixed(2)} each</span>
          </div>
          <div class="qty-controls">
            <button data-dec="${id}" aria-label="Decrease quantity">-</button>
            <span>${qty}</span>
            <button data-inc="${id}" aria-label="Increase quantity">+</button>
          </div>
          <strong>$${lineTotal.toFixed(2)}</strong>
        </div>
      `;
    })
    .join('');

  container.innerHTML = `
    <section class="cart-panel">
      <h1>Shopping Cart</h1>
      <div class="cart-list">${rowsHtml}</div>
      <div class="cart-summary">
        <span>Total: <strong>$${subtotal.toFixed(2)}</strong></span>
        <button id="checkout-btn" class="btn-primary">Complete Checkout</button>
      </div>
    </section>
  `;

  container.querySelectorAll('[data-inc]').forEach((btn) =>
    btn.addEventListener('click', () => onUpdateQty(btn.dataset.inc, 1))
  );
  container.querySelectorAll('[data-dec]').forEach((btn) =>
    btn.addEventListener('click', () => onUpdateQty(btn.dataset.dec, -1))
  );
  container.querySelector('#checkout-btn').addEventListener('click', () => {
    onClearCart();
    container.innerHTML = `
      <section class="empty-state">
        <h2>Order Confirmed!</h2>
        <p>Thank you for shopping with NovaStore.</p>
        <a href="#/" class="btn-primary">Continue Shopping</a>
      </section>
    `;
  });
}
