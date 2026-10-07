// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
  });
}

// Partner logos: show the partner's name until its logo file is added
document.querySelectorAll('.partner img').forEach((img) => {
  const fallback = () => {
    const name = document.createElement('span');
    name.className = 'partner__name';
    name.textContent = img.alt;
    img.replaceWith(name);
  };
  if (img.complete && img.naturalWidth === 0) fallback();
  else img.addEventListener('error', fallback, { once: true });
});

// Keep the copyright year current
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
