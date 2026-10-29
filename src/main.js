// Hero Section 240-Frame Scroll Animation (Dual Mobile / Desktop Engine)
const TOTAL_FRAMES = 240;
const canvas = document.getElementById('heroAnimationCanvas') || document.getElementById('animationCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
const track = document.getElementById('heroAnimationTrack');
const badge = document.getElementById('heroFrameCounter') || document.getElementById('frameBadge');
const playBtn = document.getElementById('heroPlayBtn');
const playText = document.getElementById('heroPlayText');
const playIcon = document.getElementById('heroPlayIcon');

const desktopImages = new Array(TOTAL_FRAMES);
const mobileImages = new Array(TOTAL_FRAMES);
let desktopPreloaded = false;
let mobilePreloaded = false;

let currentFrame = 0;
let targetFrame = 0;
let isPlaying = false;
let lastPlayTime = 0;
const frameInterval = 1000 / 30; // 30 FPS

function checkIsMobile() {
  return window.innerWidth < 768;
}

let isMobile = checkIsMobile();

function getFrameUrl(idx, forMobile) {
  const num = String(idx + 1).padStart(3, '0');
  const folder = forMobile ? '/frames-mobile' : '/frames';
  return `${folder}/ezgif-frame-${num}.jpg`;
}

function preloadSet(forMobile) {
  if (forMobile && mobilePreloaded) return;
  if (!forMobile && desktopPreloaded) return;

  if (forMobile) mobilePreloaded = true;
  else desktopPreloaded = true;

  const targetImages = forMobile ? mobileImages : desktopImages;

  const firstImg = new Image();
  firstImg.src = getFrameUrl(0, forMobile);
  firstImg.onload = () => {
    targetImages[0] = firstImg;
    if (checkIsMobile() === forMobile && Math.round(currentFrame) === 0) {
      render(0);
    }
  };
  targetImages[0] = firstImg;

  for (let i = 1; i < TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = getFrameUrl(i, forMobile);
    img.onload = () => {
      targetImages[i] = img;
      if (checkIsMobile() === forMobile && Math.round(currentFrame) === i) {
        render(currentFrame);
      }
    };
    targetImages[i] = img;
  }
}

function getLoadedImage(idx) {
  const activeImages = isMobile ? mobileImages : desktopImages;
  const bounded = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(idx)));

  if (activeImages[bounded] && activeImages[bounded].complete && activeImages[bounded].naturalWidth > 0) {
    return activeImages[bounded];
  }

  for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
    const prev = bounded - offset;
    if (prev >= 0 && activeImages[prev] && activeImages[prev].complete && activeImages[prev].naturalWidth > 0) {
      return activeImages[prev];
    }
    const next = bounded + offset;
    if (next < TOTAL_FRAMES && activeImages[next] && activeImages[next].complete && activeImages[next].naturalWidth > 0) {
      return activeImages[next];
    }
  }

  const altImages = isMobile ? desktopImages : mobileImages;
  if (altImages[bounded] && altImages[bounded].complete && altImages[bounded].naturalWidth > 0) {
    return altImages[bounded];
  }

  return null;
}

function render(frameIdx) {
  if (!canvas || !ctx) return;
  const img = getLoadedImage(frameIdx);
  if (!img || !canvas.width || !canvas.height) return;

  const cw = canvas.width;
  const ch = canvas.height;
  const iw = img.naturalWidth || (isMobile ? 1080 : 1920);
  const ih = img.naturalHeight || (isMobile ? 1920 : 1080);

  const canvasRatio = cw / ch;
  const imgRatio = iw / ih;

  let dw, dh, ox, oy;
  if (canvasRatio > imgRatio) {
    dw = cw;
    dh = cw / imgRatio;
    ox = 0;
    oy = (ch - dh) / 2;
  } else {
    dh = ch;
    dw = ch * imgRatio;
    ox = (cw - dw) / 2;
    oy = 0;
  }

  ctx.fillStyle = '#0F0E0D';
  ctx.fillRect(0, 0, cw, ch);
  ctx.drawImage(img, ox, oy, dw, dh);

  if (badge) {
    const safeIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIdx)));
    badge.textContent = `FRAME ${String(safeIdx + 1).padStart(3, '0')} / ${TOTAL_FRAMES}`;
  }
}

function resize() {
  if (!canvas) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = canvas.clientWidth * dpr || window.innerWidth * dpr;
  canvas.height = canvas.clientHeight * dpr || window.innerHeight * dpr;

  const newIsMobile = checkIsMobile();
  if (newIsMobile !== isMobile) {
    isMobile = newIsMobile;
    preloadSet(isMobile);
  }

  render(currentFrame);
}

function onScroll() {
  if (isPlaying || !track) return;

  const rect = track.getBoundingClientRect();
  const maxScroll = track.offsetHeight - window.innerHeight;
  if (maxScroll <= 0) return;

  const currentScroll = Math.max(0, -rect.top);
  const progress = Math.min(1, Math.max(0, currentScroll / maxScroll));
  targetFrame = progress * (TOTAL_FRAMES - 1);
}

function loop(timestamp) {
  if (isPlaying) {
    if (!lastPlayTime) lastPlayTime = timestamp;
    const elapsed = timestamp - lastPlayTime;

    if (elapsed > frameInterval) {
      lastPlayTime = timestamp - (elapsed % frameInterval);
      targetFrame = (targetFrame + 1) % TOTAL_FRAMES;

      if (track) {
        const maxScroll = track.offsetHeight - window.innerHeight;
        const targetScroll = track.offsetTop + (targetFrame / (TOTAL_FRAMES - 1)) * maxScroll;
        window.scrollTo(0, targetScroll);
      }
    }
  }

  const delta = targetFrame - currentFrame;
  if (Math.abs(delta) > 0.02) {
    currentFrame += delta * 0.25;
    render(currentFrame);
  } else if (Math.round(currentFrame) !== Math.round(targetFrame)) {
    currentFrame = targetFrame;
    render(currentFrame);
  }

  requestAnimationFrame(loop);
}

if (playBtn) {
  playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (playText) playText.textContent = isPlaying ? 'Pause' : 'Autoplay';
    if (playIcon) {
      if (isPlaying) {
        playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
      } else {
        playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
      }
    }
  });
}

window.addEventListener('touchstart', () => {
  if (isPlaying) {
    isPlaying = false;
    if (playText) playText.textContent = 'Autoplay';
    if (playIcon) playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
  }
}, { passive: true });

window.addEventListener('keydown', (e) => {
  if (!track) return;
  const rect = track.getBoundingClientRect();
  const isNearHero = rect.top <= 100 && rect.bottom >= 100;
  if (!isNearHero) return;

  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    if (isPlaying) {
      isPlaying = false;
      if (playText) playText.textContent = 'Autoplay';
      if (playIcon) playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
    }
    targetFrame = Math.min(TOTAL_FRAMES - 1, targetFrame + 2);
    const maxScroll = track.offsetHeight - window.innerHeight;
    window.scrollTo(0, track.offsetTop + (targetFrame / (TOTAL_FRAMES - 1)) * maxScroll);
  } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    if (isPlaying) {
      isPlaying = false;
      if (playText) playText.textContent = 'Autoplay';
      if (playIcon) playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
    }
    targetFrame = Math.max(0, targetFrame - 2);
    const maxScroll = track.offsetHeight - window.innerHeight;
    window.scrollTo(0, track.offsetTop + (targetFrame / (TOTAL_FRAMES - 1)) * maxScroll);
  }
});

window.addEventListener('resize', resize);
window.addEventListener('scroll', onScroll, { passive: true });

if (canvas) {
  resize();
  preloadSet(isMobile);
  const altFirst = new Image();
  altFirst.src = getFrameUrl(0, !isMobile);
  if (!isMobile) {
    mobileImages[0] = altFirst;
  } else {
    desktopImages[0] = altFirst;
  }
  onScroll();
  requestAnimationFrame(loop);
}
