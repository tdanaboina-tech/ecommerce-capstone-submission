# NovaStore — E-Commerce Product Catalog Capstone

## Architecture Overview
A modular Single-Page Application (SPA) built with native ES6 Modules, client-side routing, persistent cart state (`localStorage`), and zero external runtime dependencies.

### Folder Structure
```text
ecommerce-capstone/
├── index.html                    # Entry shell
├── vercel.json                   # SPA rewrite rules & immutable asset caching
├── package.json                  # Project scripts
├── build.js                      # Zero-dependency CSS minifier
└── src/
    ├── app.js                    # Application state & route initialization
    ├── router/
    │   └── router.js             # Regex-based client-side SPA router
    ├── components/
    │   ├── Navbar.js             # Persistent navigation & live cart counter
    │   ├── CatalogView.js        # Searchable & filterable product grid
    │   ├── ProductDetailView.js  # Dynamic route view (#/product/:id)
    │   └── CartView.js           # Cart state management & checkout
    ├── data/
    │   └── products.js           # Catalog dataset with inline SVG data-URI assets
    └── styles/
        └── main.css              # Responsive CSS Grid/Flexbox stylesheet
```

## Live Deployment Steps (Vercel / Netlify / Render)
1. Push the `ecommerce-capstone` folder to a GitHub repository.
2. **Vercel**: Import the repo at [vercel.com/new](https://vercel.com/new) -> Framework Preset: **Other** -> Output Directory: `.` -> Click **Deploy**.
3. **Netlify**: Drag and drop the `ecommerce-capstone` folder directly into [app.netlify.com/drop](https://app.netlify.com/drop) for an instant live URL.
4. **Render**: Create a **Static Site** pointing to your GitHub repo with Publish Directory `.`.
