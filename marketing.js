/* ===== Emploitic Marketing — shared JS ===== */

const NAV = [
  { href: 'emploitic-offres-emploi.html',  label: "Offres d'emploi" },
  { href: 'emploitic-entreprises.html',    label: 'Entreprises' },
  { href: 'emploitic-services-rh.html',    label: 'Services RH' },
  { href: 'emploitic-conseils.html',       label: 'Conseils carrière' },
  { href: 'emploitic-tarifs.html',         label: 'Tarifs' },
];

const FOOTER_RES = [
  { href: 'emploitic-blog.html',         label: 'Blog carrière' },
  { href: 'emploitic-guides.html',       label: 'Guides RH' },
  { href: 'emploitic-etudes-rh.html',    label: 'Études RH' },
  { href: 'emploitic-aide.html',         label: "Centre d'aide" },
];
const FOOTER_LEGAL = [
  { href: 'emploitic-cgu.html',            label: 'CGU' },
  { href: 'emploitic-confidentialite.html',label: 'Confidentialité' },
  { href: 'emploitic-cookies.html',        label: 'Cookies' },
  { href: 'emploitic-contact.html',        label: 'Contact' },
];

function currentPage() {
  return location.pathname.split('/').pop() || 'emploitic-accueil.html';
}

function renderNav() {
  const slot = document.getElementById('site-nav');
  if (!slot) return;
  const here = currentPage();

  slot.innerHTML = `
    <div class="topbar">
      <div class="container topbar-inner">
        <div style="display:flex;gap:20px;">
          <span>📞 +213 (0) 23 50 00 00</span>
          <span>✉️ contact@emploitic.dz</span>
        </div>
        <div style="display:flex;gap:20px;">
          <a href="emploitic-aide.html">Centre d'aide</a>
          <a href="emploitic-blog.html">Blog</a>
          <span style="opacity:.7">🇫🇷 FR</span>
        </div>
      </div>
    </div>
    <header class="nav" id="mainNav">
      <div class="container nav-inner">
        <a href="emploitic-accueil.html" class="logo">
          <span class="logo-mark">e</span>
          <span class="logo-text">emploitic<span>.</span></span>
        </a>
        <nav class="nav-links">
          ${NAV.map(n => `<a href="${n.href}" class="nav-link ${here === n.href ? 'active' : ''}">${n.label}</a>`).join('')}
        </nav>
        <div class="nav-cta">
          <a href="emploitic-login.html" class="btn btn-ghost">Connexion</a>
          <a href="emploitic-register.html" class="btn btn-primary">Inscription</a>
          <button class="nav-burger" id="burger" aria-label="Menu">☰</button>
        </div>
      </div>
      <div class="nav-mobile" id="navMobile">
        ${NAV.map(n => `<a href="${n.href}" class="${here === n.href ? 'active' : ''}">${n.label}</a>`).join('')}
        <a href="emploitic-login.html">Connexion</a>
        <a href="emploitic-register.html">Inscription</a>
      </div>
    </header>
  `;

  const nav = document.getElementById('mainNav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const burger = document.getElementById('burger');
  const mobile = document.getElementById('navMobile');
  burger.addEventListener('click', () => {
    mobile.classList.toggle('open');
    burger.textContent = mobile.classList.contains('open') ? '✕' : '☰';
  });
}

function renderFooter() {
  const slot = document.getElementById('site-footer');
  if (!slot) return;
  slot.innerHTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="brand">
          <a href="emploitic-accueil.html" class="logo">
            <span class="logo-mark">e</span>
            <span class="logo-text" style="color:#fff;">emploitic<span>.</span></span>
          </a>
          <p>La marketplace B2B RH n°1 en Algérie. Connectons entreprises, freelances et talents dans un même écosystème.</p>
          <div class="social">
            <a href="emploitic-contact.html" title="LinkedIn">in</a>
            <a href="emploitic-contact.html" title="Facebook">f</a>
            <a href="emploitic-contact.html" title="X">𝕏</a>
            <a href="emploitic-contact.html" title="Instagram">ig</a>
          </div>
        </div>
        <div>
          <h4>Plateforme</h4>
          <ul>${NAV.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h4>Ressources</h4>
          <ul>${FOOTER_RES.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h4>Légal</h4>
          <ul>${FOOTER_LEGAL.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}</ul>
        </div>
      </div>
      <div style="border-top:1px solid rgba(255,255,255,.08)">
        <div class="container footer-bottom">
          <div>© ${new Date().getFullYear()} Emploitic — Tous droits réservés.</div>
          <div>Fait avec ❤️ en 🇩🇿 Algérie</div>
        </div>
      </div>
    </footer>
  `;
}

function bindFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q')?.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
}

/* Scroll-reveal: any element with .reveal animates when entering viewport */
function bindReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(e => e.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  bindFAQ();
  bindReveal();
});
