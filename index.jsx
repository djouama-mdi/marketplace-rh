export default function HRMarketplacePage() {
  const companies = [
    {
      name: "TalentSphere",
      sector: "Recrutement IT & Digital",
      location: "Alger",
      employees: "120+ collaborateurs",
      rating: 4.8,
      jobs: 18,
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "HR Nova",
      sector: "Conseil RH",
      location: "Oran",
      employees: "75+ collaborateurs",
      rating: 4.7,
      jobs: 12,
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "PeopleSync",
      sector: "Formation & Talent Management",
      location: "Constantine",
      employees: "200+ collaborateurs",
      rating: 4.9,
      jobs: 26,
      color: "from-sky-500 to-cyan-600",
    },
    {
      name: "WorkBridge",
      sector: "Externalisation RH",
      location: "Blida",
      employees: "95+ collaborateurs",
      rating: 4.5,
      jobs: 9,
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "NextHire Group",
      sector: "Cabinet de Recrutement",
      location: "Sétif",
      employees: "60+ collaborateurs",
      rating: 4.6,
      jobs: 15,
      color: "from-cyan-600 to-sky-700",
    },
    {
      name: "SkillMatch Pro",
      sector: "Marketplace Freelance RH",
      location: "Annaba",
      employees: "140+ collaborateurs",
      rating: 4.8,
      jobs: 21,
      color: "from-teal-500 to-cyan-700",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#00AEEF] via-[#0095D9] to-[#0F172A] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_30%)]"></div>

        <header className="relative z-10 flex items-center justify-between px-6 py-5 lg:px-16">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-xl font-bold">
              RH
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">HR Market DZ</h1>
              <p className="text-sm text-white/70">Powered by Emploitic</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
            <a href="#" className="hover:text-white transition">Entreprises</a>
            <a href="#" className="hover:text-white transition">Solutions RH</a>
            <a href="#" className="hover:text-white transition">Marketplace</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </nav>

          <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-sky-700 shadow-lg shadow-cyan-900/20 transition hover:scale-[1.02]">
            Publier une offre
          </button>
        </header>

        <div className="relative z-10 grid gap-14 px-6 pb-20 pt-10 lg:grid-cols-2 lg:px-16 lg:pb-28 lg:pt-16">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              Plateforme B2B RH en Algérie
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Le marketplace RH moderne pour les entreprises.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Une plateforme inspirée d'Emploitic permettant aux entreprises RH,
              cabinets de recrutement et prestataires talent management de se connecter,
              collaborer et recruter plus efficacement.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-2xl bg-white px-7 py-4 font-semibold text-sky-700 shadow-2xl shadow-sky-950/30 transition hover:-translate-y-0.5">
                Explorer les entreprises
              </button>

              <button className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-semibold backdrop-blur-md transition hover:bg-white/20">
                Découvrir la plateforme
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-white/80">
              <div>
                <p className="text-3xl font-black text-white">500+</p>
                <p>Entreprises partenaires</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">10K+</p>
                <p>Profils RH qualifiés</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">98%</p>
                <p>Satisfaction client</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="grid w-full max-w-xl gap-5">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60">Top partenaire</p>
                    <h3 className="mt-1 text-2xl font-bold">TalentSphere</h3>
                  </div>
                  <div className="rounded-2xl bg-emerald-400/20 px-4 py-2 text-sm font-semibold text-emerald-300">
                    +32% croissance
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-2xl font-black">18</p>
                    <p className="text-xs text-white/60">Offres</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-2xl font-black">4.8</p>
                    <p className="text-xs text-white/60">Rating</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-2xl font-black">120+</p>
                    <p className="text-xs text-white/60">Experts</p>
                  </div>
                </div>
              </div>

              <div className="ml-auto w-[85%] rounded-3xl border border-white/10 bg-slate-950/40 p-5 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500"></div>
                  <div>
                    <p className="font-semibold">Matching intelligent</p>
                    <p className="text-sm text-white/60">
                      IA & recommandations de profils
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="relative z-20 mx-auto -mt-10 w-[92%] max-w-6xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/60 lg:p-7">
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr_auto]">
            <input
              type="text"
              placeholder="Rechercher une entreprise RH, un service..."
              className="h-14 rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-sky-400"
            />

            <select className="h-14 rounded-2xl border border-slate-200 px-4 text-slate-600 outline-none focus:border-sky-400">
              <option>Secteur RH</option>
              <option>Recrutement</option>
              <option>Conseil</option>
              <option>Formation</option>
            </select>

            <select className="h-14 rounded-2xl border border-slate-200 px-4 text-slate-600 outline-none focus:border-sky-400">
              <option>Localisation</option>
              <option>Alger</option>
              <option>Oran</option>
              <option>Constantine</option>
            </select>

            <button className="h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-600 px-8 font-semibold text-white shadow-lg shadow-cyan-200 transition hover:scale-[1.01]">
              Rechercher
            </button>
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="px-6 py-20 lg:px-16">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Marketplace B2B RH
            </p>
            <h2 className="text-4xl font-black tracking-tight text-slate-900">
              Entreprises RH à découvrir
            </h2>
          </div>

          <p className="max-w-xl text-slate-500">
            Explorez les acteurs RH les plus innovants du marché : recrutement,
            externalisation, formation, conseil et solutions talent management.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/70"
            >
              <div className={`h-2 bg-gradient-to-r ${company.color}`}></div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${company.color} text-2xl font-black text-white shadow-lg`}
                    >
                      {company.name.charAt(0)}
                    </div>

                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
                      {company.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {company.sector}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-600">
                    ★ {company.rating}
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                    <span className="text-sm text-slate-500">Localisation</span>
                    <span className="font-semibold">{company.location}</span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                    <span className="text-sm text-slate-500">Équipe</span>
                    <span className="font-semibold">{company.employees}</span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                    <span className="text-sm text-slate-500">Offres actives</span>
                    <span className="font-semibold text-cyan-600">
                      {company.jobs} offres
                    </span>
                  </div>
                </div>

                <button
                  className={`mt-7 w-full rounded-2xl bg-gradient-to-r ${company.color} px-5 py-4 font-semibold text-white shadow-lg transition group-hover:scale-[1.02]`}
                >
                  Voir le profil entreprise
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-slate-900 px-6 py-20 text-white lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Pourquoi cette plateforme ?
            </p>
            <h2 className="text-4xl font-black tracking-tight">
              Une expérience RH moderne et centralisée
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Matching IA",
                text: "Recommandations intelligentes entre entreprises et talents.",
              },
              {
                title: "Dashboard RH",
                text: "Suivi des candidatures et KPI en temps réel.",
              },
              {
                title: "Marketplace B2B",
                text: "Connexion entre cabinets RH, freelances et entreprises.",
              },
              {
                title: "Responsive Design",
                text: "Expérience fluide sur desktop, tablette et mobile.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-xl font-black text-cyan-300">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-white/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-700 p-10 text-white shadow-2xl lg:p-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100">
                Marketplace RH Algérie
              </p>

              <h2 className="text-4xl font-black leading-tight tracking-tight">
                Lancez votre écosystème RH digital dès aujourd'hui.
              </h2>

              <p className="mt-5 text-lg text-white/80">
                Une vitrine moderne inspirée d'Emploitic pour présenter les entreprises RH,
                les offres B2B et les solutions de recrutement nouvelle génération.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <button className="rounded-2xl bg-white px-8 py-4 font-bold text-sky-700 transition hover:scale-[1.02]">
                Demander une démo
              </button>

              <button className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white/20">
                Voir les entreprises
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
