import { PRODUCTS } from '../data/products.js';

export function renderCatalogView(container, onAddToCart) {
  const categories = ['All', ...new Set(PRODUCTS.map((p) => p.category))];

  container.innerHTML = `
    <section class="hero">
      <h1>Curated Tech Essentials</h1>
      <p>Modular architecture, zero-latency optimized assets, and instant client-side routing.</p>
    </section>

    <div class="toolbar">
      <div class="filter-pills" id="category-filters">
        ${categories
          .map(
            (cat, idx) =>
              `<button class="pill ${idx === 0 ? 'active' : ''}" data-category="${cat}">${cat}</button>`
          )
          .join('')}
      </div>
      <input type="search" id="catalog-search" placeholder="Search products..." aria-label="Search products" />
    </div>

    <div class="product-grid" id="product-grid"></div>
  `;

  const grid = container.querySelector('#product-grid');
  const searchInput = container.querySelector('#catalog-search');
  const filterButtons = container.querySelectorAll('.pill');
  let selectedCategory = 'All';

  function updateGrid() {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = PRODUCTS.filter((p) => {
      const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesQuery =
        p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query);
      return matchesCat && matchesQuery;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<p class="empty-state">No products match your filter criteria.</p>`;
      return;
    }

    grid.innerHTML = filtered
      .map(
        (product) => `
        <article class="card">
          <a href="#/product/${product.id}" class="card-img-link">
            <img src="${product.image}" alt="${product.name}" loading="lazy" width="400" height="260" />
          </a>
          <div class="card-body">
            <div class="card-meta">
              <span class="tag">${product.category}</span>
              <span class="rating">★ ${product.rating}</span>
            </div>
            <h2><a href="#/product/${product.id}">${product.name}</a></h2>
            <p class="card-desc">${product.description}</p>
            <div class="card-footer">
              <span class="price">$${product.price.toFixed(2)}</span>
              <button class="btn-primary" data-add-id="${product.id}">Add to Cart</button>
            </div>
          </div>
        </article>
      `
      )
      .join('');

    grid.querySelectorAll('[data-add-id]').forEach((btn) => {
      btn.addEventListener('click', () => onAddToCart(btn.dataset.addId));
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCategory = btn.dataset.category;
      updateGrid();
    });
  });

  searchInput.addEventListener('input', updateGrid);
  updateGrid();
}
