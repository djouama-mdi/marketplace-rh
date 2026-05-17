/* Company shared JS — Emploitic Entreprise */

const CURRENT_FIRM = {
  id:'me', name:'Yassir Tech', email:'careers@yassir.dz', sector:'Tech', city:'Alger',
  size:'200-500', plan:'premium', since:'2023-12-01', initials:'YT'
};

const FOCAL_POINTS = [
  { id:'fp1', name:'Lina Bouzid', role:'RH — Tech', email:'lina@yassir.dz', service:'Développement', status:'active' },
  { id:'fp2', name:'Samir Hadj', role:'RH — Marketing', email:'samir@yassir.dz', service:'Marketing', status:'active' },
  { id:'fp3', name:'Nora Bensalem', role:'RH — Design', email:'nora@yassir.dz', service:'Design', status:'inactive' },
];

const OFFERS = [
  { id:'o1', title:'Développeur Full-Stack React/Node', service:'Développement', type:'CDI', city:'Alger', date:'2026-05-08', status:'active', applications:18, views:412 },
  { id:'o2', title:'UX Designer Senior', service:'Design', type:'Freelance', city:'Remote', date:'2026-05-05', status:'active', applications:9, views:267 },
  { id:'o3', title:'Chef de projet Marketing Digital', service:'Marketing', type:'CDI', city:'Alger', date:'2026-04-28', status:'active', applications:24, views:589 },
  { id:'o4', title:'DevOps AWS', service:'Développement', type:'Mission 6 mois', city:'Hybride', date:'2026-04-20', status:'archived', applications:14, views:380 },
  { id:'o5', title:'Data Analyst', service:'Data', type:'CDI', city:'Alger', date:'2026-04-12', status:'archived', applications:31, views:702 },
];

const FREELANCES = [
  { id:'f1', name:'Karim Benali', role:'Développeur Full-Stack', city:'Alger', rate:'8 000 DA/j', rating:4.9, jobs:42, skills:['React','Node.js','PostgreSQL'], avail:'Disponible' },
  { id:'f2', name:'Amina Cherifi', role:'UX/UI Designer', city:'Oran', rate:'6 500 DA/j', rating:4.8, jobs:31, skills:['Figma','Webflow','Design System'], avail:'Disponible' },
  { id:'f3', name:'Rachid Touati', role:'DevOps Engineer', city:'Alger', rate:'9 200 DA/j', rating:5.0, jobs:28, skills:['AWS','Docker','Kubernetes'], avail:'Bientôt' },
  { id:'f4', name:'Sara Mansouri', role:'Mobile Developer', city:'Constantine', rate:'7 800 DA/j', rating:4.7, jobs:19, skills:['Flutter','iOS','Android'], avail:'Disponible' },
  { id:'f5', name:'Yacine Hamel', role:'Data Scientist', city:'Alger', rate:'10 000 DA/j', rating:4.9, jobs:24, skills:['Python','ML','TensorFlow'], avail:'Disponible' },
  { id:'f6', name:'Lila Kaci', role:'Content & SEO', city:'Remote', rate:'5 500 DA/j', rating:4.6, jobs:51, skills:['SEO','Copywriting','FR/EN/AR'], avail:'Indisponible' },
  { id:'f7', name:'Omar Saadi', role:'Brand Designer', city:'Alger', rate:'6 800 DA/j', rating:4.8, jobs:36, skills:['Identity','Print','Motion'], avail:'Disponible' },
  { id:'f8', name:'Nesrine Belkacem', role:'Backend Java', city:'Annaba', rate:'8 500 DA/j', rating:4.7, jobs:22, skills:['Java','Spring','Microservices'], avail:'Disponible' },
];

const CANDIDATURES = [
  { id:'a1', offerId:'o1', offer:'Développeur Full-Stack React/Node', candidate:'Karim Benali', date:'2026-05-12', status:'pending', match:92 },
  { id:'a2', offerId:'o1', offer:'Développeur Full-Stack React/Node', candidate:'Nesrine Belkacem', date:'2026-05-11', status:'in_review', match:85 },
  { id:'a3', offerId:'o2', offer:'UX Designer Senior', candidate:'Amina Cherifi', date:'2026-05-10', status:'accepted', match:96 },
  { id:'a4', offerId:'o3', offer:'Chef de projet Marketing Digital', candidate:'Lila Kaci', date:'2026-05-10', status:'pending', match:78 },
  { id:'a5', offerId:'o3', offer:'Chef de projet Marketing Digital', candidate:'Omar Saadi', date:'2026-05-09', status:'refused', match:62 },
  { id:'a6', offerId:'o2', offer:'UX Designer Senior', candidate:'Sara Mansouri', date:'2026-05-09', status:'in_review', match:81 },
];

const MISSIONS = [
  { id:'m1', title:'Refonte plateforme e-commerce', freelance:'Amina Cherifi', start:'2026-04-01', end:'2026-06-15', progress:68, status:'in_progress', amount:'420 000 DA' },
  { id:'m2', title:'Migration AWS production', freelance:'Rachid Touati', start:'2026-03-15', end:'2026-05-30', progress:88, status:'in_progress', amount:'560 000 DA' },
  { id:'m3', title:'App mobile interne', freelance:'Sara Mansouri', start:'2026-02-01', end:'2026-05-01', progress:100, status:'review', amount:'780 000 DA' },
  { id:'m4', title:'Stratégie SEO 2026', freelance:'Lila Kaci', start:'2026-01-10', end:'2026-04-10', progress:100, status:'done', amount:'180 000 DA' },
];

const CONVERSATIONS = [
  { id:'c1', name:'Karim Benali', role:'Full-Stack Dev', initials:'KB', last:'Bonjour, je suis disponible pour échanger.', time:'10:24', unread:2,
    messages:[
      { from:'them', text:'Bonjour, je viens de postuler à votre offre Full-Stack.', time:'09:12' },
      { from:'me', text:'Bonjour Karim, merci pour votre candidature ! Êtes-vous disponible cette semaine ?', time:'09:35' },
      { from:'system', text:'🔒 Coordonnées privées — échanges via messagerie interne uniquement.' },
      { from:'them', text:'Oui, jeudi ou vendredi me conviennent.', time:'10:10' },
      { from:'them', text:'Bonjour, je suis disponible pour échanger.', time:'10:24' },
    ]},
  { id:'c2', name:'Amina Cherifi', role:'UX Designer', initials:'AC', last:'Voici ma proposition révisée.', time:'Hier', unread:0,
    messages:[
      { from:'them', text:'Bonjour, suite à notre call j\'ai préparé une proposition.', time:'Hier 14:20' },
      { from:'me', text:'Parfait, je regarde ça !', time:'Hier 14:45' },
      { from:'them', text:'Voici ma proposition révisée.', time:'Hier 16:02' },
    ]},
  { id:'c3', name:'Rachid Touati', role:'DevOps', initials:'RT', last:'Migration en cours, tout est ok.', time:'Lun', unread:0,
    messages:[
      { from:'system', text:'Mission #m2 — Migration AWS' },
      { from:'them', text:'Migration en cours, tout est ok.', time:'Lun 11:00' },
    ]},
  { id:'c4', name:'Sara Mansouri', role:'Mobile Dev', initials:'SM', last:'Livraison prête pour validation.', time:'09 mai', unread:1,
    messages:[
      { from:'them', text:'Livraison prête pour validation.', time:'09 mai' },
    ]},
];

/* ===== Helpers ===== */
function $(s, p=document){ return p.querySelector(s); }
function $$(s, p=document){ return Array.from(p.querySelectorAll(s)); }
function initials(name){ return name.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase(); }

function openModal(html){
  let back = $('#app-modal');
  if(!back){
    back = document.createElement('div');
    back.id='app-modal'; back.className='modal-back';
    document.body.appendChild(back);
    back.addEventListener('click', e=>{ if(e.target===back) back.classList.remove('show'); });
  }
  back.innerHTML = `<div class="modal">${html}</div>`;
  back.classList.add('show');
  back.querySelectorAll('[data-close]').forEach(b=> b.addEventListener('click', ()=> back.classList.remove('show')));
}
function closeModal(){ $('#app-modal')?.classList.remove('show'); }

function toast(msg, type='success'){
  const colors = {
    success: { bg:'#064e3b', shadow:'rgba(16,185,129,.35)' },
    error:   { bg:'#7f1d1d', shadow:'rgba(239,68,68,.35)' },
    info:    { bg:'#0c4a6e', shadow:'rgba(14,165,233,.35)' },
  };
  const c = colors[type] || colors.success;
  const t = document.createElement('div');
  t.style.cssText = `position:fixed;bottom:24px;right:24px;background:${c.bg};color:#fff;padding:13px 18px;border-radius:12px;z-index:9999;box-shadow:0 12px 36px ${c.shadow};font-weight:500;font-family:'DM Sans',sans-serif;font-size:.84rem;display:flex;align-items:center;gap:8px;animation:toastIn .25s ease;`;
  t.innerHTML = msg;
  document.body.appendChild(t);
  setTimeout(()=>{ t.style.opacity='0'; t.style.transition='opacity .3s'; setTimeout(()=>t.remove(),300); }, 2800);
}

/* ===== Theme Toggle (shared) ===== */
function initThemeToggle() {
  const btn  = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  if (!btn) return;

  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme','light');
      if (icon) icon.className = 'fa-solid fa-sun';
      if (btn)  btn.title = 'Passer en mode sombre';
    } else {
      root.removeAttribute('data-theme');
      if (icon) icon.className = 'fa-solid fa-moon';
      if (btn)  btn.title = 'Passer en mode clair';
    }
  }

  // Restore saved theme
  const saved = localStorage.getItem('emploitic-theme') || 'dark';
  applyTheme(saved);

  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('emploitic-theme', next);
  });
}

/* ===== Sidebar ===== */
function renderSidebar(active){
  const items = [
    ['dashboard','📊','Tableau de bord','entreprise-dashboard.html'],
    ['messagerie','💬','Messagerie','entreprise-messagerie.html'],
    ['offres','📋','Offres publiées','entreprise-offres.html'],
    ['candidatures','📨','Candidatures','entreprise-candidatures.html'],
    ['freelances','🔍','Recherche freelances','entreprise-freelance.html'],
    ['missions','🚀','Missions','entreprise-missions.html'],
    ['abonnement','👑','Abonnement','entreprise-abonnement.html'],
    ['profil','🏢','Profil entreprise','entreprise-profil.html'],
  ];
  let html = `<div class="brand"><span class="logo-mark">e</span><span>emploitic <small style="display:block;font-size:10px;font-weight:500;opacity:.5;letter-spacing:.02em">Entreprise</small></span></div>`;
  html += items.map(([id,emoji,label,href])=>`<a href="${href}" class="side-link${id===active?' active':''}"><span class="side-emoji">${emoji}</span><span>${label}</span></a>`).join('');
  html += `<div class="side-foot"><a href="index.html" class="side-link"><span class="side-emoji">🚪</span><span>Déconnexion</span></a></div>`;
  return html;
}

document.addEventListener('DOMContentLoaded', ()=>{
  // Apply saved theme immediately
  const saved = localStorage.getItem('emploitic-theme') || 'dark';
  if (saved === 'light') document.documentElement.setAttribute('data-theme','light');

  // Render sidebar
  const side = document.querySelector('[data-sidebar]');
  if(side) side.innerHTML = renderSidebar(side.dataset.sidebar);

  // Init toggle
  initThemeToggle();
});
