// ==== Mock data (persisted in localStorage) ====
const DEFAULT_STATE = {
  user: {
    name: 'Yacine Boudjemaa',
    initials: 'YB',
    specialty: 'Développement Web',
    plan: 'gold', // free | medium | gold

    contact: { email: 'yacine@example.com', phone: '+213 555 12 34 56' },
    bio: "Développeur full-stack — 6 ans d'expérience React/Node. Spécialisé en plateformes B2B.",
    availability: 'Disponible — 30h/sem',
    activeMissions: 3,
  },
  missions: [
    { id: 'm1', title: 'Refonte plateforme RH interne', company: 'Sonatrach Digital', status: 'En cours', active: true, progress: 65, deadline: '15 juin 2026', startedAt: '12 mars 2026', domain: 'Web', desc: "Migration de l'intranet RH vers une stack moderne (React + API REST). Inclut import des données existantes et formation de l'équipe interne.", deliverables: ['Audit technique', 'Maquettes UX validées', 'Module candidatures', 'Module entretiens', 'Module reporting'] },
    { id: 'm2', title: 'API mobile banking', company: 'CIB Algérie', status: 'En cours', active: true, progress: 40, deadline: '02 juillet 2026', startedAt: '01 avril 2026', domain: 'Web', desc: "Développement de l'API de transactions mobiles avec passerelle de paiement locale.", deliverables: ['Specs OpenAPI', 'Endpoints auth', 'Endpoints transactions', 'Tests de charge'] },
    { id: 'm3', title: 'Application e-commerce B2B', company: 'Hyproc SC', status: 'Livrée', active: false, progress: 100, deadline: '10 mai 2026', startedAt: '15 janvier 2026', domain: 'Web', desc: 'Catalogue produits et commandes pour clients pros.', deliverables: ['Catalogue', 'Panier', 'Workflow validation'] },
    { id: 'm4', title: 'Dashboard analytics', company: 'Djezzy Telecom', status: 'En attente', active: true, progress: 10, deadline: '30 août 2026', startedAt: '08 mai 2026', domain: 'Web', desc: 'Tableau de bord en temps réel sur la consommation des forfaits.', deliverables: ['Wireframes', 'Intégration', 'Tests'] },
  ],
  conversations: [
    { id: 'c1', missionId: 'm1', name: 'Sonatrach Digital', initials: 'SD', online: true, unread: 2, last: 'Pouvez-vous partager le dernier mockup ?', updatedAt: 'il y a 5 min' },
    { id: 'c2', missionId: 'm2', name: 'CIB Algérie', initials: 'CA', online: true, unread: 0, last: 'Merci pour les specs.', updatedAt: 'il y a 1h' },
    { id: 'c3', missionId: 'm4', name: 'Djezzy Telecom', initials: 'DT', online: false, unread: 1, last: 'Quand peut-on planifier le kickoff ?', updatedAt: 'hier' },
  ],
  messages: {
    c1: [
      { from: 'them', text: 'Bonjour Yacine, prêt pour le sprint 4 ?', time: '09:14' },
      { from: 'me', text: 'Bonjour ! Oui, je termine la revue ce matin.', time: '09:18' },
      { from: 'them', text: 'Parfait. Je vous partage le brief.', time: '09:20', doc: 'Brief-Sprint4.pdf' },
      { from: 'me', text: 'Reçu, je consulte et reviens vers vous.', time: '09:24' },
      { from: 'them', text: 'Pouvez-vous partager le dernier mockup ?', time: '11:02' },
    ],
    c2: [
      { from: 'them', text: 'Specs OpenAPI bien reçues.', time: 'lun 16:30' },
      { from: 'me', text: 'Super, je commence l\'implémentation auth.', time: 'lun 16:42' },
      { from: 'them', text: 'Merci pour les specs.', time: 'mar 10:11' },
    ],
    c3: [
      { from: 'them', text: 'Quand peut-on planifier le kickoff ?', time: 'hier' },
    ],
  },
  offers: [
    { id: 'o1', title: 'Plateforme e-learning B2B', company: 'Education Plus DZ', domain: 'Web', type: 'Mission', duration: '3 mois', mode: 'Remote', desc: 'Recherche freelance senior pour bâtir une plateforme LMS sur mesure.' },
    { id: 'o2', title: 'Refonte UI dashboard SaaS', company: 'Yassir Tech', domain: 'Web', type: 'Mission', duration: '6 semaines', mode: 'Hybride', desc: "Refonte complète d'un dashboard analytics existant." },
    { id: 'o3', title: 'Intégration API Open Banking', company: 'BNA Innovation', domain: 'Web', type: 'Mission', duration: '4 mois', mode: 'Remote', desc: 'Intégration normes PSD2 et tests de bout en bout.' },
  ],
  myServices: [
    { id: 's1', title: 'Audit technique React + recommandations', desc: 'Audit complet codebase + plan de refacto.' },
  ],
  myPostedMissions: [
    { id: 'pm1', title: 'Recherche QA junior pour 2 semaines', desc: 'Sous-traitance test fonctionnel sur projet Sonatrach.' },
  ],
  transactions: [
    { id: 't1', date: '01 mai 2026', label: 'Abonnement Gold — mensuel', amount: '5 900 DA', method: 'CIB Carte', status: 'Réglé' },
    { id: 't2', date: '01 avril 2026', label: 'Abonnement Gold — mensuel', amount: '5 900 DA', method: 'CIB Carte', status: 'Réglé' },
    { id: 't3', date: '01 mars 2026', label: 'Abonnement Medium — mensuel', amount: '2 900 DA', method: 'EDAHABIA', status: 'Réglé' },
    { id: 't4', date: '14 février 2026', label: 'Code promo PARTENAIRE10 appliqué', amount: '-590 DA', method: '—', status: 'Crédit' },
    { id: 't5', date: '01 février 2026', label: 'Abonnement Medium — mensuel', amount: '2 900 DA', method: 'EDAHABIA', status: 'Réglé' },
  ],
  reports: [],
};

const KEY = 'emploitic-state-v1';
function loadState() {
  try { const s = JSON.parse(localStorage.getItem(KEY)); return s ? { ...DEFAULT_STATE, ...s } : structuredClone(DEFAULT_STATE); }
  catch { return structuredClone(DEFAULT_STATE); }
}
function saveState() { localStorage.setItem(KEY, JSON.stringify(state)); }
let state = loadState();

// ==== Layout (sidebar + topbar + AI) ====
const NAV = [
  { href: 'dashboard.html', label: 'Tableau de bord', icon: '📊' },
  { href: 'offers.html', label: 'Offres marketplace', icon: '🛍️' },
  { href: 'missions.html', label: 'Mes missions', icon: '📁' },
  { href: 'messages.html', label: 'Messagerie', icon: '💬' },
  { href: 'profile.html', label: 'Mon profil', icon: '👤' },
  { href: 'subscription.html', label: 'Abonnement', icon: '⭐' },
  { href: 'transactions.html', label: 'Transactions', icon: '🧾' },
];

function renderLayout(activeKey) {
  const root = document.getElementById('layout-root');
  if (!root) return;
  const navHtml = NAV.map(n => `<a href="${n.href}" class="${n.href === activeKey ? 'active' : ''}"><span class="ic">${n.icon}</span>${n.label}</a>`).join('');
  root.innerHTML = `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-logo">e</div>
        <div class="brand-name">emploi<span>tic</span></div>
      </div>
      <div class="nav-section">Espace freelance</div>
      <nav class="nav">${navHtml}</nav>
      <div class="user-card">
        <div class="user-row">
          <div class="avatar">${state.user.initials}</div>
          <div>
            <div class="user-name">${state.user.name}</div>
            <div class="user-plan">Plan ${planLabel(state.user.plan)} · ${state.user.specialty}</div>
          </div>
        </div>
      </div>
    </aside>
    <div class="main">
      <header class="topbar">
        <div class="search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
          <input placeholder="Rechercher une mission, un contact…" />
        </div>
        <div class="topbar-actions">
          <button class="icon-btn" title="Notifications">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            <span class="dot"></span>
          </button>
          <button class="theme-toggle" id="themeToggle" title="Changer le thème">🌙</button>
          <div class="avatar" style="width:38px;height:38px">${state.user.initials}</div>
        </div>
      </header>
      <div id="page-content"></div>
    </div>
    ${state.user.plan === 'gold' ? aiChatHtml() : ''}
    <div class="modal-bg" id="modal-bg"><div class="modal" id="modal-content"></div></div>
    <div class="toast" id="toast"></div>
  `;
  if (state.user.plan === 'gold') wireAiChat();
  wireModal();
  initTheme();
}
// ==== Theme Toggle ====
function initTheme() {
  const saved = localStorage.getItem('emploitic-fl-theme') || 'light';
  applyTheme(saved);
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('emploitic-fl-theme', next);
  });
}
function applyTheme(theme) {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    if (btn) btn.textContent = '☀️';
  } else {
    root.removeAttribute('data-theme');
    if (btn) btn.textContent = '🌙';
  }
}

function planLabel(p) { return p === 'gold' ? 'Gold' : p === 'medium' ? 'Medium' : 'Gratuit'; }

// ==== AI chat (gold only) ====
function aiChatHtml() {
  return `
    <div class="ai-bubble">
      <div class="ai-panel" id="ai-panel">
        <div class="ai-header"><strong>Assistant Gold IA</strong><button id="ai-close" style="color:#fff;font-size:18px">×</button></div>
        <div class="ai-msgs" id="ai-msgs">
          <div class="ai-msg bot">Bonjour ${state.user.name.split(' ')[0]} 👋 Je suis votre assistant Gold. Je peux filtrer les offres, résumer vos missions, suggérer des contacts et bien plus.</div>
        </div>
        <div class="ai-suggest">
          <button data-q="Quelles offres me correspondent ?">Filtrer offres</button>
          <button data-q="Résume mes missions actives">Résumer missions</button>
          <button data-q="Suggère un message pro">Modèle de message</button>
          <button data-q="Conseille moi pour ma facturation">Conseil facturation</button>
        </div>
        <div class="ai-input"><input id="ai-input" placeholder="Posez votre question…"/><button id="ai-send">Envoyer</button></div>
      </div>
      <button class="ai-launcher" id="ai-launcher" title="Assistant IA Gold"></button>
    </div>
  `;
}
const AI_CANNED = [
  { match: /offre|filtre|filtrer|recommand/i, reply: () => `D'après votre spécialité « ${state.user.specialty} » et vos missions actives, je recommande : <strong>${state.offers[0].title}</strong> (${state.offers[0].company}) et <strong>${state.offers[2].title}</strong>. Je peux préparer votre candidature ?` },
  { match: /résume|missions|actives|status/i, reply: () => `Vous avez <strong>${state.missions.filter(m=>m.active && m.status==='En cours').length}</strong> missions en cours. La plus avancée est « ${state.missions[0].title} » (${state.missions[0].progress}%). Échéance la plus proche : ${state.missions[0].deadline}.` },
  { match: /message|modèle|template|écrire/i, reply: () => `Suggestion : "Bonjour, suite à votre offre, je serais ravi d'échanger sur votre besoin. Mon expertise en ${state.user.specialty} me permettrait de livrer dans les délais. Quand pouvons-nous nous appeler ?"` },
  { match: /facturation|prix|abonnement|gold/i, reply: () => `Avec le plan <strong>Gold</strong>, vous avez : contacts illimités, badge premium, top des recherches, et moi 😉. Conseil : publiez 1 nouveau service par mois pour booster votre visibilité.` },
  { match: /signal|report|abus/i, reply: () => `Pour signaler un comportement, ouvrez le profil ou la mission concernée et cliquez sur "Signaler". Notre équipe répond sous 24h.` },
];
function wireAiChat() {
  const panel = document.getElementById('ai-panel');
  document.getElementById('ai-launcher').onclick = () => panel.classList.toggle('open');
  document.getElementById('ai-close').onclick = () => panel.classList.remove('open');
  document.querySelectorAll('.ai-suggest button').forEach(b => b.onclick = () => sendAi(b.dataset.q));
  document.getElementById('ai-send').onclick = () => { const v = document.getElementById('ai-input').value; if (v.trim()) sendAi(v); };
  document.getElementById('ai-input').addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('ai-send').click(); });
}
function sendAi(text) {
  const msgs = document.getElementById('ai-msgs');
  const input = document.getElementById('ai-input');
  msgs.innerHTML += `<div class="ai-msg user">${escapeHtml(text)}</div>`;
  input.value = '';
  setTimeout(() => {
    const reply = (AI_CANNED.find(c => c.match.test(text)) || { reply: () => "Je suis là pour vous aider — précisez votre besoin (offre, mission, message, abonnement)." }).reply();
    msgs.innerHTML += `<div class="ai-msg bot">${reply}</div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 350);
  msgs.scrollTop = msgs.scrollHeight;
}

// ==== Modal helpers ====
function openModal(html) {
  const bg = document.getElementById('modal-bg');
  document.getElementById('modal-content').innerHTML = html;
  bg.classList.add('show');
}
function closeModal() { document.getElementById('modal-bg').classList.remove('show'); }
function wireModal() {
  const bg = document.getElementById('modal-bg');
  if (!bg) return;
  bg.addEventListener('click', e => { if (e.target === bg) closeModal(); });
}
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(window._tt); window._tt = setTimeout(() => t.classList.remove('show'), 2200);
}
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

// ==== Utils ====
function statusBadge(s) {
  const map = { 'En cours': 'badge-primary', 'Livrée': 'badge-gold', 'Validée': 'badge-success', 'En attente': 'badge-muted', 'Annulée': 'badge-danger' };
  return `<span class="badge ${map[s] || 'badge-muted'} badge-dot">${s}</span>`;
}
function findMission(id) { return state.missions.find(m => m.id === id); }
function findConv(id) { return state.conversations.find(c => c.id === id); }
function getQuery(k) { return new URLSearchParams(location.search).get(k); }

// ==== Report modal (used on profile + mission) ====
function openReportModal(target) {
  openModal(`
    <h3>Signaler ${target}</h3>
    <p>Décrivez le problème. Notre équipe modération vous répondra sous 24h.</p>
    <div class="field"><label>Motif</label>
      <select id="rep-reason">
        <option>Comportement abusif</option>
        <option>Tentative de contact hors plateforme</option>
        <option>Contenu trompeur</option>
        <option>Non-respect du contrat</option>
        <option>Autre</option>
      </select>
    </div>
    <div class="field"><label>Détails</label><textarea id="rep-details" placeholder="Expliquez la situation…"></textarea></div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Annuler</button>
      <button class="btn btn-primary" onclick="submitReport('${target.replace(/'/g, "\\'")}')">Envoyer le signalement</button>
    </div>
  `);
}
function submitReport(target) {
  state.reports.push({ target, reason: document.getElementById('rep-reason').value, details: document.getElementById('rep-details').value, date: new Date().toLocaleString('fr-FR') });
  saveState(); closeModal(); toast('Signalement envoyé. Merci.');
}

window.closeModal = closeModal;
window.openReportModal = openReportModal;
window.submitReport = submitReport;
