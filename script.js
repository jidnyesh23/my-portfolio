// Theme toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

// Load theme from localStorage
if (localStorage.getItem('color-theme') === 'light' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
  document.documentElement.classList.remove('dark');
  lightIcon.classList.add('hidden');
  darkIcon.classList.remove('hidden');
} else {
  document.documentElement.classList.add('dark');
  darkIcon.classList.add('hidden');
  lightIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', () => {
  darkIcon.classList.toggle('hidden');
  lightIcon.classList.toggle('hidden');
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
  }
});

// Smooth scroll is handled by CSS scroll-smooth class

// Typing effect (hero tagline)
const typingEl = document.querySelector('.typing');
if (typingEl) {
  const text = typingEl.dataset.text;
  let idx = 0;
  function type() {
    typingEl.textContent = text.slice(0, idx++);
    if (idx <= text.length) {
      setTimeout(type, 100);
    }
  }
  type();
}

// Simple form validation
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('[name="name"]').value.trim();
    const email = contactForm.querySelector('[name="email"]').value.trim();
    const message = contactForm.querySelector('[name="message"]').value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email.');
      return;
    }
    // Simulate successful submission
    alert('Thank you for reaching out!');
    contactForm.reset();
  });
}