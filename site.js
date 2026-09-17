const pages = {
  home: 'index.html', about: 'about.html', training: 'training.html', boarding: 'boarding.html',
  horses: 'horses.html', sales: 'sales.html', renewables: 'renewables.html', contact: 'contact.html'
};
const navItems = [
  ['about', 'About'], ['training', 'Training'], ['boarding', 'Boarding'], ['horses', 'Our Horses'], ['sales', 'Horse Sales'], ['renewables', 'Renewables']
];

const page = document.body.dataset.page || 'home';
const href = key => pages[key];
const navLinks = navItems.map(([key, label]) => `<a href="${href(key)}"${page === key ? ' aria-current="page"' : ''}>${label}</a>`).join('');
const brand = `<a class="brand" href="${href('home')}" aria-label="Long Stride Ranch home"><span class="brand-mark">L</span><span><span class="brand-name">Long Stride Ranch</span><span class="brand-place">Wellington · Jackson Hole</span></span></a>`;

document.querySelector('[data-site-header]').innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="shell nav">
      ${brand}
      <nav class="desktop-nav" aria-label="Primary navigation">${navLinks}<a class="nav-cta" href="${href('contact')}">Start an inquiry</a></nav>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation"><span></span></button>
    </div>
  </header>
  <div class="mobile-drawer" id="mobile-menu" data-open="false" aria-hidden="true">
    <div class="mobile-drawer-top"><button class="mobile-close" type="button" aria-label="Close navigation">×</button></div>
    <nav aria-label="Mobile navigation">${navLinks}<a class="button button--dark" href="${href('contact')}">Start an inquiry</a></nav>
  </div>`;

document.querySelector('[data-site-footer]').innerHTML = `
  <footer class="site-footer"><div class="shell">
    <div class="footer-grid"><div>${brand}<p>Thoughtful horsemanship, quality horses and a personal standard of care.</p></div>
    <div><h2>Equestrian</h2><a href="${href('training')}">Training</a><a href="${href('boarding')}">Boarding</a><a href="${href('horses')}">Our Horses</a><a href="${href('sales')}">Horse Sales</a></div>
    <div><h2>Long Stride</h2><a href="${href('about')}">About</a><a href="${href('renewables')}">Renewables</a><a href="${href('contact')}">Contact</a></div></div>
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} Long Stride Ranch</span><span>Wellington, Florida · Jackson Hole, Wyoming</span></div>
  </div></footer>`;

const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const drawer = document.querySelector('.mobile-drawer');
const closeButton = document.querySelector('.mobile-close');
let lastFocused;
const setMenu = open => {
  drawer.dataset.open = String(open);
  drawer.setAttribute('aria-hidden', String(!open));
  toggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
  if (open) { lastFocused = document.activeElement; closeButton.focus(); } else { lastFocused?.focus(); }
};
toggle.addEventListener('click', () => setMenu(drawer.dataset.open !== 'true'));
closeButton.addEventListener('click', () => setMenu(false));
drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && drawer.dataset.open === 'true') setMenu(false); });
const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 30);
updateHeader(); window.addEventListener('scroll', updateHeader, { passive: true });

const inquiryForm = document.querySelector('[data-inquiry-form]');
if (inquiryForm) {
  const purchaseFields = inquiryForm.querySelector('[data-purchase-fields]');
  const interest = inquiryForm.elements.interest;
  const status = inquiryForm.querySelector('.form-status');
  const requestedInterest = new URLSearchParams(window.location.search).get('interest');
  if (requestedInterest && [...interest.options].some(option => option.value === requestedInterest)) {
    interest.value = requestedInterest;
  }
  const updateFields = () => { purchaseFields.hidden = interest.value !== 'Horse Purchase'; };
  interest.addEventListener('change', updateFields); updateFields();
  inquiryForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!inquiryForm.checkValidity()) { inquiryForm.reportValidity(); return; }
    const values = new FormData(inquiryForm);
    const lines = [...values.entries()].filter(([, value]) => value).map(([key, value]) => `${key.replace(/([A-Z])/g, ' $1')}: ${value}`);
    const subject = `Long Stride inquiry: ${values.get('interest')}`;
    window.location.href = `mailto:danielle@longstrideranch.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    status.textContent = 'Your email app should open with your inquiry addressed to Long Stride.';
  });
}
