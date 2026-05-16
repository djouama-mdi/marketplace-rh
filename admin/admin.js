/* Admin shared JS — Emploitic */

/* ===== Mock data ===== */
const PENDING_COMPANIES = [
  { id:'p1', name:'Sonatrach Digital', email:'rh@sonatrach.dz', sector:'Énergie', city:'Alger', date:'2026-05-10', size:'500+' },
  { id:'p2', name:'Cevital Tech', email:'hr@cevital.com', sector:'Industrie', city:'Béjaïa', date:'2026-05-11', size:'200-500' },
  { id:'p3', name:'Djezzy Innov', email:'recrut@djezzy.dz', sector:'Télécom', city:'Alger', date:'2026-05-12', size:'500+' },
  { id:'p4', name:'BioPharm Algérie', email:'rh@biopharm.dz', sector:'Santé', city:'Oran', date:'2026-05-12', size:'100-200' },
  { id:'p5', name:'Mobilis Solutions', email:'rh@mobilis.dz', sector:'Télécom', city:'Alger', date:'2026-05-13', size:'500+' },
];

const COMPANIES = [
  { id:'c1', name:'Ooredoo Algérie', email:'contact@ooredoo.dz', sector:'Télécom', city:'Alger', plan:'gold', missions:24, since:'2024-03-12', status:'active', loyalty:'★★★★★' },
  { id:'c2', name:'Naftal SPA', email:'rh@naftal.dz', sector:'Énergie', city:'Alger', plan:'silver', missions:11, since:'2024-08-22', status:'active', loyalty:'★★★★' },
  { id:'c3', name:'Condor Electronics', email:'rh@condor.dz', sector:'Industrie', city:'Bordj Bou Arréridj', plan:'gold', missions:18, since:'2024-01-08', status:'active', loyalty:'★★★★★' },
  { id:'c4', name:'BNP Paribas El Djazaïr', email:'rh@bnp.dz', sector:'Banque', city:'Alger', plan:'silver', missions:9, since:'2024-11-04', status:'active', loyalty:'★★★' },
  { id:'c5', name:'Yassir Tech', email:'careers@yassir.com', sector:'Tech', city:'Alger', plan:'gold', missions:32, since:'2023-12-01', status:'active', loyalty:'★★★★★' },
  { id:'c6', name:'Saidal Group', email:'rh@saidal.dz', sector:'Pharma', city:'Alger', plan:'bronze', missions:4, since:'2025-02-18', status:'suspended', loyalty:'★★' },
  { id:'c7', name:'BDL Banque', email:'recrut@bdl.dz', sector:'Banque', city:'Alger', plan:'silver', missions:7, since:'2025-01-22', status:'active', loyalty:'★★★' },
  { id:'c8', name:'Algérie Télécom', email:'rh@at.dz', sector:'Télécom', city:'Alger', plan:'gold', missions:21, since:'2024-05-30', status:'active', loyalty:'★★★★' },
];

const REPORTS = [
  { id:'r1', target:'Offre — "Dev Senior Fictif"', firm:'Société X', reason:'Offre frauduleuse', date:'2026-05-10', status:'pending', severity:'high' },
  { id:'r2', target:'Profil — Karim B.', firm:'Yassir Tech', reason:'Comportement inapproprié', date:'2026-05-09', status:'in_progress', severity:'medium' },
  { id:'r3', target:'Commentaire — #4521', firm:'Naftal SPA', reason:'Spam répétitif', date:'2026-05-08', status:'resolved', severity:'low', action:'Commentaire supprimé' },
  { id:'r4', target:'Offre — "Stage non rémunéré"', firm:'Société Y', reason:'Non conforme', date:'2026-05-07', status:'refused', severity:'low' },
  { id:'r5', target:'Profil — Omar K.', firm:'Condor', reason:'Faux diplôme', date:'2026-05-06', status:'pending', severity:'high' },
  { id:'r6', target:'Entreprise — InfoSphere', firm:'Plusieurs', reason:'Multiples plaintes', date:'2026-05-05', status:'in_progress', severity:'high' },
];

const PROMOS = [
  { code:'GOLD-OOREDOO-25', firm:'Ooredoo Algérie', type:'Discount 25%', start:'2026-05-01', end:'2026-07-31', status:'active' },
  { code:'EXT-YASSIR-3M', firm:'Yassir Tech', type:'Prolongement +3 mois', start:'2026-04-15', end:'2026-07-15', status:'active' },
  { code:'BRZ-NEW-15', firm:'Toutes nouvelles', type:'Discount 15%', start:'2026-06-01', end:'2026-06-30', status:'upcoming' },
  { code:'GLD-CONDOR-20', firm:'Condor', type:'Discount 20%', start:'2026-02-01', end:'2026-04-30', status:'expired' },
  { code:'SLV-NAFTAL-10', firm:'Naftal SPA', type:'Discount 10%', start:'2026-01-10', end:'2026-03-10', status:'expired' },
];

/* ===== Helpers ===== */
function $(s, p=document){ return p.querySelector(s); }
function $$(s, p=document){ return Array.from(p.querySelectorAll(s)); }
function initials(name){ return name.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase(); }

/* ===== Modal ===== */
function openModal(html){
  let back = $('#admin-modal');
  if(!back){
    back = document.createElement('div');
    back.id = 'admin-modal'; back.className = 'modal-back';
    document.body.appendChild(back);
    back.addEventListener('click', e=>{ if(e.target===back) back.classList.remove('show'); });
  }
  back.innerHTML = `<div class="modal">${html}</div>`;
  back.classList.add('show');
  back.querySelectorAll('[data-close]').forEach(b=> b.addEventListener('click', ()=> back.classList.remove('show')));
}
function closeModal(){ $('#admin-modal')?.classList.remove('show'); }
function toast(msg){
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:linear-gradient(135deg,#13131f,#1a1a2e);color:#f0f0ff;padding:14px 20px;border-radius:14px;z-index:200;box-shadow:0 20px 60px rgba(0,0,0,0.7),0 0 0 1px rgba(255,255,255,0.08);font-weight:500;animation:slideIn .3s;font-family:\'DM Sans\',sans-serif;font-size:0.9rem;';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=> t.remove(), 2800);
}

