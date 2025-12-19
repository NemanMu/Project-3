// assets/js/menu.js
// Adds a global Menu() function that toggles the mobile navigation vertically
(function () {
  function closeMenu() {
    const nav = document.querySelector('.nav');
    const btn = document.querySelector('.menu-btn');
    if (!nav || !btn) return;
    nav.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = '☰';
  }

  window.Menu = function Menu() {
    const nav = document.querySelector('.nav');
    const btn = document.querySelector('.menu-btn');
    if (!nav || !btn) return;

    const opened = nav.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', opened ? 'true' : 'false');
    btn.textContent = opened ? '✕' : '☰';
  };

  document.addEventListener('DOMContentLoaded', () => {
    // Close menu when a link is clicked (mobile)
    const links = document.querySelectorAll('.nav .nav-links a');
    links.forEach(a => a.addEventListener('click', closeMenu));

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Close when clicking outside the nav while it's open
    document.addEventListener('click', (e) => {
      const nav = document.querySelector('.nav');
      const btn = document.querySelector('.menu-btn');
      if (!nav || !btn) return;
      if (nav.classList.contains('nav-open') && !nav.contains(e.target) && e.target !== btn) {
        closeMenu();
      }
    });
  });
})();
