async function checkPassword() {
  const password = document.getElementById("password").value;

  const SUPABASE_URL = "https://hikjsrlutktilnqsexil.supabase.co";
  const SUPABASE_KEY = "sb_publishable_PY2rb6a_7wmWZZV1SNCfbQ_zxlXeqco";

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/passwords?id=eq.1`,
      {
        method: "GET",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      }
    );

    const data = await response.json();

    // sécurité : vérifier si données existent
    if (!data || data.length === 0) {
      document.getElementById("error").innerText =
        "Erreur serveur";
      return;
    }

    const realPassword = data[0].password;

    if (password === realPassword) {
      window.location.href = "app.html";
    } else {
      document.getElementById("error").innerText =
        "Mot de passe incorrect";
    }

  } catch (error) {
    console.error(error);
    document.getElementById("error").innerText =
      "Erreur de connexion à la base de données";
  }
}

/* ==========================================================
   Emploitic Marketplace — JS global
   Vanilla JS — navbar, scroll reveal, filtres, messagerie...
   ========================================================== */

/* ---------- Navbar scroll & mobile menu ---------- */
(function navbarBehavior() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const burger = document.querySelector('.nav-burger');
  const links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', () => links.classList.toggle('open'));
  }
})();

/* ---------- Scroll reveal animations ---------- */
(function scrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length || !('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

/* ---------- Counters animation ---------- */
(function counters() {
  const nums = document.querySelectorAll('[data-count]');
  if (!nums.length) return;
  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1500;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = (target % 1 === 0 ? Math.floor(val).toLocaleString('fr-FR') : val.toFixed(1)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: .5 });
  nums.forEach(n => io.observe(n));
})();

/* ==========================================================
   DATA — offres simulées (partagées)
   ========================================================== */
const OFFERS = [
  { id: 1, company: 'Sonatrach RH', initials: 'SR', eyebrow: 'SIRH SOLUTION', title: 'Mise en place SIRH complet',
    desc: "Déploiement d'un système d'information RH pour 2 000 collaborateurs sur 3 sites stratégiques.",
    budget: '450 000 DZD', loc: 'Alger', type: 'CDI', remote: 'Hybride', xp: 'Senior',
    tags: ['SIRH', 'Workday', 'Conduite du changement'], cat: 'sirh' },
  { id: 2, company: 'Djezzy Talent', initials: 'DT', eyebrow: 'RECRUTEMENT IT', title: 'Recrutement 15 profils Tech',
    desc: 'Sourcing et préqualification de développeurs Full-Stack et DevOps pour scale-up.',
    budget: '180 000 DZD', loc: 'Alger', type: 'Mission', remote: 'Remote', xp: 'Confirmé',
    tags: ['Recrutement', 'IT', 'Sourcing'], cat: 'recrutement' },
  { id: 3, company: 'Cevital Industries', initials: 'CI', eyebrow: 'AUDIT & CONSEIL', title: 'Audit social & QVT 2026',
    desc: "Diagnostic complet de la qualité de vie au travail sur 5 sites industriels.",
    budget: '320 000 DZD', loc: 'Béjaïa', type: 'CDD', remote: 'Présentiel', xp: 'Senior',
    tags: ['QVT', 'Audit', 'Conseil'], cat: 'conseil' },
  { id: 4, company: 'Ooredoo Algérie', initials: 'OA', eyebrow: 'FORMATION', title: 'Programme Leadership Managers',
    desc: "Conception et animation d'un parcours de formation managériale pour 80 cadres.",
    budget: '210 000 DZD', loc: 'Alger', type: 'Mission', remote: 'Hybride', xp: 'Senior',
    tags: ['Formation', 'Leadership', 'Coaching'], cat: 'formation' },
  { id: 5, company: 'BNP Paribas El Djazaïr', initials: 'BP', eyebrow: 'EXPÉRIENCE COLLABORATEUR', title: 'Refonte process Onboarding',
    desc: "Optimisation digitale du parcours d'intégration des nouveaux collaborateurs.",
    budget: '140 000 DZD', loc: 'Alger', type: 'CDI', remote: 'Hybride', xp: 'Confirmé',
    tags: ['Onboarding', 'UX RH', 'Digital'], cat: 'sirh' },
  { id: 6, company: 'Condor Electronics', initials: 'CE', eyebrow: 'MARQUE EMPLOYEUR', title: 'Stratégie Marque Employeur',
    desc: "Définition de la marque employeur et campagne d'attractivité 2026.",
    budget: '275 000 DZD', loc: 'Bordj Bou Arreridj', type: 'Mission', remote: 'Hybride', xp: 'Senior',
    tags: ['Marque employeur', 'Communication RH'], cat: 'marketing' },
  { id: 7, company: 'Mobilis Telecom', initials: 'MT', eyebrow: 'FORMATION DIGITALE', title: 'Plan de Formation Digital 2026',
    desc: 'Construction du plan de formation digital pour 800 collaborateurs.',
    budget: '195 000 DZD', loc: 'Alger', type: 'CDD', remote: 'Remote', xp: 'Confirmé',
    tags: ['Formation', 'E-learning'], cat: 'formation' },
  { id: 8, company: 'Hydra Pharm', initials: 'HP', eyebrow: 'PAIE & CONFORMITÉ', title: 'Audit Conformité Paie',
    desc: 'Vérification de conformité du processus paie et déclarations sociales.',
    budget: '95 000 DZD', loc: 'Alger', type: 'Mission', remote: 'Présentiel', xp: 'Senior',
    tags: ['Paie', 'Conformité', 'Audit'], cat: 'conseil' },
  { id: 9, company: 'NCA Rouiba', initials: 'NR', eyebrow: 'COACHING', title: 'Coaching Codir',
    desc: 'Accompagnement coaching collectif du comité de direction sur 6 mois.',
    budget: '160 000 DZD', loc: 'Rouiba', type: 'Mission', remote: 'Hybride', xp: 'Senior',
    tags: ['Coaching', 'Codir'], cat: 'formation' },
  { id: 10, company: 'Air Algérie', initials: 'AA', eyebrow: 'GPEC', title: 'GPEC & Mobilité interne',
    desc: 'Mise en place d\'une démarche GPEC pour anticiper les besoins en compétences.',
    budget: '380 000 DZD', loc: 'Alger', type: 'Mission', remote: 'Hybride', xp: 'Senior',
    tags: ['GPEC', 'Mobilité', 'Stratégie'], cat: 'conseil' },
  { id: 11, company: 'Naftal', initials: 'NF', eyebrow: 'SIRH SOLUTION', title: 'Migration SIRH Cloud',
    desc: 'Migration de l\'ancien SIRH vers une solution Cloud SaaS pour 5 000 collaborateurs.',
    budget: '520 000 DZD', loc: 'Alger', type: 'Mission', remote: 'Hybride', xp: 'Senior',
    tags: ['SIRH', 'Cloud', 'Migration'], cat: 'sirh' },
  { id: 12, company: 'Yassir', initials: 'YS', eyebrow: 'TALENT ACQUISITION', title: 'Recrutement massif Drivers',
    desc: 'Campagne de recrutement et onboarding de 200 chauffeurs partenaires.',
    budget: '220 000 DZD', loc: 'Multi-villes', type: 'Mission', remote: 'Hybride', xp: 'Confirmé',
    tags: ['Recrutement', 'Volume', 'Mobilité'], cat: 'recrutement' },
  { id: 13, company: 'Saidal', initials: 'SD', eyebrow: 'DÉMATÉRIALISATION', title: 'Dématérialisation dossiers RH',
    desc: 'Numérisation et archivage électronique des 12 000 dossiers du personnel.',
    budget: '180 000 DZD', loc: 'Alger', type: 'CDD', remote: 'Présentiel', xp: 'Confirmé',
    tags: ['Dématérialisation', 'Archivage', 'RGPD'], cat: 'sirh' },
  { id: 14, company: 'Schneider Electric DZ', initials: 'SE', eyebrow: 'TALENT MANAGEMENT', title: 'Programme High Potentials',
    desc: 'Identification et développement des talents à fort potentiel sur 18 mois.',
    budget: '290 000 DZD', loc: 'Alger', type: 'Mission', remote: 'Hybride', xp: 'Senior',
    tags: ['Talents', 'Développement', 'Assessment'], cat: 'formation' },
  { id: 15, company: 'Hassi Messaoud Energy', initials: 'HM', eyebrow: 'SANTÉ & SÉCURITÉ', title: 'Démarche RPS & Bien-être',
    desc: 'Prévention des risques psychosociaux sur sites pétroliers à fort enjeu.',
    budget: '240 000 DZD', loc: 'Hassi Messaoud', type: 'Mission', remote: 'Présentiel', xp: 'Senior',
    tags: ['RPS', 'QVT', 'Prévention'], cat: 'conseil' },
  { id: 16, company: 'BDL Banque', initials: 'BD', eyebrow: 'PILOTAGE RH', title: 'Tableaux de bord & KPI RH',
    desc: 'Construction d\'un dashboard de pilotage RH avec 30+ indicateurs clés.',
    budget: '150 000 DZD', loc: 'Alger', type: 'Mission', remote: 'Remote', xp: 'Confirmé',
    tags: ['Pilotage', 'Data RH', 'KPI'], cat: 'sirh' },
];

/* ---------- Render: offres landing (3) ---------- */
(function renderHomeOffers() {
  const grid = document.querySelector('[data-home-offers]');
  if (!grid) return;
  grid.innerHTML = OFFERS.slice(0, 6).map(offerCardHTML).join('');
})();

/* ---------- Render: page recherche ---------- */
(function renderSearch() {
  const list = document.querySelector('[data-search-list]');
  if (!list) return;

  const state = {
    q: '',
    cats: new Set(),
    types: new Set(),
    remotes: new Set(),
    xps: new Set(),
    budgetMax: 500000,
    sort: 'recent',
  };

  const apply = () => {
    let arr = OFFERS.filter(o => {
      if (state.q && !(`${o.title} ${o.company} ${o.tags.join(' ')}`.toLowerCase().includes(state.q.toLowerCase()))) return false;
      if (state.cats.size && !state.cats.has(o.cat)) return false;
      if (state.types.size && !state.types.has(o.type)) return false;
      if (state.remotes.size && !state.remotes.has(o.remote)) return false;
      if (state.xps.size && !state.xps.has(o.xp)) return false;
      const num = parseInt(o.budget.replace(/\D/g, ''), 10);
      if (num > state.budgetMax) return false;
      return true;
    });
    if (state.sort === 'budget-desc') arr.sort((a,b)=>parseInt(b.budget.replace(/\D/g,''))-parseInt(a.budget.replace(/\D/g,'')));
    if (state.sort === 'budget-asc') arr.sort((a,b)=>parseInt(a.budget.replace(/\D/g,''))-parseInt(b.budget.replace(/\D/g,'')));

    list.innerHTML = arr.length
      ? arr.map(searchRowHTML).join('')
      : `<div class="panel" style="text-align:center;color:var(--text-muted)"><i class="fa-solid fa-magnifying-glass" style="font-size:2rem;color:var(--text-muted);margin-bottom:8px"></i><p>Aucune offre ne correspond à vos critères.</p></div>`;
    const count = document.querySelector('[data-results-count]');
    if (count) count.textContent = arr.length;
  };

  document.querySelector('[data-search-input]')?.addEventListener('input', e => { state.q = e.target.value; apply(); });
  document.querySelector('[data-sort]')?.addEventListener('change', e => { state.sort = e.target.value; apply(); });
  document.querySelector('[data-budget]')?.addEventListener('input', e => {
    state.budgetMax = parseInt(e.target.value, 10);
    document.querySelector('[data-budget-val]').textContent = state.budgetMax.toLocaleString('fr-FR') + ' DZD';
    apply();
  });
  document.querySelectorAll('[data-filter]').forEach(cb => {
    cb.addEventListener('change', e => {
      const { filter } = cb.dataset;
      const set = state[filter];
      if (cb.checked) set.add(cb.value); else set.delete(cb.value);
      apply();
    });
  });

  apply();
})();

/* ---------- Card template ---------- */
function offerCardHTML(o) {
  return `
  <article class="offer-card reveal">
    <div class="offer-head">
      <div class="company-logo">${o.initials}</div>
      <div>
        <div class="company">${o.company}</div>
        <h4>${o.loc} · ${o.type}</h4>
      </div>
    </div>
    <h3>${o.title}</h3>
    <p class="offer-desc">${o.desc}</p>
    <div class="tags">${o.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    <div class="offer-meta">
      <span><i class="fa-solid fa-location-dot"></i>${o.loc}</span>
      <span><i class="fa-solid fa-laptop"></i>${o.remote}</span>
      <span><i class="fa-solid fa-user-tie"></i>${o.xp}</span>
    </div>
    <div class="offer-foot">
      <div class="budget">${o.budget}<small>Budget mission</small></div>
      <a href="offre-details.html?id=${o.id}" class="btn btn-outline">Voir plus <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </article>`;
}

function searchRowHTML(o) {
  return `
  <article class="offer-card">
    <div class="company-logo" style="width:60px;height:60px;font-size:1.1rem">${o.initials}</div>
    <div class="col-main">
      <div class="company" style="color:var(--primary);font-weight:600;font-size:.85rem">${o.company}</div>
      <h3 style="margin:2px 0 4px">${o.title}</h3>
      <p class="offer-desc">${o.desc}</p>
      <div class="tags">${o.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="offer-meta" style="margin-top:6px">
        <span><i class="fa-solid fa-location-dot"></i>${o.loc}</span>
        <span><i class="fa-solid fa-laptop"></i>${o.remote}</span>
        <span><i class="fa-solid fa-briefcase"></i>${o.type}</span>
        <span><i class="fa-solid fa-user-tie"></i>${o.xp}</span>
      </div>
    </div>
    <div class="col-side">
      <div class="budget" style="text-align:right">${o.budget}<small>Budget</small></div>
      <a href="offre-details.html?id=${o.id}" class="btn btn-primary">Voir l'offre</a>
    </div>
  </article>`;
}

/* ---------- Page detail: hydrate from id ---------- */
(function hydrateDetail() {
  if (!document.querySelector('[data-detail]')) return;
  const id = parseInt(new URLSearchParams(location.search).get('id') || '1', 10);
  const o = OFFERS.find(x => x.id === id) || OFFERS[0];
  const set = (sel, val) => { const el = document.querySelector(sel); if (el) el.textContent = val; };
  set('[data-d-company]', o.company);
  set('[data-d-title]', o.title);
  set('[data-d-loc]', o.loc);
  set('[data-d-budget]', o.budget);
  set('[data-d-budget-2]', o.budget);
  set('[data-d-type]', o.type);
  set('[data-d-remote]', o.remote);
  set('[data-d-xp]', o.xp);
  set('[data-d-initials]', o.initials);
  const tagsBox = document.querySelector('[data-d-tags]');
  if (tagsBox) tagsBox.innerHTML = o.tags.map(t=>`<span class="tag">${t}</span>`).join('');
})();

/* ==========================================================
   FORMS — login & register
   ========================================================== */
(function authForms() {
  const login = document.querySelector('[data-form-login]');
  if (login) {
    login.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(login);
      const errs = [];
      if (!/^\S+@\S+\.\S+$/.test(fd.get('email'))) errs.push('Email invalide.');
      if ((fd.get('password') || '').length < 6) errs.push('Mot de passe trop court (6+).');
      const errBox = login.querySelector('.form-error');
      const msgBox = login.querySelector('.form-msg');
      if (errs.length) { errBox.textContent = errs[0]; msgBox.textContent = ''; return; }
      errBox.textContent = '';
      msgBox.textContent = 'Connexion réussie ! Redirection...';
      setTimeout(() => location.href = 'choixDash.html', 900);
    });
  }

  const reg = document.querySelector('[data-form-register]');
  if (reg) {
    reg.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(reg);
      const errs = [];
      if (!fd.get('first') || !fd.get('last')) errs.push('Nom et prénom requis.');
      if (!/^\S+@\S+\.\S+$/.test(fd.get('email'))) errs.push('Email invalide.');
      if ((fd.get('password') || '').length < 6) errs.push('Mot de passe trop court (6+).');
      if (fd.get('password') !== fd.get('confirm')) errs.push('Les mots de passe ne correspondent pas.');
      if (!fd.get('account')) errs.push('Sélectionne un type de compte.');
      const errBox = reg.querySelector('.form-error');
      const msgBox = reg.querySelector('.form-msg');
      if (errs.length) { errBox.textContent = errs[0]; msgBox.textContent = ''; return; }
      errBox.textContent = '';
      msgBox.textContent = 'Compte créé ! Redirection vers la connexion...';
      setTimeout(() => location.href = 'login.html', 1100);
    });
  }
})();

/* ==========================================================
   MESSAGERIE
   ========================================================== */
(function chat() {
  const shell = document.querySelector('[data-chat]');
  if (!shell) return;

  const conversations = [
    { id: 1, name: 'Sarah Bensalem', company: 'Sonatrach RH', initials: 'SB', online: true,
      messages: [
        { from: 'them', text: 'Bonjour ! Merci pour votre candidature sur la mission SIRH.', t: '10:21' },
        { from: 'them', text: 'Auriez-vous une disponibilité pour un échange demain ?', t: '10:22' },
        { from: 'me',   text: 'Bonjour Sarah, avec plaisir ! Demain 14h vous conviendrait ?', t: '10:30' },
      ]},
    { id: 2, name: 'Karim Hadj', company: 'Djezzy Talent', initials: 'KH', online: true,
      messages: [
        { from: 'them', text: 'Pouvez-vous nous envoyer votre proposition détaillée ?', t: '09:14' },
      ]},
    { id: 3, name: 'Amina Cherif', company: 'Cevital', initials: 'AC', online: false,
      messages: [
        { from: 'them', text: 'Le rapport d’audit QVT est-il prêt ?', t: 'Hier' },
      ]},
    { id: 4, name: 'Yacine Belkacem', company: 'Ooredoo', initials: 'YB', online: true,
      messages: [
        { from: 'them', text: 'Super session aujourd’hui, merci !', t: 'Lun' },
      ]},
  ];

  let activeId = conversations[0].id;

  const sidebar = shell.querySelector('[data-conv-list]');
  const header = shell.querySelector('[data-chat-header]');
  const body = shell.querySelector('[data-chat-body]');
  const form = shell.querySelector('[data-chat-form]');
  const input = shell.querySelector('[data-chat-input]');

  function renderList() {
    sidebar.innerHTML = conversations.map(c => {
      const last = c.messages[c.messages.length - 1];
      return `
        <div class="conv ${c.id===activeId?'active':''}" data-id="${c.id}">
          <div class="av ${c.online?'online':''}">${c.initials}</div>
          <div class="conv-meta">
            <div class="top"><b>${c.name}</b><time>${last?.t || ''}</time></div>
            <p>${last?.text || 'Nouvelle conversation'}</p>
          </div>
        </div>`;
    }).join('');
    sidebar.querySelectorAll('.conv').forEach(el => {
      el.addEventListener('click', () => {
        activeId = parseInt(el.dataset.id, 10);
        renderAll();
        if (window.innerWidth <= 720) shell.classList.remove('show-list');
      });
    });
  }

  function renderHeader() {
    const c = conversations.find(x => x.id === activeId);
    header.innerHTML = `
      <button class="icon-btn" data-back style="display:none"><i class="fa-solid fa-arrow-left"></i></button>
      <div class="av">${c.initials}</div>
      <div>
        <b>${c.name}</b>
        <small>${c.online ? '<i class="fa-solid fa-circle"></i>En ligne · ' : ''}${c.company}</small>
      </div>
      <div class="actions">
        <button class="icon-btn" title="Appel"><i class="fa-solid fa-phone"></i></button>
        <button class="icon-btn" title="Vidéo"><i class="fa-solid fa-video"></i></button>
        <button class="icon-btn" title="Plus"><i class="fa-solid fa-ellipsis"></i></button>
      </div>`;
  }

  function renderBody() {
    const c = conversations.find(x => x.id === activeId);
    body.innerHTML = c.messages.map(m =>
      `<div class="bubble ${m.from}">${escapeHTML(m.text)}<time>${m.t}</time></div>`
    ).join('');
    body.scrollTop = body.scrollHeight;
  }

  function renderAll() { renderList(); renderHeader(); renderBody(); }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const txt = input.value.trim();
    if (!txt) return;
    const c = conversations.find(x => x.id === activeId);
    const now = new Date();
    const t = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
    c.messages.push({ from: 'me', text: txt, t });
    input.value = '';
    renderAll();
    // Réponse auto simulée
    setTimeout(() => {
      const replies = [
        'Très bien noté, je reviens vers vous rapidement.',
        'Merci pour votre retour 👍',
        'Pouvez-vous préciser un peu plus ?',
        'Je consulte l’équipe et vous tiens informé.',
      ];
      c.messages.push({ from: 'them', text: replies[Math.floor(Math.random()*replies.length)], t });
      renderAll();
    }, 900);
  });

  renderAll();
})();

function escapeHTML(s) {
  return s.replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
