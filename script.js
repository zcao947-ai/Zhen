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

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .about-inner, .collab-inner, .section-header').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// ===== EMAIL FORM =====
const emailForm = document.getElementById('emailForm');
emailForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input  = emailForm.querySelector('input');
  const btn    = emailForm.querySelector('button');
  const email  = input.value.trim();

  if (!email) return;

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

// ===== SMOOTH ACTIVE NAV =====
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}`
          ? 'var(--dark)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
