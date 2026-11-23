// Product catalog with lightweight inline SVG data URIs (zero external image latency)
const createThumb = (bg, accent, label) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260" viewBox="0 0 400 260">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${bg}"/>
          <stop offset="100%" stop-color="${accent}"/>
        </linearGradient>
      </defs>
      <rect width="400" height="260" rx="16" fill="url(#g)"/>
      <circle cx="330" cy="50" r="70" fill="rgba(255,255,255,0.08)"/>
      <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle"
            fill="#ffffff" font-family="system-ui,sans-serif" font-size="22" font-weight="700">
        ${label}
      </text>
    </svg>`
  )}`;

export const PRODUCTS = [
  {
    id: 'aero-headphones',
    name: 'AeroPulse ANC Headphones',
    category: 'Audio',
    price: 149.99,
    rating: 4.8,
    stock: 18,
    image: createThumb('#0f172a', '#2563eb', 'AeroPulse ANC'),
    description: 'Studio-grade active noise cancellation with 40-hour battery life and spatial audio.'
  },
  {
    id: 'mech-keyboard',
    name: 'KeyCraft 75% Mechanical Keyboard',
    category: 'Peripherals',
    price: 119.00,
    rating: 4.9,
    stock: 12,
    image: createThumb('#1e1b4b', '#7c3aed', 'KeyCraft 75%'),
    description: 'Hot-swappable tactile switches, CNC aluminum frame, and per-key RGB backlight.'
  },
  {
    id: 'ultrawide-dock',
    name: 'VoltDock USB-C 12-in-1 Hub',
    category: 'Accessories',
    price: 79.50,
    rating: 4.6,
    stock: 25,
    image: createThumb('#064e3b', '#059669', 'VoltDock 12-in-1'),
    description: 'Dual 4K 60Hz HDMI output, 100W Power Delivery pass-through, and Gigabit Ethernet.'
  },
  {
    id: 'ergo-mouse',
    name: 'GlidePro Wireless Ergo Mouse',
    category: 'Peripherals',
    price: 64.00,
    rating: 4.7,
    stock: 30,
    image: createThumb('#31102f', '#db2777', 'GlidePro Mouse'),
    description: '8000 DPI optical sensor, ultra-light 62g chassis, and dual Bluetooth/2.4GHz modes.'
  },
  {
    id: 'smart-watch',
    name: 'ChronoFit AMOLED Smartwatch',
    category: 'Wearables',
    price: 189.00,
    rating: 4.8,
    stock: 9,
    image: createThumb('#172554', '#0284c7', 'ChronoFit Pro'),
    description: 'Always-on sapphire AMOLED display, dual-band GPS, and continuous SpO2 tracking.'
  },
  {
    id: 'gan-charger',
    name: 'NanoCharge 140W GaN Adapter',
    category: 'Accessories',
    price: 54.99,
    rating: 4.9,
    stock: 42,
    image: createThumb('#1f2937', '#d97706', 'NanoCharge 140W'),
    description: 'Compact Gallium Nitride fast charger with 3 USB-C PD 3.1 ports and thermal guard.'
  }
];
