export function renderNavbar(cartCount) {
  const nav = document.getElementById('app-navbar');
  nav.innerHTML = `
    <nav class="navbar" aria-label="Main navigation">
      <a href="#/" class="brand">Nova<span>Store</span></a>
      <div class="nav-links">
        <a href="#/" class="nav-link">Catalog</a>
        <a href="#/cart" class="nav-link cart-pill">
          Cart <span id="cart-badge">${cartCount}</span>
        </a>
      </div>
    </nav>
  `;
}
