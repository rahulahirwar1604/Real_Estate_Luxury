const fs = require('fs');
const path = require('path');

const rootDir = '/Users/rahulahirwar/Downloads/Real_Estate_Luxury';
const stepFiles = {
  home: '/Users/rahulahirwar/.gemini/antigravity-ide/brain/e613fea2-9013-499f-b90d-aad2483da890/.system_generated/steps/98/output.txt',
  properties: '/Users/rahulahirwar/.gemini/antigravity-ide/brain/e613fea2-9013-499f-b90d-aad2483da890/.system_generated/steps/100/output.txt',
  services: '/Users/rahulahirwar/.gemini/antigravity-ide/brain/e613fea2-9013-499f-b90d-aad2483da890/.system_generated/steps/102/output.txt',
  contact: '/Users/rahulahirwar/.gemini/antigravity-ide/brain/e613fea2-9013-499f-b90d-aad2483da890/.system_generated/steps/104/output.txt'
};

function readHtml(stepFile) {
  const raw = fs.readFileSync(stepFile, 'utf8');
  return JSON.parse(raw).html;
}

// 1. Glassy Blurred Navbar for Homepage with Mobile/Tablet Hamburger Drawer
function generateHomepageGlassyNavbar() {
  const navLinks = [
    { name: 'Home', href: 'index.html', active: true },
    { name: 'Services', href: 'services.html', active: false },
    { name: 'Properties', href: 'properties.html', active: false },
    { name: 'Contact', href: 'contact.html', active: false }
  ];

  const linksHtml = navLinks.map(link => {
    if (link.active) {
      return `<a href="${link.href}" class="text-brand-gold font-semibold border-b-2 border-brand-gold pb-0.5">${link.name}</a>`;
    }
    return `<a href="${link.href}" class="text-brand-cream/90 hover:text-brand-gold transition-colors pb-0.5">${link.name}</a>`;
  }).join('\n        ');

  return `<!-- BEGIN: MainHeader -->
<header class="sticky top-0 z-50 bg-[#0F0E0D]/80 backdrop-blur-xl border-b border-brand-gold/25 shadow-2xl transition-all duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
    <a href="index.html" class="flex items-center space-x-3 sm:space-x-4 group text-decoration-none">
      <div class="w-9 h-9 bg-brand-charcoal text-brand-gold flex items-center justify-center font-serif text-lg font-bold border border-brand-gold/60 shadow-sm rounded-sm group-hover:border-brand-gold transition-colors">W</div>
      <div class="flex items-center space-x-2 sm:space-x-3">
        <span class="font-serif tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm uppercase font-semibold text-brand-cream group-hover:text-brand-gold transition-colors">Webravex Real Estate</span>
        <span class="h-3.5 w-[1px] bg-brand-gold/40 hidden sm:inline-block"></span>
        <span class="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-gold font-medium hidden sm:inline-block">Private Office</span>
      </div>
    </a>
    
    <nav class="hidden md:flex items-center gap-8 lg:gap-12 ml-auto mr-6 lg:mr-8 text-xs uppercase tracking-widest font-medium">
      ${linksHtml}
    </nav>
    
    <div class="flex items-center space-x-3 sm:space-x-5">
      <a aria-label="Connect on WhatsApp" class="relative group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-charcoal hover:bg-brand-obsidian border border-brand-gold/40 text-brand-gold transition-all shadow-sm hover:border-brand-gold" href="https://wa.me/912269885000" target="_blank">
        <span class="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-black animate-pulse"></span>
        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"></path></svg>
      </a>
      <a href="contact.html" class="hidden lg:inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-widest font-semibold text-brand-obsidian bg-brand-gold hover:bg-brand-gold-light rounded-sm transition-all shadow-sm">
        Private Inquiries
      </a>
      <!-- Mobile / Tablet Hamburger Toggle Button -->
      <button type="button" onclick="document.getElementById('mobileNavDrawer').classList.toggle('hidden')" aria-label="Toggle Navigation Menu" class="md:hidden flex items-center justify-center w-9 h-9 rounded-sm bg-black/60 border border-brand-gold/40 text-brand-gold focus:outline-none cursor-pointer">
        <svg class="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
  </div>

  <!-- Mobile / Tablet Navigation Drawer -->
  <div id="mobileNavDrawer" class="hidden md:hidden px-6 pt-3 pb-6 bg-[#0F0E0D]/98 backdrop-blur-2xl border-t border-brand-gold/20 flex flex-col space-y-4 text-xs uppercase tracking-widest font-medium">
    <a href="index.html" class="text-brand-gold font-semibold py-1">Home</a>
    <a href="services.html" class="text-brand-cream/90 hover:text-brand-gold transition-colors py-1">Services</a>
    <a href="properties.html" class="text-brand-cream/90 hover:text-brand-gold transition-colors py-1">Properties</a>
    <a href="contact.html" class="text-brand-cream/90 hover:text-brand-gold transition-colors py-1">Contact</a>
  </div>
</header>
<!-- END: MainHeader -->`;
}

// 2. Exact Stitch Header for Services, Properties, and Contact Pages with Mobile/Tablet Hamburger Drawer
function generateStitchHeader(activePage) {
  const isServices = activePage === 'services';
  const isProperties = activePage === 'properties';
  const isContact = activePage === 'contact';

  const servicesClass = isServices ? 'text-primary font-semibold border-b-2 border-primary pb-0.5' : 'hover:text-primary transition-colors pb-0.5';
  const propertiesClass = isProperties ? 'text-primary font-semibold border-b-2 border-primary pb-0.5' : 'hover:text-primary transition-colors pb-0.5';
  const contactClass = isContact ? 'text-primary font-semibold border-b-2 border-primary pb-0.5' : 'hover:text-primary transition-colors pb-0.5';

  return `<header class="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EADFCF]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
    <a href="index.html" class="flex items-center space-x-3 sm:space-x-4">
      <div class="w-9 h-9 bg-inverse-surface text-primary-fixed flex items-center justify-center font-title-editorial text-lg font-bold border border-tertiary-container shadow-sm rounded-sm">W</div>
      <div class="flex items-center space-x-2 sm:space-x-3">
        <span class="font-title-editorial tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm uppercase font-semibold text-on-surface">Webravex Real Estate</span>
        <span class="h-3.5 w-[1px] bg-outline-variant hidden sm:inline-block"></span>
        <span class="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-tertiary font-medium hidden sm:inline-block">Private Office</span>
      </div>
    </a>
    
    <nav class="hidden md:flex items-center gap-8 lg:gap-12 ml-auto mr-6 lg:mr-8 text-xs uppercase tracking-widest font-medium text-on-surface" data-active-classes="text-primary font-semibold border-b-2 border-primary pb-0.5">
      <a class="${servicesClass}" data-path="services" href="services.html">Services</a>
      <a class="${propertiesClass}" data-path="properties" href="properties.html">Properties</a>
      <a class="hover:text-primary transition-colors pb-0.5" data-path="why-us" href="index.html#promise">Why Us</a>
      <a class="hover:text-primary transition-colors pb-0.5" data-path="reviews" href="index.html#reviews">Reviews</a>
      <a class="${contactClass}" data-path="contact" href="contact.html">Contact</a>
    </nav>
    
    <div class="flex items-center space-x-3 sm:space-x-5">
      <a aria-label="Connect on WhatsApp" class="relative group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-container hover:bg-surface-container-high border border-outline-variant text-on-surface transition-all shadow-sm hover:border-primary" href="https://wa.me/912269885000" target="_blank">
        <span class="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse"></span>
        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-on-surface group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"></path></svg>
      </a>
      <!-- Mobile / Tablet Hamburger Toggle Button -->
      <button type="button" onclick="document.getElementById('stitchMobileNavDrawer').classList.toggle('hidden')" aria-label="Toggle Navigation Menu" class="md:hidden flex items-center justify-center w-9 h-9 rounded-sm bg-surface-container border border-outline-variant text-on-surface focus:outline-none cursor-pointer">
        <svg class="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
  </div>

  <!-- Mobile / Tablet Navigation Drawer -->
  <div id="stitchMobileNavDrawer" class="hidden md:hidden px-6 pt-3 pb-6 bg-[#FAF7F2]/98 backdrop-blur-xl border-t border-[#EADFCF] flex flex-col space-y-4 text-xs uppercase tracking-widest font-medium text-on-surface">
    <a href="index.html" class="hover:text-primary transition-colors py-1">Home</a>
    <a href="services.html" class="${isServices ? 'text-primary font-semibold' : 'hover:text-primary'} transition-colors py-1">Services</a>
    <a href="properties.html" class="${isProperties ? 'text-primary font-semibold' : 'hover:text-primary'} transition-colors py-1">Properties</a>
    <a href="index.html#promise" class="hover:text-primary transition-colors py-1">Why Us</a>
    <a href="index.html#reviews" class="hover:text-primary transition-colors py-1">Reviews</a>
    <a href="contact.html" class="${isContact ? 'text-primary font-semibold' : 'hover:text-primary'} transition-colors py-1">Contact</a>
  </div>
</header>`;
}

// Frame Animation Hero Section
const heroAnimationSection = `<!-- BEGIN: HeroFrameAnimationSection -->
<section class="relative bg-brand-obsidian" id="heroAnimationTrack" style="height: 380vh;">
  <div class="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
    <!-- 240 Frame Canvas -->
    <canvas id="heroAnimationCanvas" class="w-full h-full block object-cover"></canvas>
    
    <!-- Cinematic Gradients -->
    <div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-brand-obsidian via-transparent to-brand-obsidian/50"></div>
    <div class="absolute inset-0 pointer-events-none bg-gradient-to-r from-brand-obsidian/80 via-brand-obsidian/20 to-transparent"></div>

    <!-- Pinned Luxury Narrative Overlay -->
    <div class="absolute inset-0 flex flex-col justify-between p-4 sm:p-12 lg:p-16 pointer-events-none z-10">
      
      <!-- Top Row Badge -->
      <div class="flex items-center justify-between">
        <div class="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-brand-gold/40 shadow-lg">
          <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="text-[9px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.25em] text-brand-gold font-medium">Architectural Masterwork Genesis</span>
        </div>
        
        <div class="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-brand-gold/30 text-[9px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest text-brand-gold shadow-lg">
          <span id="heroFrameCounter">FRAME 001 / 240</span>
        </div>
      </div>

      <!-- Headline & Subtitle -->
      <div class="max-w-3xl">
        <span class="font-cormorant text-base sm:text-3xl lg:text-4xl italic text-brand-gold block mb-1 sm:mb-2">From Groundwork to Sovereign Prestige</span>
        <h1 class="font-serif text-2xl sm:text-5xl lg:text-6xl text-brand-cream font-normal tracking-tight leading-tight sm:leading-[1.1] drop-shadow-xl">
          Villa Solaria
        </h1>
        <p class="mt-2 sm:mt-4 text-[10.5px] sm:text-sm uppercase tracking-wider sm:tracking-[0.25em] text-brand-cream/80 max-w-xl font-light leading-relaxed">
          240-Frame Interactive Sequence &bull; Scroll to construct the cantilevered residence from bedrock foundation to twilight illumination.
        </p>
        
        <div class="mt-4 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-4 pointer-events-auto">
          <a href="properties.html" class="inline-flex items-center justify-center px-3.5 sm:px-6 py-2 sm:py-3 rounded-sm bg-brand-gold hover:bg-brand-gold-light text-brand-obsidian text-[10.5px] sm:text-xs uppercase tracking-widest font-semibold transition-all shadow-lg hover:shadow-brand-gold/30">
            Explore Properties
          </a>
          <a href="contact.html" class="inline-flex items-center justify-center px-3.5 sm:px-6 py-2 sm:py-3 rounded-sm bg-black/60 backdrop-blur-md hover:bg-white/10 text-brand-cream border border-brand-gold/40 text-[10.5px] sm:text-xs uppercase tracking-widest font-medium transition-all">
            Private Viewing
          </a>
          <button id="heroPlayBtn" type="button" class="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-sm bg-black/60 backdrop-blur-md hover:bg-white/10 text-brand-gold border border-brand-gold/40 text-[10.5px] sm:text-xs uppercase tracking-widest font-medium transition-all cursor-pointer">
            <svg id="heroPlayIcon" class="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            <span id="heroPlayText">Autoplay</span>
          </button>
        </div>
      </div>

      <!-- Bottom spacer -->
      <div></div>

    </div>
  </div>
</section>
<!-- END: HeroFrameAnimationSection -->`;

// 1. Process Home Page
let homeHtml = readHtml(stepFiles.home);

// Add hide-scrollbar utility styles to head
const scrollbarStyles = `
<style data-purpose="mobile-horizontal-scroll">
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
</style>
`;
homeHtml = homeHtml.replace('</head>', `${scrollbarStyles}\n</head>`);

homeHtml = homeHtml.replace(/<!-- BEGIN: MainHeader -->[\s\S]*?<!-- END: MainHeader -->/, generateHomepageGlassyNavbar());
homeHtml = homeHtml.replace(/<!-- BEGIN: HeroSection -->[\s\S]*?<!-- END: HeroSection -->/, heroAnimationSection);
homeHtml = homeHtml.replace('</body>', '<script type="module" src="/src/hero-animation.js"></script>\n</body>');
homeHtml = homeHtml.replace(/href="#services"/g, 'href="services.html"');
homeHtml = homeHtml.replace(/href="#developments"/g, 'href="properties.html"');
homeHtml = homeHtml.replace(/href="#contact"/g, 'href="contact.html"');

// 1.0 PERFORMANCE METRICS: Responsive mobile grid and font scaling
homeHtml = homeHtml.replace(
  '<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">',
  '<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">'
);
homeHtml = homeHtml.replace(
  '<div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">',
  '<div class="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6">'
);
homeHtml = homeHtml.replace(
  /<div class="bg-white p-6 rounded-xl border border-\[#E9DFD3\] shadow-sm hover:shadow-md transition-shadow">/g,
  '<div class="bg-white p-3.5 sm:p-6 rounded-lg sm:rounded-xl border border-[#E9DFD3] shadow-sm hover:shadow-md transition-shadow">'
);
homeHtml = homeHtml.replace(
  /<span class="text-\[10px\] uppercase font-bold tracking-wider text-brand-gold-dark block mb-2">/g,
  '<span class="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-brand-gold-dark block mb-1 sm:mb-2">'
);
homeHtml = homeHtml.replace(
  /<div class="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal">/g,
  '<div class="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-brand-charcoal leading-tight">'
);
homeHtml = homeHtml.replace(
  /<p class="text-\[11px\] text-\[#7E7469\] mt-1 leading-snug">/g,
  '<p class="text-[9.5px] sm:text-[11px] text-[#7E7469] mt-0.5 sm:mt-1 leading-tight sm:leading-snug">'
);

// 1.1 FLAGSHIP PROJECTS: Compact & sleek horizontal scroll on mobile (< md)
// Section header scaling on mobile
homeHtml = homeHtml.replace(
  '<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"><div class="flex flex-col md:flex-row md:items-end justify-between mb-12"><div><div class="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] font-bold text-[#9E8363] mb-2"><span class="">•</span><span class="">RERA Registered Masterworks</span><span class="">•</span><span class="">Q4 2025 Handover</span></div><h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal">Flagship Projects</h2></div></div>',
  '<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24"><div class="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-8 md:mb-12"><div><h2 class="text-2xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal">Flagship Projects</h2></div></div>'
);

homeHtml = homeHtml.replace(
  '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">',
  `<div class="md:hidden flex items-center justify-between text-[10px] text-[#9E8363] font-medium tracking-wider uppercase mb-1.5">
    <span>Flagship Residences</span>
    <span class="flex items-center gap-1 font-semibold">Swipe &rarr;</span>
  </div>
  <div class="flex overflow-x-auto pb-3 gap-3 sm:gap-6 scroll-smooth snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:snap-none hide-scrollbar">`
);

homeHtml = homeHtml.replace(
  /<div class="bg-\[#FBF8F4\] border border-\[#E8DED1\] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">/g,
  '<div class="flex-shrink-0 w-[62vw] sm:w-[260px] max-w-[245px] snap-center md:w-auto md:max-w-none md:flex-shrink bg-[#FBF8F4] border border-[#E8DED1] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">'
);

// Scale down image aspect ratio on mobile
homeHtml = homeHtml.replace(
  /<div class="relative aspect-\[4\/3\] overflow-hidden bg-stone-900">/g,
  '<div class="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-stone-900">'
);

// Scale down Flagship card inner content on mobile
homeHtml = homeHtml.replace(
  /<div class="p-6"><h3 class="text-xl font-serif font-semibold text-brand-charcoal mb-2">/g,
  '<div class="p-3 sm:p-5 md:p-6"><h3 class="text-sm sm:text-lg md:text-xl font-serif font-semibold text-brand-charcoal mb-1 sm:mb-2 truncate sm:whitespace-normal">'
);

homeHtml = homeHtml.replace(
  /<p class="text-xs text-\[#7A7065\] leading-relaxed line-clamp-2 mb-6">/g,
  '<p class="text-[11px] sm:text-xs text-[#7A7065] leading-snug sm:leading-relaxed line-clamp-2 mb-2 sm:mb-4">'
);

homeHtml = homeHtml.replace(
  /<div class="grid grid-cols-4 gap-2 border-y border-\[#ECE2D5\] py-3 text-center">/g,
  '<div class="grid grid-cols-4 gap-1 sm:gap-2 border-y border-[#ECE2D5] py-1.5 sm:py-2.5 md:py-3 text-center">'
);

homeHtml = homeHtml.replace(
  /<span class="block text-sm font-semibold text-brand-charcoal">/g,
  '<span class="block text-xs sm:text-sm font-semibold text-brand-charcoal">'
);

homeHtml = homeHtml.replace(
  /<span class="text-\[9px\] uppercase tracking-widest text-\[#9C8F80\]">/g,
  '<span class="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#9C8F80]">'
);

homeHtml = homeHtml.replace(
  /<div class="p-6 pt-0 space-y-2">/g,
  '<div class="p-3 sm:p-5 md:p-6 pt-0 sm:pt-0 md:pt-0 space-y-1.5 sm:space-y-2">'
);

homeHtml = homeHtml.replace(
  /<button class="bg-\[#F2ECE3\] hover:bg-\[#E8DFD3\] text-brand-charcoal text-\[11px\] font-semibold py-2\.5 rounded-lg flex items-center justify-center space-x-1\.5 transition-colors">/g,
  '<button class="bg-[#F2ECE3] hover:bg-[#E8DFD3] text-brand-charcoal text-[10px] sm:text-[11px] font-semibold py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg flex items-center justify-center space-x-1 sm:space-x-1.5 transition-colors">'
);

homeHtml = homeHtml.replace(
  /<button class="w-full bg-\[#EADDC9\] hover:bg-\[#E0D0B9\] text-brand-charcoal text-\[11px\] font-semibold py-2\.5 rounded-lg uppercase tracking-wider transition-colors flex items-center justify-center space-x-1\.5">/g,
  '<button class="w-full bg-[#EADDC9] hover:bg-[#E0D0B9] text-brand-charcoal text-[10px] sm:text-[11px] font-semibold py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg uppercase tracking-wider transition-colors flex items-center justify-center space-x-1 sm:space-x-1.5">'
);

// 1.2 REVIEWS SECTION: Compact & sleek horizontal scroll on mobile (< md)
// Section header scaling on mobile
homeHtml = homeHtml.replace(
  '<section id="reviews" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-[#E5DACD]">',
  '<section id="reviews" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 border-t border-[#E5DACD]">'
);

homeHtml = homeHtml.replace(
  '<div class="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">',
  '<div class="flex flex-col lg:flex-row lg:items-end justify-between mb-4 sm:mb-8 md:mb-12 gap-4 sm:gap-6">'
);

homeHtml = homeHtml.replace(
  '<h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-[1.15]">',
  '<h2 class="text-2xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-[1.15]">'
);

// Google Rating Summary Badge scaling on mobile
homeHtml = homeHtml.replace(
  '<div class="bg-white border border-[#D9CDBF] rounded-2xl p-5 shadow-sm flex items-center justify-between gap-6 flex-shrink-0">',
  '<div class="bg-white border border-[#D9CDBF] rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-sm flex items-center justify-between gap-3 sm:gap-6 flex-shrink-0">'
);

homeHtml = homeHtml.replace(
  '<div class="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E5DACD] flex items-center justify-center shadow-inner flex-shrink-0">',
  '<div class="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#FAF7F2] border border-[#E5DACD] flex items-center justify-center shadow-inner flex-shrink-0">'
);

homeHtml = homeHtml.replace(
  '<svg class="w-7 h-7" viewBox="0 0 24 24">',
  '<svg class="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24">'
);

homeHtml = homeHtml.replace(
  '<span class="text-2xl font-serif font-bold text-brand-charcoal leading-none">4.9</span>',
  '<span class="text-lg sm:text-2xl font-serif font-bold text-brand-charcoal leading-none">4.9</span>'
);

homeHtml = homeHtml.replace(
  '<div class="flex text-amber-500 space-x-0.5 text-sm">',
  '<div class="flex text-amber-500 space-x-0.5 text-xs sm:text-sm">'
);

homeHtml = homeHtml.replace(
  '<div class="text-[11px] font-semibold text-[#61574C] mt-1">480+ Verified Google Reviews</div>',
  '<div class="text-[9.5px] sm:text-[11px] font-semibold text-[#61574C] mt-0.5 sm:mt-1">480+ Verified Google Reviews</div>'
);

homeHtml = homeHtml.replace(
  '<div class="text-[10px] text-[#8F7E6B]">Delhi NCR • Mumbai MMR • South Metros</div>',
  '<div class="text-[8.5px] sm:text-[10px] text-[#8F7E6B]">Delhi NCR • Mumbai MMR • South Metros</div>'
);

homeHtml = homeHtml.replace(
  '<a href="https://maps.google.com" target="_blank" class="bg-[#8E4424] hover:bg-[#793A1E] text-white text-[11px] font-semibold px-4 py-2.5 rounded-lg uppercase tracking-wider flex items-center space-x-1.5 transition-colors shadow-sm whitespace-nowrap">',
  '<a href="https://maps.google.com" target="_blank" class="bg-[#8E4424] hover:bg-[#793A1E] text-white text-[9.5px] sm:text-[11px] font-semibold px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-md sm:rounded-lg uppercase tracking-wider flex items-center space-x-1 sm:space-x-1.5 transition-colors shadow-sm whitespace-nowrap">'
);

// Reviews 4-Card Grid to Compact Carousel
homeHtml = homeHtml.replace(
  '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">',
  `<div class="md:hidden flex items-center justify-between text-[10px] text-[#9E8363] font-medium tracking-wider uppercase mb-1.5">
    <span>Client Endorsements</span>
    <span class="flex items-center gap-1 font-semibold">Swipe &rarr;</span>
  </div>
  <div class="flex overflow-x-auto pb-3 gap-3 sm:gap-5 scroll-smooth snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0 md:snap-none hide-scrollbar">`
);

homeHtml = homeHtml.replace(
  /<div class="bg-\[#FBF8F4\] border border-\[#E8DED1\] rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group">/g,
  '<div class="flex-shrink-0 w-[58vw] sm:w-[230px] max-w-[225px] snap-center md:w-auto md:max-w-none md:flex-shrink bg-[#FBF8F4] border border-[#E8DED1] rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group">'
);

// Scale down Google Verified header
homeHtml = homeHtml.replace(
  /<div class="flex items-center justify-between pb-3 border-b border-\[#ECE2D5\] mb-4">/g,
  '<div class="flex items-center justify-between pb-2 sm:pb-3 border-b border-[#ECE2D5] mb-2 sm:mb-4">'
);

homeHtml = homeHtml.replace(
  /<span class="text-\[10px\] uppercase font-bold tracking-wider text-\[#8F7E6B\]">Google Verified<\/span>/g,
  '<span class="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-[#8F7E6B]">Google Verified</span>'
);

// Scale down review card inner avatars for both types
homeHtml = homeHtml.replace(
  /<div class="w-10 h-10 rounded-full bg-\[#EADDC9\] text-\[#71361A\] font-serif font-bold text-sm flex items-center justify-center border border-\[#D9CDBF\]">/g,
  '<div class="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#EADDC9] text-[#71361A] font-serif font-bold text-[10px] sm:text-xs md:text-sm flex items-center justify-center border border-[#D9CDBF]">'
);

homeHtml = homeHtml.replace(
  /<div class="w-10 h-10 rounded-full bg-\[#ECE4D8\] text-brand-charcoal font-serif font-bold text-sm flex items-center justify-center border border-\[#D9CDBF\]">/g,
  '<div class="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#ECE4D8] text-brand-charcoal font-serif font-bold text-[10px] sm:text-xs md:text-sm flex items-center justify-center border border-[#D9CDBF]">'
);

homeHtml = homeHtml.replace(
  /<div class="flex items-center space-x-3 mb-3">/g,
  '<div class="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">'
);

homeHtml = homeHtml.replace(
  /<h4 class="text-xs font-serif font-bold text-brand-charcoal">/g,
  '<h4 class="text-[11px] sm:text-xs font-serif font-bold text-brand-charcoal truncate">'
);

homeHtml = homeHtml.replace(
  /<span class="text-\[9px\] uppercase tracking-wider font-semibold text-\[#8E4424\] block">/g,
  '<span class="text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold text-[#8E4424] block truncate">'
);

homeHtml = homeHtml.replace(
  /<div class="flex text-amber-500 space-x-0\.5 text-xs mb-3">/g,
  '<div class="flex text-amber-500 space-x-0.5 text-[10px] sm:text-xs mb-1.5 sm:mb-3">'
);

homeHtml = homeHtml.replace(
  /<h5 class="text-xs font-serif font-bold text-brand-charcoal mb-2">/g,
  '<h5 class="text-[10.5px] sm:text-xs font-serif font-bold text-brand-charcoal mb-1 sm:mb-2 leading-snug line-clamp-2">'
);

homeHtml = homeHtml.replace(
  /<p class="text-xs text-\[#63574A\] leading-relaxed font-light mb-4">/g,
  '<p class="text-[10.5px] sm:text-xs text-[#63574A] leading-snug sm:leading-relaxed font-light mb-2.5 sm:mb-4 line-clamp-3 sm:line-clamp-none">'
);

// Scale down review card footer
homeHtml = homeHtml.replace(
  /<div class="pt-3 border-t border-\[#ECE2D5\]">/g,
  '<div class="pt-2 sm:pt-3 border-t border-[#ECE2D5]">'
);

homeHtml = homeHtml.replace(
  /<div class="text-\[10px\] font-semibold text-brand-charcoal truncate mb-1\.5">/g,
  '<div class="text-[9px] sm:text-[10px] font-semibold text-brand-charcoal truncate mb-0.5 sm:mb-1.5">'
);

homeHtml = homeHtml.replace(
  /<div class="flex items-center text-\[10px\] text-\[#7E7469\]">/g,
  '<div class="flex items-center text-[8.5px] sm:text-[10px] text-[#7E7469]">'
);

homeHtml = homeHtml.replace(
  /<svg class="w-3 h-3 text-\[#8E4424\] mr-1" fill="currentColor" viewBox="0 0 20 20">/g,
  '<svg class="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#8E4424] mr-1" fill="currentColor" viewBox="0 0 20 20">'
);

// 1.3 CINEMATIC TOURS (Construction Cam): Mobile Responsive Scaling
homeHtml = homeHtml.replace(
  '<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">',
  '<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">'
);
homeHtml = homeHtml.replace(
  '<div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8" id="construction-cam">',
  '<div class="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-8" id="construction-cam">'
);
homeHtml = homeHtml.replace(
  '<h2 class="text-3xl sm:text-4xl font-serif text-brand-charcoal">Experience Webravex: Construction Quality</h2>',
  '<h2 class="text-xl sm:text-3xl md:text-4xl font-serif text-brand-charcoal leading-tight">Experience Webravex: Construction Quality</h2>'
);
homeHtml = homeHtml.replace(
  /<button aria-label="Play Construction Walkthrough" class="w-16 h-16 sm:w-20 sm:h-20/g,
  '<button aria-label="Play Construction Walkthrough" class="w-12 h-12 sm:w-20 sm:h-20'
);
homeHtml = homeHtml.replace(
  '<div class="p-6"><div class="mb-5"><span class="text-[10px] uppercase font-bold tracking-widest text-[#8F7E6B] block mb-1">Quality Assurance &amp; Milestone Log</span><p class="text-xs sm:text-sm text-[#4A4238] italic font-serif leading-relaxed">',
  '<div class="p-3.5 sm:p-6"><div class="mb-3 sm:mb-5"><span class="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#8F7E6B] block mb-0.5 sm:mb-1">Quality Assurance &amp; Milestone Log</span><p class="text-[11px] sm:text-sm text-[#4A4238] italic font-serif leading-relaxed">'
);

// 1.4 WEBRAVEX CONSTRUCTION & DELIVERY PROMISE: Mobile Responsive Scaling
homeHtml = homeHtml.replace(
  '<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 border-t border-[#E5DACD]">',
  '<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-28 border-t border-[#E5DACD]">'
);
homeHtml = homeHtml.replace(
  '<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="promise">',
  '<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-center" id="promise">'
);
homeHtml = homeHtml.replace(
  '<h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-[1.15] mb-6">The Webravex Construction &amp; Delivery Promise</h2>',
  '<h2 class="text-xl sm:text-3xl lg:text-5xl font-serif text-brand-charcoal leading-tight sm:leading-[1.15] mb-3 sm:mb-6">The Webravex Construction &amp; Delivery Promise</h2>'
);
homeHtml = homeHtml.replace(
  '<p class="text-sm sm:text-base text-[#61574C] font-light leading-relaxed mb-4">Founded as a premium civil engineering and infrastructure builder, Webravex is recognized for zero-compromise construction quality, RERA compliance, clear title provenance, and grade-A in-house EPC execution.</p>',
  '<p class="text-xs sm:text-base text-[#61574C] font-light leading-relaxed mb-2.5 sm:mb-4">Founded as a premium civil engineering and infrastructure builder, Webravex is recognized for zero-compromise construction quality, RERA compliance, clear title provenance, and grade-A in-house EPC execution.</p>'
);
homeHtml = homeHtml.replace(
  '<p class="text-xs sm:text-sm text-[#7D7162] leading-relaxed mb-8">Every development is backed by milestone escrow safety under RERA regulations, earthquake-resistant monolithic construction, and audited by premier international structural bureaus.</p>',
  '<p class="text-[11px] sm:text-sm text-[#7D7162] leading-relaxed mb-4 sm:mb-8">Every development is backed by milestone escrow safety under RERA regulations, earthquake-resistant monolithic construction, and audited by premier international structural bureaus.</p>'
);
homeHtml = homeHtml.replace(
  /<div class="bg-\[#F5EFE6\] p-4 rounded-xl border border-\[#E2D5C4\]">/g,
  '<div class="bg-[#F5EFE6] p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#E2D5C4]">'
);
homeHtml = homeHtml.replace(
  '<div class="bg-[#FAF7F2] border border-[#DFCFC0] rounded-2xl p-8 shadow-lg relative">',
  '<div class="bg-[#FAF7F2] border border-[#DFCFC0] rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg relative">'
);
homeHtml = homeHtml.replace(
  '<div class="w-16 h-16 rounded-full ring-2 ring-brand-gold/80 overflow-hidden shadow-md">',
  '<div class="w-12 h-12 sm:w-16 sm:h-16 rounded-full ring-2 ring-brand-gold/80 overflow-hidden shadow-md">'
);
homeHtml = homeHtml.replace(
  '<h3 class="text-lg font-serif font-bold text-brand-charcoal">Rajesh V. Singhania</h3>',
  '<h3 class="text-base sm:text-lg font-serif font-bold text-brand-charcoal">Rajesh V. Singhania</h3>'
);
homeHtml = homeHtml.replace(
  '<div class="bg-[#F0E6D8] border border-[#DECFBE] p-4 rounded-xl mb-6">',
  '<div class="bg-[#F0E6D8] border border-[#DECFBE] p-3 sm:p-4 rounded-lg sm:rounded-xl mb-3 sm:mb-6">'
);
homeHtml = homeHtml.replace(
  '<blockquote class="text-xs text-[#5C5246] italic font-serif leading-relaxed mb-6">',
  '<blockquote class="text-[11px] sm:text-xs text-[#5C5246] italic font-serif leading-relaxed mb-3 sm:mb-6">'
);
homeHtml = homeHtml.replace(
  '<button class="w-full bg-[#E8DDD0] hover:bg-[#DFCDBB] text-brand-charcoal py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 border border-[#CDBEAC]">',
  '<button class="w-full bg-[#E8DDD0] hover:bg-[#DFCDBB] text-brand-charcoal py-2.5 sm:py-3 rounded-lg text-[10.5px] sm:text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 border border-[#CDBEAC]">'
);

// 1.5 FOOTER: Mobile Responsive Scaling
homeHtml = homeHtml.replace(
  '<footer class="bg-[#FAF7F2] border-t border-[#E5DACD] pt-16 pb-12 text-brand-charcoal">',
  '<footer class="bg-[#FAF7F2] border-t border-[#E5DACD] pt-10 sm:pt-16 pb-8 sm:pb-12 text-brand-charcoal">'
);
homeHtml = homeHtml.replace(
  '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E5DACD]">',
  '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-[#E5DACD]">'
);

fs.writeFileSync(path.join(rootDir, 'index.html'), homeHtml, 'utf8');
console.log('✅ Generated index.html with Full Mobile-Responsive Typography & Section Spacing');

// 2. Process Properties Page (with exact Stitch header, mobile drawer, interactive categories & functional search)
let propertiesHtml = readHtml(stepFiles.properties);
propertiesHtml = propertiesHtml.replace(/<header[\s\S]*?<\/header>/, generateStitchHeader('properties'));
propertiesHtml = propertiesHtml.replace(/href="#services"/g, 'href="services.html"');
propertiesHtml = propertiesHtml.replace(/href="#developments"/g, 'href="properties.html"');
propertiesHtml = propertiesHtml.replace(/href="#contact"/g, 'href="contact.html"');

// Inject hide-scrollbar styles into properties.html <head>
const propScrollbarStyles = `
<style>
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  @keyframes bounceX {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(4px); }
  }
  .animate-bounce-x {
    display: inline-block;
    animation: bounceX 1s infinite;
  }
</style>
`;
propertiesHtml = propertiesHtml.replace('</head>', `${propScrollbarStyles}\n</head>`);

// Upgrade Hero Headline Block
const propHeadlineBlock = `<!-- Main Headline Block -->
<div class="mb-8">
  <div class="flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-primary mb-2">
    <span>•</span>
    <span>Verified Sovereign Portfolios</span>
    <span>•</span>
    <span>Q4 2025 Handover</span>
  </div>
  <h1 class="text-2xl sm:text-4xl lg:text-5xl font-headline-lg font-title-editorial text-on-surface leading-[1.15]">
    Sovereign Residential Assets
  </h1>
  <p class="text-xs sm:text-sm text-on-surface-variant mt-2 max-w-2xl font-light leading-relaxed">
    Curated ultra-luxury freehold villas, imperial heritage manors, high-rise towers, and panoramic sky penthouses across India's leading economic epicenters.
  </p>
</div>`;
propertiesHtml = propertiesHtml.replace(/<!-- Main Headline Block -->[\s\S]*?<!-- Omnisearch Command Module -->/, `${propHeadlineBlock}\n<!-- Omnisearch Command Module -->`);

// Replace Search Module & Category Pill Tabs with Mobile-Smooth Interactive Version
const propSearchAndCategoriesBlock = `<!-- Omnisearch Command Module -->
<div class="bg-surface-bright rounded-xl shadow-xl p-3 sm:p-6 border border-outline-variant/40 overflow-hidden">
  <form id="propertiesSearchForm" class="flex flex-col gap-2.5 sm:gap-3 w-full" onsubmit="event.preventDefault();">
    <!-- Top Search Input with Embedded Clear Button -->
    <div class="w-full relative min-w-0">
      <span class="material-symbols-outlined absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 text-outline text-base sm:text-lg pointer-events-none">search</span>
      <input id="propertiesSearchInput" class="w-full pl-9 sm:pl-10 pr-9 sm:pr-10 py-2.5 sm:py-3 bg-surface-container-low rounded-lg font-body-sm text-xs sm:text-body-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary border border-transparent transition-all shadow-inner" placeholder="Search locality, landmark, estate name, or specs (Worli, Jubilee Hills, Penthouse, Pool)..." type="text" autocomplete="off">
      <button id="clearSearchInputBtn" type="button" aria-label="Clear search" class="hidden absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-all text-xs cursor-pointer">
        <span class="material-symbols-outlined text-sm">close</span>
      </button>
    </div>

    <!-- Filter Controls Row (Responsive Grid) -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5 w-full">
      <!-- City Select -->
      <div class="relative w-full">
        <select id="propertiesCitySelect" class="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 md:py-3 bg-surface-container-low rounded-lg font-body-sm text-[11.5px] sm:text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30 appearance-none cursor-pointer truncate">
          <option value="all">All Metro Cities</option>
          <option value="mumbai">Mumbai MMR</option>
          <option value="delhi">Delhi NCR</option>
          <option value="bengaluru">Bengaluru Prime</option>
          <option value="hyderabad">Hyderabad</option>
        </select>
        <span class="material-symbols-outlined absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-outline text-sm pointer-events-none">expand_more</span>
      </div>

      <!-- Price Select -->
      <div class="relative w-full">
        <select id="propertiesPriceSelect" class="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 md:py-3 bg-surface-container-low rounded-lg font-body-sm text-[11.5px] sm:text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30 appearance-none cursor-pointer truncate">
          <option value="all">All Price Ranges</option>
          <option value="10-25">₹10 Cr – ₹25 Cr</option>
          <option value="25-50">₹25 Cr – ₹50 Cr</option>
          <option value="50-100">₹50 Cr – ₹100 Cr</option>
          <option value="100+">₹100+ Cr Ultra-Trophy</option>
        </select>
        <span class="material-symbols-outlined absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-outline text-sm pointer-events-none">expand_more</span>
      </div>

      <!-- Typology Select: Hidden on mobile (< md), visible on desktop -->
      <div class="hidden md:block relative w-full">
        <select id="propertiesTypologySelect" class="w-full px-3 py-2.5 sm:py-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/30 appearance-none cursor-pointer">
          <option value="all">All Typologies</option>
          <option value="villas">Independent Villas</option>
          <option value="mansions">Imperial Mansions</option>
          <option value="highrise">High-Rise Towers</option>
          <option value="penthouses">Sky Penthouses</option>
        </select>
        <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-sm pointer-events-none">expand_more</span>
      </div>

      <!-- Action Buttons Row -->
      <div class="grid grid-cols-2 gap-1.5 sm:gap-2 w-full col-span-2 md:col-span-3 lg:col-span-1">
        <button aria-label="Open granular parameters" class="py-2 sm:py-2.5 lg:py-3 px-2 sm:px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center gap-1 transition-all text-[11px] sm:text-xs uppercase tracking-wider font-semibold border border-outline-variant/40 whitespace-nowrap cursor-pointer" id="open-filters-btn" type="button">
          <span class="material-symbols-outlined text-sm sm:text-base text-primary">tune</span>
          <span>Filters</span>
          <span id="activeFilterBadge" class="hidden ml-0.5 sm:ml-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-primary text-on-primary text-[9px] sm:text-[10px] flex items-center justify-center font-bold">0</span>
        </button>
        <button id="searchPropertiesBtn" class="py-2 sm:py-2.5 lg:py-3 px-3 sm:px-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center gap-1 text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all shadow-md whitespace-nowrap cursor-pointer" type="button">
          <span class="material-symbols-outlined text-sm sm:text-base">search</span>
          <span>Search</span>
        </button>
      </div>
    </div>
  </form>
</div>

<!-- Portfolio Categories Pill Navigation: Hidden on mobile (< md), visible on desktop -->
<div class="hidden md:block mt-6 sm:mt-8">
  <div class="flex items-center justify-between text-[11px] text-[#9E8363] font-medium tracking-wider uppercase mb-2">
    <span class="flex items-center gap-1.5 font-semibold">
      <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
      Portfolio Categories
    </span>
  </div>
  
  <div id="categoryPillStrip" class="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 scroll-smooth hide-scrollbar snap-x" style="-webkit-overflow-scrolling: touch;">
    <!-- All Collections -->
    <button type="button" data-category="all" class="category-pill active flex-shrink-0 snap-start px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-label-md text-xs sm:text-sm bg-primary text-on-primary font-semibold whitespace-nowrap shadow-md shadow-primary/20 ring-2 ring-primary/20 transition-all flex items-center gap-2 cursor-pointer">
      <span class="material-symbols-outlined text-sm">dashboard</span>
      <span>All Portfolios</span>
      <span class="category-badge px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white">6</span>
    </button>

    <!-- Luxury Villas -->
    <button type="button" data-category="villas" class="category-pill flex-shrink-0 snap-start px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-label-md text-xs sm:text-sm bg-surface-bright/90 hover:bg-surface-container text-on-surface whitespace-nowrap transition-all border border-outline-variant/40 flex items-center gap-2 cursor-pointer">
      <span class="material-symbols-outlined text-sm text-primary">villa</span>
      <span>Luxury Villas</span>
      <span class="category-badge px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-surface-container text-on-surface-variant border border-outline-variant/30">2</span>
    </button>

    <!-- Imperial Mansions -->
    <button type="button" data-category="mansions" class="category-pill flex-shrink-0 snap-start px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-label-md text-xs sm:text-sm bg-surface-bright/90 hover:bg-surface-container text-on-surface whitespace-nowrap transition-all border border-outline-variant/40 flex items-center gap-2 cursor-pointer">
      <span class="material-symbols-outlined text-sm text-primary">castle</span>
      <span>Imperial Mansions</span>
      <span class="category-badge px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-surface-container text-on-surface-variant border border-outline-variant/30">1</span>
    </button>

    <!-- High-Rise Towers -->
    <button type="button" data-category="highrise" class="category-pill flex-shrink-0 snap-start px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-label-md text-xs sm:text-sm bg-surface-bright/90 hover:bg-surface-container text-on-surface whitespace-nowrap transition-all border border-outline-variant/40 flex items-center gap-2 cursor-pointer">
      <span class="material-symbols-outlined text-sm text-primary">apartment</span>
      <span>High-Rise Towers</span>
      <span class="category-badge px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-surface-container text-on-surface-variant border border-outline-variant/30">2</span>
    </button>

    <!-- Sky Penthouses -->
    <button type="button" data-category="penthouses" class="category-pill flex-shrink-0 snap-start px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-label-md text-xs sm:text-sm bg-surface-bright/90 hover:bg-surface-container text-on-surface whitespace-nowrap transition-all border border-outline-variant/40 flex items-center gap-2 cursor-pointer">
      <span class="material-symbols-outlined text-sm text-primary">roofing</span>
      <span>Sky Penthouses</span>
      <span class="category-badge px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-surface-container text-on-surface-variant border border-outline-variant/30">1</span>
    </button>
  </div>
</div>

<!-- Active Search & Filters Status Bar -->
<div id="activeFilterStatus" class="mt-3 sm:mt-4 flex flex-wrap items-center justify-between gap-2 sm:gap-3 p-2.5 sm:p-3 bg-surface-container-low/70 rounded-lg sm:rounded-xl border border-outline-variant/30 transition-all">
  <div class="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-on-surface">
    <span class="material-symbols-outlined text-primary text-sm sm:text-base">auto_awesome</span>
    <span id="resultsCountText" class="font-medium">Showing all 6 verified luxury estates</span>
  </div>
  <div id="activeFilterChips" class="flex flex-wrap items-center gap-1.5 text-xs">
    <!-- Active filter chips dynamically injected here -->
  </div>
</div>
</div>
</section>`;

propertiesHtml = propertiesHtml.replace(/<!-- Omnisearch Command Module -->[\s\S]*?<!-- Curated Catalog Showcase Body -->/, `${propSearchAndCategoriesBlock}\n<!-- Curated Catalog Showcase Body -->`);

// Enhance Catalog Showcase Body with Mobile Spacing and Empty State
const propShowcaseHeader = `<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-16 space-y-4 sm:space-y-12 lg:space-y-24">
<!-- Empty State if 0 properties match search/filter -->
<div id="noPropertiesFound" class="hidden py-10 sm:py-16 px-4 text-center max-w-lg mx-auto">
  <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-surface-container flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-outline-variant/40 text-primary">
    <span class="material-symbols-outlined text-2xl sm:text-3xl">travel_explore</span>
  </div>
  <h3 class="text-lg sm:text-xl font-serif font-bold text-on-surface mb-1.5 sm:mb-2">No Matching Estates Found</h3>
  <p class="text-xs sm:text-sm text-on-surface-variant font-light mb-4 sm:mb-6">
    We couldn't find any architectural assets matching your search criteria. Try modifying your search keywords or clearing active filters.
  </p>
  <button id="emptyStateResetBtn" type="button" class="px-4 py-2 sm:px-5 sm:py-2.5 bg-primary hover:bg-primary-container text-on-primary rounded-lg text-xs font-semibold uppercase tracking-wider transition-all shadow-md cursor-pointer">
    Reset All Filters &amp; Search
  </button>
</div>`;

propertiesHtml = propertiesHtml.replace(
  '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">',
  propShowcaseHeader
);

// HIDE ALL CATEGORY SECTION HEADERS ON MOBILE (< md), display on desktop (md:flex)
propertiesHtml = propertiesHtml.replace(
  /<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-outline-variant\/30">/g,
  '<div class="hidden md:flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-outline-variant/30">'
);

// Add data-category-section attributes and mobile-compact space-y to category sections
propertiesHtml = propertiesHtml.replace('<section class="space-y-8" id="villas">', '<section class="space-y-3 sm:space-y-6 lg:space-y-8 transition-all duration-300" id="villas" data-category-section="villas">');
propertiesHtml = propertiesHtml.replace('<section class="space-y-8" id="mansions">', '<section class="space-y-3 sm:space-y-6 lg:space-y-8 transition-all duration-300" id="mansions" data-category-section="mansions">');
propertiesHtml = propertiesHtml.replace('<section class="space-y-8" id="highrise">', '<section class="space-y-3 sm:space-y-6 lg:space-y-8 transition-all duration-300" id="highrise" data-category-section="highrise">');
propertiesHtml = propertiesHtml.replace('<section class="space-y-8" id="penthouses">', '<section class="space-y-3 sm:space-y-6 lg:space-y-8 transition-all duration-300" id="penthouses" data-category-section="penthouses">');

// Reduce grid gaps on mobile
propertiesHtml = propertiesHtml.replace(
  '<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">',
  '<div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 lg:gap-8 items-stretch">'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">',
  '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-6 lg:gap-8 items-stretch">'
);

// Replace broken 403 Google CDN image for The Lutyens Pavilions with verified working Lutyens villa image
propertiesHtml = propertiesHtml.replace(
  'src="https://lh3.googleusercontent.com/aida/AEtjO1W8vCFpai9eexnf7f4ziIMS6hXe0-m3UyeSOu3Rz0RLfoRm9WdPe3fZa4BDekZ5gf2v1__DHV8yCYSao3MilnFZ9EQ-1S-D9lP7Hf45JmjfO2ZMT_GT0UnqNQb7YZhDD6DzY_6XNuJsRiJD_RlWij03SzeRrDSCrI3TZ1GJZa18wwLkFKDor-Fy7PcMgiOkfXROBHU9jTBGgKVxF29vzF6oam4nu8IA7NwVn6VvT1Otbb88_qaToKmY9Cw"',
  'src="/images/lutyens_pavilions.jpg" onerror="this.onerror=null;this.src=\'https://lh3.googleusercontent.com/aida-public/AB6AXuCzbc6lCbTeICOKY0pL5gzdV9Zd9vC9OcuBrZT2jUvjaFuaWXKtQYRY1U857SJb81blMrpxcclBdluWCQv0HegHhOp7xdSMuFd4sVkSe3zyQf2OXoDrpIWHxXW8hDXwTCB8rdP-3OU8vlgF_yDwn1wSvum52A7uyWgfH5EMZIWDjBqHGVNn0juqnziPbH5pJYc7I_PqIuA4k_0DRZKlolxn8bE4pDSwQtpqm67jG-dDyPmfcqBjl2bN\'"'
);

// Tag all 6 property articles with search metadata and smooth transitions
propertiesHtml = propertiesHtml.replace(
  'class="lg:col-span-8 bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/40 flex flex-col justify-between group"',
  'data-property-card="true" data-category="villas" data-city="delhi" data-price="65" data-title="The Lutyens Pavilions" data-search-terms="the lutyens pavilions vasant vihar lutyens zone new delhi ready to move clear title guarantee 65 cr 1200 sq yd 14200 sq ft 5 suites study spa colonnade private security quarters pool luxury independent villa freehold" class="lg:col-span-8 bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/40 flex flex-col justify-between group transition-all duration-300"'
);

propertiesHtml = propertiesHtml.replace(
  'class="lg:col-span-4 bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/40 flex flex-col justify-between group"',
  'data-property-card="true" data-category="villas" data-city="hyderabad" data-price="38.5" data-title="The Nilgiri Horizon Villa" data-search-terms="the nilgiri horizon villa road no 36 jubilee hills hyderabad prime 38.5 cr 38.50 850 sq yd 9800 sq ft freehold cleared infinity pool deck lutron sound insulation contemporary cantilevered luxury independent villa" class="lg:col-span-4 bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/40 flex flex-col justify-between group transition-all duration-300"'
);

propertiesHtml = propertiesHtml.replace(
  'class="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/40 grid grid-cols-1 lg:grid-cols-12 group"',
  'data-property-card="true" data-category="mansions" data-city="delhi" data-price="85" data-title="Sovereign Heritage Manor" data-search-terms="sovereign heritage manor golf links enclave new delhi off-market mandate diplomatic clearance trophy asset 85 cr 85.00 unencumbered freehold title 1850 sq yards 6 imperial suites 4 staff annexes sandstone colonnades banquet royal imperial mansions" class="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/40 grid grid-cols-1 lg:grid-cols-12 group transition-all duration-300"'
);

propertiesHtml = propertiesHtml.replace(
  'class="lg:col-span-7 bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/40 flex flex-col justify-between group"',
  'data-property-card="true" data-category="highrise" data-city="delhi" data-price="18.5" data-title="The Aetheria High-Rise Tower" data-search-terms="the aetheria high-rise tower golf course road gurugram ncr hrera verified construction 90% completed 18.5 cr 18.50 onwards 4 5 bhk aravalli private elevator triple-height lobby vrv hepa lap pool 11.8 feet ceiling 65000 sq ft clubhouse high rise towers highrise" class="lg:col-span-7 bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/40 flex flex-col justify-between group transition-all duration-300"'
);

propertiesHtml = propertiesHtml.replace(
  'class="lg:col-span-5 bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/40 flex flex-col justify-between group"',
  'data-property-card="true" data-category="highrise" data-city="bengaluru" data-price="12.75" data-title="The Palladium Sky Residences" data-search-terms="the palladium sky residences whitefield prime bengaluru tech corridor 12.75 cr 4-bhk simplex 270-degree wraparound balconies helipad 4650 sq ft rera dual-grid dg backup high rise towers highrise" class="lg:col-span-5 bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/40 flex flex-col justify-between group transition-all duration-300"'
);

propertiesHtml = propertiesHtml.replace(
  'class="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/40 flex flex-col group"',
  'data-property-card="true" data-category="penthouses" data-city="mumbai" data-price="72" data-title="The Imperial Penthouse at Sea Face" data-search-terms="the imperial penthouse at sea face worli south mumbai maharera registered triplex levels 52 53 54 72 cr 72.00 arabian sea bandra-worli sea link 50-ft private infinity sky pool 28-ft double-height living salon biometric elevator 8 bays penthouses sky penthouses" class="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/40 flex flex-col group transition-all duration-300"'
);

// SCALE DOWN PROPERTY CARDS ON MOBILE (Small scale of mobile phone size)
// Badges scaling on mobile
propertiesHtml = propertiesHtml.replace(
  /<span class="px-3 py-1 bg-surface-bright\/90 backdrop-blur-md font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold rounded">/g,
  '<span class="px-2 py-0.5 sm:px-3 sm:py-1 bg-surface-bright/90 backdrop-blur-md text-[9px] sm:text-label-caps uppercase tracking-wider text-primary font-bold rounded">'
);
propertiesHtml = propertiesHtml.replace(
  /<span class="px-3 py-1 bg-surface-bright\/95 backdrop-blur-md font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold rounded">/g,
  '<span class="px-2 py-0.5 sm:px-3 sm:py-1 bg-surface-bright/95 backdrop-blur-md text-[9px] sm:text-label-caps uppercase tracking-wider text-primary font-bold rounded">'
);
propertiesHtml = propertiesHtml.replace(
  /<span class="px-3\.5 py-1\.5 bg-surface-bright\/95 backdrop-blur-md font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold rounded">/g,
  '<span class="px-2 py-0.5 sm:px-3.5 sm:py-1.5 bg-surface-bright/95 backdrop-blur-md text-[9px] sm:text-label-caps uppercase tracking-wider text-primary font-bold rounded">'
);
propertiesHtml = propertiesHtml.replace(
  /<span class="px-3 py-1 bg-inverse-surface\/85 backdrop-blur-md font-label-caps text-label-caps uppercase tracking-wider text-surface-bright rounded">/g,
  '<span class="px-2 py-0.5 sm:px-3 sm:py-1 bg-inverse-surface/85 backdrop-blur-md text-[9px] sm:text-label-caps uppercase tracking-wider text-surface-bright rounded">'
);
propertiesHtml = propertiesHtml.replace(
  /<span class="px-3\.5 py-1\.5 bg-inverse-surface\/85 backdrop-blur-md font-label-caps text-label-caps uppercase tracking-wider text-surface-bright rounded">/g,
  '<span class="px-2 py-0.5 sm:px-3.5 sm:py-1.5 bg-inverse-surface/85 backdrop-blur-md text-[9px] sm:text-label-caps uppercase tracking-wider text-surface-bright rounded">'
);

// Card 1 (The Lutyens Pavilions) Mobile Small Scale
propertiesHtml = propertiesHtml.replace(
  '<div class="relative overflow-hidden aspect-[16/10] bg-surface-dim">',
  '<div class="relative overflow-hidden aspect-[16/10] h-40 sm:h-56 lg:h-auto min-h-0 bg-surface-dim">'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="absolute bottom-4 right-4 px-4 py-2 bg-surface-bright/95 backdrop-blur-md rounded shadow-lg">\n<span class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block">Investment Value</span>\n<span class="font-headline-sm text-headline-sm text-primary font-bold">₹65.00 Cr</span>\n</div>',
  '<div class="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 px-2.5 py-1 sm:px-4 sm:py-2 bg-surface-bright/95 backdrop-blur-md rounded-md sm:rounded shadow-md sm:shadow-lg">\n<span class="text-[8px] sm:text-label-caps text-on-surface-variant uppercase tracking-wider block">Investment Value</span>\n<span class="text-sm sm:text-lg md:text-headline-sm text-primary font-bold">₹65.00 Cr</span>\n</div>'
);
// Shared padding for Card 1 and Card 4
propertiesHtml = propertiesHtml.replace(
  /<div class="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">/g,
  '<div class="p-3.5 sm:p-6 lg:p-8 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-4 lg:space-y-6">'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="flex items-center justify-between text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest mb-2">',
  '<div class="flex items-center justify-between text-on-surface-variant text-[9px] sm:text-label-caps uppercase tracking-wider mb-1 sm:mb-2">'
);
propertiesHtml = propertiesHtml.replace(
  '<h3 class="font-title-editorial text-title-editorial sm:text-headline-sm text-on-surface group-hover:text-primary transition-colors">The Lutyens Pavilions</h3>\n<p class="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">\n                An aristocratic neo-classical residential estate spanning 1,200 sq. yards of freehold land. Features a temperature-regulated subterranean spa, 4-car porte-cochère, Italian statuario marble flooring throughout, and integrated private security quarters.\n              </p>',
  '<h3 class="font-title-editorial text-base sm:text-xl lg:text-headline-sm text-on-surface group-hover:text-primary transition-colors">The Lutyens Pavilions</h3>\n<p class="text-[11.5px] sm:text-body-md text-on-surface-variant mt-1 sm:mt-2 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">\n                An aristocratic neo-classical residential estate spanning 1,200 sq. yards of freehold land. Features a temperature-regulated subterranean spa, 4-car porte-cochère, Italian statuario marble flooring throughout, and integrated private security quarters.\n              </p>'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-outline-variant/30 text-on-surface">',
  '<div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 py-2 sm:py-3 lg:py-4 border-y border-outline-variant/30 text-on-surface text-xs sm:text-body-md">'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="flex flex-wrap items-center justify-between gap-4 pt-2">',
  '<div class="flex flex-wrap items-center justify-between gap-2 sm:gap-4 pt-1 sm:pt-2">'
);
propertiesHtml = propertiesHtml.replace(
  '<a class="px-6 py-3 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-widest rounded transition-all" href="contact.html">Schedule Private Tour</a>',
  '<a class="px-3 sm:px-6 py-2 sm:py-3 bg-primary hover:bg-primary-container text-on-primary text-[10.5px] sm:text-label-md uppercase tracking-wider sm:tracking-widest rounded transition-all" href="contact.html">Schedule Private Tour</a>'
);
propertiesHtml = propertiesHtml.replace(
  '<button class="px-6 py-3 border border-outline hover:border-primary text-on-surface font-label-md text-label-md uppercase tracking-widest rounded transition-all flex items-center gap-2">',
  '<button class="px-3 sm:px-6 py-2 sm:py-3 border border-outline hover:border-primary text-on-surface text-[10.5px] sm:text-label-md uppercase tracking-wider sm:tracking-widest rounded transition-all flex items-center gap-1.5 sm:gap-2">'
);

// Card 2 (The Nilgiri Horizon Villa) Mobile Small Scale
propertiesHtml = propertiesHtml.replace(
  '<div class="relative overflow-hidden aspect-[4/3] bg-surface-dim">',
  '<div class="relative overflow-hidden aspect-[16/10] sm:aspect-[4/3] h-40 sm:h-56 lg:h-auto min-h-0 bg-surface-dim">'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="absolute bottom-3 right-3 px-3 py-1.5 bg-surface-bright/95 backdrop-blur-md rounded shadow">\n<span class="font-headline-sm text-headline-sm text-primary font-bold">₹38.50 Cr</span>\n</div>',
  '<div class="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-surface-bright/95 backdrop-blur-md rounded shadow">\n<span class="text-sm sm:text-headline-sm text-primary font-bold">₹38.50 Cr</span>\n</div>'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="p-6 flex-1 flex flex-col justify-between space-y-4">',
  '<div class="p-3.5 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3 lg:space-y-4">'
);
propertiesHtml = propertiesHtml.replace(
  '<span class="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant block mb-1">Road No. 36, Jubilee Hills</span>',
  '<span class="text-[9px] sm:text-label-caps uppercase tracking-wider text-on-surface-variant block mb-0.5 sm:mb-1">Road No. 36, Jubilee Hills</span>'
);
propertiesHtml = propertiesHtml.replace(
  '<h3 class="font-title-editorial text-title-editorial text-on-surface group-hover:text-primary transition-colors">The Nilgiri Horizon Villa</h3>\n<p class="font-body-sm text-body-sm text-on-surface-variant mt-2">\n                Sculptural cantilevered contemporary villa set on a vantage ridge overlooking Durgam Cheruvu lake. Infinity pool deck, home automation by Lutron, and triple-glazed sound insulation.\n              </p>',
  '<h3 class="font-title-editorial text-base sm:text-title-editorial text-on-surface group-hover:text-primary transition-colors">The Nilgiri Horizon Villa</h3>\n<p class="text-[11.5px] sm:text-body-sm text-on-surface-variant mt-1 sm:mt-2 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">\n                Sculptural cantilevered contemporary villa set on a vantage ridge overlooking Durgam Cheruvu lake. Infinity pool deck, home automation by Lutron, and triple-glazed sound insulation.\n              </p>'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="space-y-2 py-3 border-t border-outline-variant/30 text-on-surface font-body-sm text-body-sm">',
  '<div class="space-y-1 sm:space-y-2 py-1.5 sm:py-3 border-t border-outline-variant/30 text-on-surface text-[11px] sm:text-body-sm">'
);
propertiesHtml = propertiesHtml.replace(
  '<a class="w-full block py-2.5 text-center border border-outline hover:border-primary text-on-surface font-label-md text-label-md uppercase tracking-wider rounded transition-all" href="contact.html">',
  '<a class="w-full block py-1.5 sm:py-2.5 text-center border border-outline hover:border-primary text-on-surface text-[10.5px] sm:text-label-md uppercase tracking-wider rounded transition-all" href="contact.html">'
);

// Card 3 (Sovereign Heritage Manor) Mobile Small Scale
propertiesHtml = propertiesHtml.replace(
  '<div class="lg:col-span-7 relative min-h-[400px] bg-surface-dim overflow-hidden">',
  '<div class="lg:col-span-7 relative h-40 sm:h-56 lg:h-auto min-h-0 lg:min-h-[400px] bg-surface-dim overflow-hidden">'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">',
  '<div class="lg:col-span-5 p-3.5 sm:p-6 lg:p-10 flex flex-col justify-between space-y-2.5 sm:space-y-4 lg:space-y-6">'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="flex items-center justify-between text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider mb-2">',
  '<div class="flex items-center justify-between text-on-surface-variant text-[9px] sm:text-label-caps uppercase tracking-wider mb-1 sm:mb-2">'
);
propertiesHtml = propertiesHtml.replace(
  '<h3 class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">Sovereign Heritage Manor</h3>\n<p class="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">\n              An irreplaceable neoclassical imperial manor bordered by lush century-old foliage. Features grand sandstone colonnades, royal ceremonial banquet suites, private boardrooms, and diplomatic security detachments.\n            </p>',
  '<h3 class="font-headline-md text-base sm:text-xl lg:text-headline-md text-on-surface group-hover:text-primary transition-colors">Sovereign Heritage Manor</h3>\n<p class="text-[11.5px] sm:text-body-md text-on-surface-variant mt-1.5 sm:mt-3 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">\n              An irreplaceable neoclassical imperial manor bordered by lush century-old foliage. Features grand sandstone colonnades, royal ceremonial banquet suites, private boardrooms, and diplomatic security detachments.\n            </p>'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="space-y-3 py-4 border-y border-outline-variant/30 text-on-surface font-body-sm text-body-sm">',
  '<div class="space-y-1.5 sm:space-y-3 py-2 sm:py-4 border-y border-outline-variant/30 text-on-surface text-[11px] sm:text-body-sm">'
);
propertiesHtml = propertiesHtml.replace(
  '<span class="font-headline-sm text-headline-sm text-primary font-bold">₹85.00 Cr</span>',
  '<span class="text-sm sm:text-lg lg:text-headline-sm text-primary font-bold">₹85.00 Cr</span>'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="flex flex-col sm:flex-row gap-3 pt-2">\n<a class="flex-1 py-3 px-4 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider rounded text-center transition-all" href="contact.html">\n              Request Confidential Dossier\n            </a>\n<a class="py-3 px-4 border border-outline hover:border-primary text-on-surface font-label-md text-label-md uppercase tracking-wider rounded text-center transition-all flex items-center justify-center gap-1.5" href="https://wa.me/912269885000" target="_blank">\n<span class="material-symbols-outlined text-base text-emerald-600">forum</span> Consult Advisory Desk\n            </a>\n</div>',
  '<div class="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2">\n<a class="flex-1 py-2 sm:py-3 px-3 sm:px-4 bg-primary hover:bg-primary-container text-on-primary text-[10.5px] sm:text-label-md uppercase tracking-wider rounded text-center transition-all" href="contact.html">\n              Request Confidential Dossier\n            </a>\n<a class="py-2 sm:py-3 px-3 sm:px-4 border border-outline hover:border-primary text-on-surface text-[10.5px] sm:text-label-md uppercase tracking-wider rounded text-center transition-all flex items-center justify-center gap-1 sm:gap-1.5" href="https://wa.me/912269885000" target="_blank">\n<span class="material-symbols-outlined text-sm sm:text-base text-emerald-600">forum</span> Consult Advisory Desk\n            </a>\n</div>'
);

// Shared image scaling for Card 4 and Card 5 (aspect-[16/11])
propertiesHtml = propertiesHtml.replace(
  /<div class="relative overflow-hidden aspect-\[16\/11\] bg-surface-dim">/g,
  '<div class="relative overflow-hidden aspect-[16/10] sm:aspect-[16/11] h-40 sm:h-56 lg:h-auto min-h-0 bg-surface-dim">'
);

// Card 4 (The Aetheria High-Rise Tower) Mobile Small Scale
propertiesHtml = propertiesHtml.replace(
  '<div class="absolute bottom-4 right-4 px-4 py-2 bg-surface-bright/95 backdrop-blur-md rounded shadow-lg">\n<span class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block">Configurations From</span>\n<span class="font-headline-sm text-headline-sm text-primary font-bold">₹18.50 Cr Onwards</span>\n</div>',
  '<div class="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 px-2.5 py-1 sm:px-4 sm:py-2 bg-surface-bright/95 backdrop-blur-md rounded-md sm:rounded shadow-md sm:shadow-lg">\n<span class="text-[8px] sm:text-label-caps text-on-surface-variant uppercase tracking-wider block">Configurations From</span>\n<span class="text-sm sm:text-lg md:text-headline-sm text-primary font-bold">₹18.50 Cr Onwards</span>\n</div>'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="flex items-center justify-between text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest mb-1.5">',
  '<div class="flex items-center justify-between text-on-surface-variant text-[9px] sm:text-label-caps uppercase tracking-wider mb-1">'
);
propertiesHtml = propertiesHtml.replace(
  '<h3 class="font-title-editorial text-title-editorial sm:text-headline-sm text-on-surface group-hover:text-primary transition-colors">The Aetheria High-Rise Tower</h3>\n<p class="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">\n                4 &amp; 5 BHK ultra-residences rising 48 storeys above the Aravalli biodiversity range. Featuring private elevator vestibules, triple-height designer lobbies, VRV air conditioning with HEPA air filters, and a temperature-controlled lap pool.\n              </p>',
  '<h3 class="font-title-editorial text-base sm:text-xl lg:text-headline-sm text-on-surface group-hover:text-primary transition-colors">The Aetheria High-Rise Tower</h3>\n<p class="text-[11.5px] sm:text-body-md text-on-surface-variant mt-1 sm:mt-2 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">\n                4 &amp; 5 BHK ultra-residences rising 48 storeys above the Aravalli biodiversity range. Featuring private elevator vestibules, triple-height designer lobbies, VRV air conditioning with HEPA air filters, and a temperature-controlled lap pool.\n              </p>'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="grid grid-cols-3 gap-3 py-3 border-y border-outline-variant/30 text-center">',
  '<div class="grid grid-cols-3 gap-1.5 sm:gap-3 py-2 sm:py-3 border-y border-outline-variant/30 text-center text-xs sm:text-body-md">'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="flex flex-wrap items-center justify-between gap-3 pt-2">\n<a class="flex-1 py-3 px-4 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider rounded text-center transition-all" href="contact.html">Book Sample Flat Tour</a>\n<button class="py-3 px-4 border border-outline hover:border-primary text-on-surface font-label-md text-label-md uppercase tracking-wider rounded transition-all">View Floor Plans</button>\n</div>',
  '<div class="flex flex-wrap items-center justify-between gap-2 sm:gap-3 pt-1 sm:pt-2">\n<a class="flex-1 py-2 sm:py-3 px-3 sm:px-4 bg-primary hover:bg-primary-container text-on-primary text-[10.5px] sm:text-label-md uppercase tracking-wider rounded text-center transition-all" href="contact.html">Book Sample Flat Tour</a>\n<button class="py-2 sm:py-3 px-3 sm:px-4 border border-outline hover:border-primary text-on-surface text-[10.5px] sm:text-label-md uppercase tracking-wider rounded transition-all">View Floor Plans</button>\n</div>'
);

// Card 5 (The Palladium Sky Residences) Mobile Small Scale
propertiesHtml = propertiesHtml.replace(
  '<div class="absolute bottom-4 right-4 px-3 py-1.5 bg-surface-bright/95 backdrop-blur-md rounded shadow">\n<span class="font-headline-sm text-headline-sm text-primary font-bold">₹12.75 Cr</span>\n</div>',
  '<div class="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-surface-bright/95 backdrop-blur-md rounded shadow">\n<span class="text-sm sm:text-headline-sm text-primary font-bold">₹12.75 Cr</span>\n</div>'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">',
  '<div class="p-3.5 sm:p-6 lg:p-8 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3 lg:space-y-4">'
);
propertiesHtml = propertiesHtml.replace(
  '<span class="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant block mb-1">Whitefield Prime, Bengaluru</span>',
  '<span class="text-[9px] sm:text-label-caps uppercase tracking-wider text-on-surface-variant block mb-0.5 sm:mb-1">Whitefield Prime, Bengaluru</span>'
);
propertiesHtml = propertiesHtml.replace(
  '<h3 class="font-title-editorial text-title-editorial text-on-surface group-hover:text-primary transition-colors">The Palladium Sky Residences</h3>\n<p class="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">\n                4-BHK simplex residences with 270-degree wraparound balconies. Direct access to international schools, aerotropolis transit, and private helipad booking privileges.\n              </p>',
  '<h3 class="font-title-editorial text-base sm:text-title-editorial text-on-surface group-hover:text-primary transition-colors">The Palladium Sky Residences</h3>\n<p class="text-[11.5px] sm:text-body-sm text-on-surface-variant mt-1 sm:mt-2 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">\n                4-BHK simplex residences with 270-degree wraparound balconies. Direct access to international schools, aerotropolis transit, and private helipad booking privileges.\n              </p>'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="space-y-2 py-3 border-t border-outline-variant/30 text-on-surface font-body-sm text-body-sm">',
  '<div class="space-y-1 sm:space-y-2 py-1.5 sm:py-3 border-t border-outline-variant/30 text-on-surface text-[11px] sm:text-body-sm">'
);
propertiesHtml = propertiesHtml.replace(
  '<a class="w-full block py-3 text-center border border-outline hover:border-primary text-on-surface font-label-md text-label-md uppercase tracking-wider rounded transition-all" href="contact.html">\n                Download Technical Brochure\n              </a>',
  '<a class="w-full block py-2 sm:py-3 text-center border border-outline hover:border-primary text-on-surface text-[10.5px] sm:text-label-md uppercase tracking-wider rounded transition-all" href="contact.html">\n                Download Technical Brochure\n              </a>'
);

// Card 6 (The Imperial Penthouse at Sea Face) Mobile Small Scale
propertiesHtml = propertiesHtml.replace(
  '<div class="relative overflow-hidden aspect-[21/9] min-h-[380px] bg-surface-dim">',
  '<div class="relative overflow-hidden aspect-[16/10] sm:aspect-[21/9] h-40 sm:h-56 lg:h-auto min-h-0 lg:min-h-[380px] bg-surface-dim">'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="absolute bottom-4 right-4 px-5 py-2.5 bg-surface-bright/95 backdrop-blur-md rounded shadow-xl">\n<span class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block">Offered At</span>\n<span class="font-headline-md text-headline-md text-primary font-bold">₹72.00 Cr</span>\n</div>',
  '<div class="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 px-2.5 py-1 sm:px-5 sm:py-2.5 bg-surface-bright/95 backdrop-blur-md rounded-md sm:rounded shadow-md sm:shadow-xl">\n<span class="text-[8px] sm:text-label-caps text-on-surface-variant uppercase tracking-wider block">Offered At</span>\n<span class="text-sm sm:text-lg md:text-headline-md text-primary font-bold">₹72.00 Cr</span>\n</div>'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">',
  '<div class="p-3.5 sm:p-6 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-6 lg:gap-8">'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="flex items-center space-x-3 text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest">',
  '<div class="flex items-center space-x-2 text-on-surface-variant text-[9px] sm:text-label-caps uppercase tracking-wider">'
);
propertiesHtml = propertiesHtml.replace(
  '<h3 class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">The Imperial Penthouse at Sea Face</h3>\n<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">\n              Unrivalled 360-degree vista of the Arabian Sea and the Bandra-Worli Sea Link. Features a 50-ft cantilevered private infinity sky pool, 28-ft double-height living salon, private biometric elevator opening directly into the formal foyer, and dedicated basement car galleries for 8 exotics.\n            </p>',
  '<h3 class="font-headline-md text-base sm:text-xl lg:text-headline-md text-on-surface group-hover:text-primary transition-colors">The Imperial Penthouse at Sea Face</h3>\n<p class="text-[11.5px] sm:text-body-md text-on-surface-variant leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">\n              Unrivalled 360-degree vista of the Arabian Sea and the Bandra-Worli Sea Link. Features a 50-ft cantilevered private infinity sky pool, 28-ft double-height living salon, private biometric elevator opening directly into the formal foyer, and dedicated basement car galleries for 8 exotics.\n            </p>'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="flex flex-wrap gap-4 pt-2 font-body-sm text-body-sm text-on-surface">',
  '<div class="flex flex-wrap gap-2 sm:gap-4 pt-1 sm:pt-2 text-[10.5px] sm:text-body-sm text-on-surface">'
);
propertiesHtml = propertiesHtml.replace(
  '<div class="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px]">\n<a class="py-3 px-6 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-widest rounded text-center transition-all shadow-md" href="contact.html">\n              Direct Builder Desk\n            </a>\n<a class="py-3 px-6 border border-outline hover:border-primary text-on-surface font-label-md text-label-md uppercase tracking-widest rounded text-center transition-all flex items-center justify-center gap-2" href="https://wa.me/912269885000" target="_blank">\n<span class="material-symbols-outlined text-base text-emerald-600">videocam</span> Watch 4K Video Tour\n            </a>\n</div>',
  '<div class="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-3 min-w-0 lg:min-w-[240px]">\n<a class="py-2 sm:py-3 px-3 sm:px-6 bg-primary hover:bg-primary-container text-on-primary text-[10.5px] sm:text-label-md uppercase tracking-wider sm:tracking-widest rounded text-center transition-all shadow-md" href="contact.html">\n              Direct Builder Desk\n            </a>\n<a class="py-2 sm:py-3 px-3 sm:px-6 border border-outline hover:border-primary text-on-surface text-[10.5px] sm:text-label-md uppercase tracking-wider sm:tracking-widest rounded text-center transition-all flex items-center justify-center gap-1.5 sm:gap-2" href="https://wa.me/912269885000" target="_blank">\n<span class="material-symbols-outlined text-sm sm:text-base text-emerald-600">videocam</span> Watch 4K Video Tour\n            </a>\n</div>'
);

// Inject Interactive Search & Category Filter Engine before </body>
const propSearchScript = `
<script>
  (function() {
    const searchInput = document.getElementById('propertiesSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchInputBtn');
    const citySelect = document.getElementById('propertiesCitySelect');
    const typologySelect = document.getElementById('propertiesTypologySelect');
    const priceSelect = document.getElementById('propertiesPriceSelect');
    const searchBtn = document.getElementById('searchPropertiesBtn');
    const categoryPills = document.querySelectorAll('.category-pill');
    const resultsCountText = document.getElementById('resultsCountText');
    const activeFilterChips = document.getElementById('activeFilterChips');
    const noPropertiesFound = document.getElementById('noPropertiesFound');
    const emptyStateResetBtn = document.getElementById('emptyStateResetBtn');
    const activeFilterBadge = document.getElementById('activeFilterBadge');
    
    const propertyCards = document.querySelectorAll('[data-property-card]');
    const categorySections = document.querySelectorAll('[data-category-section]');

    let currentCategory = 'all';

    function performSearch() {
      const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
      const city = citySelect ? citySelect.value : 'all';
      const priceRange = priceSelect ? priceSelect.value : 'all';
      const typology = currentCategory !== 'all' ? currentCategory : (typologySelect ? typologySelect.value : 'all');

      // Toggle clear search button visibility
      if (clearSearchBtn) {
        if (query.length > 0) {
          clearSearchBtn.classList.remove('hidden');
        } else {
          clearSearchBtn.classList.add('hidden');
        }
      }

      let totalMatches = 0;
      const categoryMatchCounts = {
        villas: 0,
        mansions: 0,
        highrise: 0,
        penthouses: 0
      };

      propertyCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category') || '';
        const cardCity = card.getAttribute('data-city') || '';
        const cardPrice = parseFloat(card.getAttribute('data-price') || '0');
        const cardSearchTerms = (card.getAttribute('data-search-terms') || '').toLowerCase();
        const cardText = card.textContent.toLowerCase();

        // 1. Text Search Query Matching
        let matchesQuery = true;
        if (query) {
          const queryTerms = query.split(/\\s+/).filter(Boolean);
          matchesQuery = queryTerms.every(term => cardSearchTerms.includes(term) || cardText.includes(term));
        }

        // 2. City Filter Matching
        let matchesCity = true;
        if (city !== 'all') {
          matchesCity = (cardCity === city);
        }

        // 3. Typology / Category Filter Matching
        let matchesTypology = true;
        if (typology !== 'all') {
          matchesTypology = (cardCategory === typology);
        }

        // 4. Price Bracket Matching
        let matchesPrice = true;
        if (priceRange === '10-25') {
          matchesPrice = (cardPrice >= 10 && cardPrice <= 25);
        } else if (priceRange === '25-50') {
          matchesPrice = (cardPrice > 25 && cardPrice <= 50);
        } else if (priceRange === '50-100') {
          matchesPrice = (cardPrice > 50 && cardPrice <= 100);
        } else if (priceRange === '100+') {
          matchesPrice = (cardPrice > 100);
        }

        const isMatch = matchesQuery && matchesCity && matchesTypology && matchesPrice;

        if (isMatch) {
          card.classList.remove('hidden');
          totalMatches++;
          if (categoryMatchCounts[cardCategory] !== undefined) {
            categoryMatchCounts[cardCategory]++;
          }
        } else {
          card.classList.add('hidden');
        }
      });

      // Show/Hide category sections based on whether they contain visible cards
      categorySections.forEach(section => {
        const visibleCards = section.querySelectorAll('[data-property-card]:not(.hidden)');
        if (visibleCards.length > 0) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });

      // Toggle Empty State
      if (noPropertiesFound) {
        if (totalMatches === 0) {
          noPropertiesFound.classList.remove('hidden');
        } else {
          noPropertiesFound.classList.add('hidden');
        }
      }

      // Update Category Badges
      categoryPills.forEach(pill => {
        const cat = pill.getAttribute('data-category');
        const badge = pill.querySelector('.category-badge');
        if (badge) {
          if (cat === 'all') {
            badge.textContent = totalMatches;
          } else if (categoryMatchCounts[cat] !== undefined) {
            badge.textContent = categoryMatchCounts[cat];
          }
        }
      });

      // Update active filter badge counter in Drawer button
      let activeFilterCount = 0;
      if (query) activeFilterCount++;
      if (city !== 'all') activeFilterCount++;
      if (typology !== 'all') activeFilterCount++;
      if (priceRange !== 'all') activeFilterCount++;
      if (activeFilterBadge) {
        if (activeFilterCount > 0) {
          activeFilterBadge.textContent = activeFilterCount;
          activeFilterBadge.classList.remove('hidden');
        } else {
          activeFilterBadge.classList.add('hidden');
        }
      }

      // Update Filter Status Summary Bar
      updateFilterStatus(totalMatches, query, city, typology, priceRange);
    }

    function updateFilterStatus(count, query, city, typology, price) {
      if (!resultsCountText) return;

      const hasActiveFilters = Boolean(query || city !== 'all' || typology !== 'all' || price !== 'all');

      if (count === 0) {
        resultsCountText.textContent = 'No estates match the selected parameters';
      } else if (!hasActiveFilters) {
        resultsCountText.textContent = 'Showing all ' + count + ' verified luxury estates';
      } else {
        resultsCountText.textContent = 'Found ' + count + ' estate' + (count === 1 ? '' : 's') + ' matching criteria';
      }

      // Render dismissible filter chips
      if (activeFilterChips) {
        activeFilterChips.innerHTML = '';

        if (query) {
          const chip = document.createElement('span');
          chip.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container border border-outline-variant/40 text-[11px] font-medium text-on-surface shadow-sm';
          chip.innerHTML = '<span>"' + query + '"</span><button type="button" aria-label="Remove search filter" class="text-on-surface-variant hover:text-primary font-bold">&times;</button>';
          chip.querySelector('button').addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            performSearch();
          });
          activeFilterChips.appendChild(chip);
        }

        if (city !== 'all') {
          const cityName = citySelect ? citySelect.options[citySelect.selectedIndex].text : city;
          const chip = document.createElement('span');
          chip.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container border border-outline-variant/40 text-[11px] font-medium text-on-surface shadow-sm';
          chip.innerHTML = '<span>' + cityName + '</span><button type="button" aria-label="Remove city filter" class="text-on-surface-variant hover:text-primary font-bold">&times;</button>';
          chip.querySelector('button').addEventListener('click', () => {
            if (citySelect) citySelect.value = 'all';
            performSearch();
          });
          activeFilterChips.appendChild(chip);
        }

        if (typology !== 'all') {
          const typeNames = {
            villas: 'Independent Villas',
            mansions: 'Imperial Mansions',
            highrise: 'High-Rise Towers',
            penthouses: 'Sky Penthouses'
          };
          const typeLabel = typeNames[typology] || typology;
          const chip = document.createElement('span');
          chip.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container border border-outline-variant/40 text-[11px] font-medium text-on-surface shadow-sm';
          chip.innerHTML = '<span>' + typeLabel + '</span><button type="button" aria-label="Remove category filter" class="text-on-surface-variant hover:text-primary font-bold">&times;</button>';
          chip.querySelector('button').addEventListener('click', () => {
            setCategory('all');
          });
          activeFilterChips.appendChild(chip);
        }

        if (price !== 'all') {
          const priceName = priceSelect ? priceSelect.options[priceSelect.selectedIndex].text : price;
          const chip = document.createElement('span');
          chip.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container border border-outline-variant/40 text-[11px] font-medium text-on-surface shadow-sm';
          chip.innerHTML = '<span>' + priceName + '</span><button type="button" aria-label="Remove price filter" class="text-on-surface-variant hover:text-primary font-bold">&times;</button>';
          chip.querySelector('button').addEventListener('click', () => {
            if (priceSelect) priceSelect.value = 'all';
            performSearch();
          });
          activeFilterChips.appendChild(chip);
        }

        if (hasActiveFilters) {
          const resetBtn = document.createElement('button');
          resetBtn.type = 'button';
          resetBtn.className = 'text-primary hover:underline text-[11px] font-semibold uppercase tracking-wider ml-1 cursor-pointer';
          resetBtn.textContent = 'Reset All';
          resetBtn.addEventListener('click', resetAll);
          activeFilterChips.appendChild(resetBtn);
        }
      }
    }

    function setCategory(cat, smoothScroll) {
      currentCategory = cat;
      if (typologySelect) {
        typologySelect.value = cat;
      }

      categoryPills.forEach(pill => {
        const pCat = pill.getAttribute('data-category');
        const badge = pill.querySelector('.category-badge');
        if (pCat === cat) {
          pill.classList.add('bg-primary', 'text-on-primary', 'font-semibold', 'shadow-md', 'shadow-primary/20', 'ring-2', 'ring-primary/20');
          pill.classList.remove('bg-surface-bright/90', 'text-on-surface', 'border-outline-variant/40');
          if (badge) {
            badge.classList.add('bg-white/20', 'text-white');
            badge.classList.remove('bg-surface-container', 'text-on-surface-variant');
          }
          // Center the active pill smoothly on mobile
          pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          pill.classList.remove('bg-primary', 'text-on-primary', 'font-semibold', 'shadow-md', 'shadow-primary/20', 'ring-2', 'ring-primary/20');
          pill.classList.add('bg-surface-bright/90', 'text-on-surface', 'border-outline-variant/40');
          if (badge) {
            badge.classList.remove('bg-white/20', 'text-white');
            badge.classList.add('bg-surface-container', 'text-on-surface-variant');
          }
        }
      });

      performSearch();

      if (smoothScroll && cat !== 'all') {
        const targetSec = document.getElementById(cat);
        if (targetSec && !targetSec.classList.contains('hidden')) {
          targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }

    function resetAll() {
      if (searchInput) searchInput.value = '';
      if (citySelect) citySelect.value = 'all';
      if (typologySelect) typologySelect.value = 'all';
      if (priceSelect) priceSelect.value = 'all';
      setCategory('all');
    }

    // Event Listeners
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        performSearch();
      });
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          performSearch();
          const firstCard = document.querySelector('[data-property-card]:not(.hidden)');
          if (firstCard) {
            firstCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        if (searchInput) {
          searchInput.value = '';
          searchInput.focus();
        }
        performSearch();
      });
    }

    if (citySelect) citySelect.addEventListener('change', performSearch);
    if (priceSelect) priceSelect.addEventListener('change', performSearch);
    if (typologySelect) {
      typologySelect.addEventListener('change', () => {
        setCategory(typologySelect.value);
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        performSearch();
        const firstCard = document.querySelector('[data-property-card]:not(.hidden)');
        if (firstCard) {
          firstCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }

    categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const cat = pill.getAttribute('data-category');
        setCategory(cat, true);
      });
    });

    if (emptyStateResetBtn) emptyStateResetBtn.addEventListener('click', resetAll);

    // Initial Search Pass to set badge counters
    performSearch();
  })();
</script>
`;

propertiesHtml = propertiesHtml.replace('</body>', `${propSearchScript}\n</body>`);

fs.writeFileSync(path.join(rootDir, 'properties.html'), propertiesHtml, 'utf8');
console.log('✅ Generated properties.html with Mobile-Smooth Categories & Functional Search Engine');

// 3. Process Services Page (with exact Stitch header & mobile drawer)
let servicesHtml = readHtml(stepFiles.services);
servicesHtml = servicesHtml.replace(/<header[\s\S]*?<\/header>/, generateStitchHeader('services'));
servicesHtml = servicesHtml.replace(/href="#services"/g, 'href="services.html"');
servicesHtml = servicesHtml.replace(/href="#developments"/g, 'href="properties.html"');
servicesHtml = servicesHtml.replace(/href="#contact"/g, 'href="contact.html"');

// Remove "Prime Real Estate Services" hero section with house background as requested
servicesHtml = servicesHtml.replace(/<!-- HERO EDITORIAL BANNER -->[\s\S]*?<\/section>/, '');

// Ensure proper top padding below navbar on the first section
servicesHtml = servicesHtml.replace(
  '<section class="w-full px-gutter-mobile lg:px-margin py-space-2xl bg-surface">',
  '<section class="w-full px-gutter-mobile lg:px-margin pt-8 sm:pt-12 pb-space-2xl bg-surface">'
);

// Minimize "Architectural Disciplines & Asset Verticals / The 7 Prime Typologies / Every vertical..." for mobile screens
servicesHtml = servicesHtml.replace(
  '<div class="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">',
  '<div class="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-space-xl gap-3 sm:gap-space-md">'
);

servicesHtml = servicesHtml.replace(
  '<span class="w-1.5 h-6 bg-primary rounded-full inline-block"></span>\n<span class="font-label-caps text-label-caps text-primary uppercase tracking-widest">Architectural Disciplines &amp; Asset Verticals</span>',
  '<span class="w-1 sm:w-1.5 h-3.5 sm:h-5 bg-primary rounded-full inline-block"></span>\n<span class="font-label-caps text-[9px] sm:text-label-caps text-primary uppercase tracking-wider sm:tracking-widest">Architectural Disciplines &amp; Asset Verticals</span>'
);

servicesHtml = servicesHtml.replace(
  '<h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">The 7 Prime Typologies of New Delhi</h2>',
  '<h2 class="font-headline-lg text-2xl sm:text-3xl lg:text-headline-lg text-on-surface tracking-tight leading-tight sm:leading-normal">The 7 Prime Typologies of New Delhi</h2>'
);

servicesHtml = servicesHtml.replace(
  '<p class="font-body-md text-body-md text-on-surface-variant max-w-md">',
  '<p class="font-body-md text-xs sm:text-body-md text-on-surface-variant max-w-md leading-relaxed">'
);

fs.writeFileSync(path.join(rootDir, 'services.html'), servicesHtml, 'utf8');
console.log('✅ Generated services.html with responsive Typologies section typography');

// 4. Process Contact Page (with exact Stitch header & mobile drawer)
let contactHtml = readHtml(stepFiles.contact);
contactHtml = contactHtml.replace(/<header[\s\S]*?<\/header>/, generateStitchHeader('contact'));
contactHtml = contactHtml.replace(/href="#services"/g, 'href="services.html"');
contactHtml = contactHtml.replace(/href="#developments"/g, 'href="properties.html"');
contactHtml = contactHtml.replace(/href="#contact"/g, 'href="contact.html"');

// Remove top most Editorial Header & Breadcrumb section as requested
contactHtml = contactHtml.replace(
  /<!-- Editorial Header & Breadcrumb Section -->[\s\S]*?<\/section>/,
  ''
);
// Ensure the main contact workstation section has proper top spacing below navbar
contactHtml = contactHtml.replace(
  '<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">',
  '<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-20 w-full">'
);

fs.writeFileSync(path.join(rootDir, 'contact.html'), contactHtml, 'utf8');
console.log('✅ Generated contact.html with top most section removed');
