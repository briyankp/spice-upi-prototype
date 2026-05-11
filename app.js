let currentPillar = 'home';
let currentScreen = 'home_zero';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPillar = btn.dataset.section;
      const screens = PILLAR_SCREENS[currentPillar];
      currentScreen = screens[0];
      render();
    });
  });
  render();
});

function render() {
  const screen = SCREENS[currentScreen];
  const phoneScreen = document.getElementById('phone-screen');
  const contextPanel = document.getElementById('context-content');

  // Render phone
  phoneScreen.innerHTML = R[currentScreen] ? R[currentScreen]() : '<div style="padding:40px;text-align:center">Screen not found</div>';
  phoneScreen.scrollTop = 0;

  // Animate in
  phoneScreen.style.opacity = 0;
  requestAnimationFrame(() => { phoneScreen.style.transition = 'opacity 0.3s'; phoneScreen.style.opacity = 1; });

  // Timer animation for speed_processing
  if (currentScreen === 'speed_processing') runTimer();

  // Story carousel
  if (currentScreen === 'bank_carousel') initCarousel();

  // Render context panel
  const ctx = screen.ctx;
  const pillarScreens = PILLAR_SCREENS[currentPillar];
  let scenarioBtns = pillarScreens.map(id =>
    `<button class="scenario-btn ${id===currentScreen?'active':''}" data-screen="${id}">${SCREENS[id].title}</button>`
  ).join('');

  let channelTags = (ctx.channels||[]).map(c =>
    `<span class="ctx-tag ${c}">${c.toUpperCase()}</span>`
  ).join('');

  contextPanel.innerHTML = `
    <div class="ctx-section">
      <div class="ctx-label">${ctx.label}</div>
      <div class="ctx-title">${ctx.title}</div>
      <div class="ctx-subtitle">${ctx.subtitle}</div>
    </div>
    <div class="ctx-hero-line">${ctx.hero}</div>
    <div class="ctx-section">
      <div class="ctx-label">SCREENS IN THIS PILLAR</div>
      <div class="scenario-btns">${scenarioBtns}</div>
    </div>
    <div class="ctx-divider"></div>
    <div class="ctx-section">
      <div class="ctx-label">CHANNELS USED</div>
      <div>${channelTags}</div>
    </div>
    ${getTonalityGuide()}
  `;

  // Bind scenario buttons
  document.querySelectorAll('.scenario-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentScreen = btn.dataset.screen;
      render();
    });
  });
}

function runTimer() {
  const el = document.getElementById('live-timer');
  if (!el) return;
  let t = 0;
  const iv = setInterval(() => {
    t += 0.1;
    el.textContent = t.toFixed(1) + 's';
    if (t >= 0.8) {
      clearInterval(iv);
      el.classList.remove('timer-counting');
      setTimeout(() => {
        currentScreen = 'speed_success';
        render();
        showToast('Done! ✓', '₹500 — 0.8 seconds mein.');
      }, 600);
    }
  }, 100);
}

function initCarousel() {
  const carousel = document.getElementById('storyCarousel');
  if (!carousel) return;
  const dots = document.querySelectorAll('.story-dot');
  carousel.addEventListener('scroll', () => {
    const i = Math.round(carousel.scrollLeft / carousel.offsetWidth);
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
  });
  dots.forEach(d => {
    d.addEventListener('click', () => {
      carousel.scrollTo({ left: parseInt(d.dataset.i) * carousel.offsetWidth, behavior: 'smooth' });
    });
  });
}

function showToast(title, msg) {
  const toast = document.getElementById('notification-toast');
  toast.querySelector('.toast-title').textContent = title;
  toast.querySelector('.toast-msg').textContent = msg;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 4000);
}

function getTonalityGuide() {
  return `
    <div class="ctx-divider"></div>
    <div class="ctx-section">
      <div class="ctx-label">TONALITY GUIDE</div>
      <div class="ctx-card">
        <div class="ctx-card-title">Voice: "Spice UPI Ka Dost"</div>
        <strong>Warm, not corporate.</strong> Every message feels written by a person.<br>
        <strong>Specific, not vague.</strong> Always real ₹ amounts.<br>
        <strong>Hindi-first logic.</strong> English numbers.<br>
        <strong>Never shame.</strong> Low balance = invitation, not failure.
      </div>
    </div>
  `;
}
