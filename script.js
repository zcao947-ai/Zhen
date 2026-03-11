// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.card, .product-card, .clip-card, .role-deep-card, .fact-card, ' +
  '.stat-card, .service-card, .music-item, .portfolio-item, ' +
  '.about-inner, .story-inner, .collab-inner, .section-header, .home-about-inner'
).forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// ===== SHOP FILTER + SEARCH (shop.html) =====
const filterBtns    = document.querySelectorAll('.filter-btn, .cat-filter .filter-btn');
const productCards  = document.querySelectorAll('.product-card');
const productCount  = document.getElementById('productCount');
const noResults     = document.getElementById('noResults');
const shopSearch    = document.getElementById('shopSearch');

let currentFilter = 'all';
let currentSearch = '';

function updateProducts() {
  let visible = 0;
  productCards.forEach(card => {
    const matchFilter = currentFilter === 'all' || card.dataset.category === currentFilter;
    const matchSearch = !currentSearch || (card.dataset.name || '').includes(currentSearch.toLowerCase());
    const show = matchFilter && matchSearch;
    card.classList.toggle('hidden', !show);
    if (show) visible++;
  });
  if (productCount) productCount.innerHTML = `Đang hiển thị <strong>${visible}</strong> sản phẩm`;
  if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.shop-filters, .cat-filter');
    if (group) group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    updateProducts();
  });
});

if (shopSearch) {
  shopSearch.addEventListener('input', (e) => {
    currentSearch = e.target.value.trim();
    updateProducts();
  });
}

// ===== CLIPS FILTER (content.html) =====
const clipCards = document.querySelectorAll('.clip-card');
document.querySelectorAll('.cat-filter .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-filter .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    clipCards.forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

// ===== PORTFOLIO TABS (portfolio.html) =====
const tabBtns   = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.getElementById(`tab-${btn.dataset.tab}`);
    if (panel) panel.classList.add('active');
  });
});

// ===== EMAIL FORM (index.html) =====
const emailForm = document.getElementById('emailForm');
if (emailForm) {
  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = emailForm.querySelector('input');
    const btn   = emailForm.querySelector('button');
    if (!input.value.trim()) return;
    btn.textContent = 'Đã đăng ký!';
    btn.style.background = 'linear-gradient(135deg, #6BCB77, #4CAF50)';
    input.value = '';
    input.placeholder = 'Cảm ơn bạn đã đăng ký!';
    input.disabled = true;
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Đăng ký';
      btn.style.background = '';
      input.placeholder = 'Email của bạn...';
      input.disabled = false;
      btn.disabled = false;
    }, 4000);
  });
}

// ===== COLLAB FORM (collab.html) =====
const collabForm = document.getElementById('collabForm');
if (collabForm) {
  collabForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = collabForm.querySelector('button[type="submit"]');
    btn.textContent = '✓ Đã gửi! Tôi sẽ phản hồi sớm nhất có thể.';
    btn.style.background = 'linear-gradient(135deg, #6BCB77, #4CAF50)';
    btn.disabled = true;
    collabForm.querySelectorAll('input, select, textarea').forEach(el => el.disabled = true);
  });
}

// ===== ACTIVE NAV ON SCROLL (homepage only) =====
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
if (sections.length && navAnchors.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--pink)' : '';
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => sectionObserver.observe(s));
}
