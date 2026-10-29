# Webravex Real Estate | Ultra-Luxury Architectural Masterworks

A state-of-the-art, high-end web platform for ultra-luxury architectural curation, sovereign acquisitions, and master construction across India's prime economic corridors (Delhi NCR, Mumbai MMR, Bengaluru, Hyderabad).

---

## 🌟 Highlights & Key Features

### 1. Dual-Responsive 240-Frame Hero Canvas Animation
- **Desktop Experience**: 1920×1080 high-fidelity 240-frame architectural genesis sequence.
- **Mobile Experience**: 1080×1920 vertical sequence tailored for mobile viewports.
- **Scroll & Autoplay Dual Control**: Seamlessly scrubs forward and backward frame-by-frame with smooth inertia, plus an integrated autoplay toggle with live frame counter (`FRAME 001 / 240`).
- **Dynamic Asset Preloading & Memory Management**: Preloads batches of high-resolution WebP/JPEG frames with responsive fallback.

### 2. Glassmorphic Ultra-Luxury Header
- Translucent dark luxury glass bar (`bg-[#0F0E0D]/80` with `backdrop-blur-xl`) with gold trim.
- Responsive mobile drawer navigation with animated WhatsApp concierge desk.

### 3. Prime Typologies & Services Showcase
- Editorial architectural showcase of New Delhi's 7 sovereign asset verticals (Villas & Kothis, Travertine Mansions, Builder Floors, High-Rise Towers, Penthouse Sky Mansions, Farmhouses, and Plotted Domains).
- Fully responsive typographic scaling designed for both mobile screens and ultra-wide desktop monitors.

### 4. Interactive Properties Omnisearch Catalog
- **Functional Multi-Filter Search Engine**: Real-time searching across property titles, locations, typologies, and price points.
- **Dynamic Quick-Filter Badges**: Real-time counter badges that reflect active matching properties.
- **Zero-Latency Filtering**: Instant responsive updates with fallback empty-state handling.

### 5. Institutional Contact & Builder Desk
- Corporate Headquarters in Connaught Place, New Delhi and Worli, Mumbai.
- Direct Secretariat liaison and private viewing reservation workflows.

---

## 🛠️ Technology Stack

- **Core**: Vanilla HTML5, Modern ECMAScript (ES Modules), HTML5 `<canvas>` API
- **Styling**: Tailwind CSS with custom editorial typography
- **Typography**: Playfair Display, Cormorant Garamond, Plus Jakarta Sans, Inter
- **Tooling & Dev Server**: Vite (with network host sharing)
- **Asset Pipeline**: Dual-viewport multi-resolution animation sequences (1920×1080 & 1080×1920)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/rahulahirwar1604/Real_Estate_Luxury.git

# Navigate to the project directory
cd Real_Estate_Luxury

# Install dependencies
npm install
```

### Development Server

Run the development server locally:

```bash
npm run dev
# or
npx vite --host
```

Access the application in your browser:
- **Local**: `http://localhost:5173/`
- **Network**: `http://<your-ip>:5173/` (accessible from mobile devices on the same Wi-Fi)

---

## 📁 Project Structure

```
Real_Estate_Luxury/
├── index.html                 # Homepage with dual-frame hero canvas animation
├── services.html              # Prime Real Estate Services & 7 Typologies
├── properties.html            # Properties catalog with interactive search engine
├── contact.html               # Builder desk & corporate headquarters
├── build_website.cjs          # Site build & templating pipeline
├── vite.config.js             # Vite configuration
├── package.json               # Node.js dependencies & scripts
├── public/
│   ├── frames/                # Desktop 240-frame sequence (1920x1080)
│   ├── frames-mobile/         # Mobile 240-frame sequence (1080x1920)
│   └── images/                # Local verified property assets
└── src/
    ├── hero-animation.js      # Dual-device frame-scrubbing animation engine
    ├── audio.js               # Ambient sound controller
    ├── main.js                # Global interactions
    └── style.css              # Custom styling & scrollbar utilities
```

---

## 📄 License

Webravex Real Estate &copy; 2025. All rights reserved.
