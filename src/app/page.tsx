/* ─────────────────────────────────────────────────
   GitHub Career Analyzer — Landing Page
   ───────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ── Background glow orbs ──────────────────── */}
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <div className="animate-glow absolute -top-[30%] right-[10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
        <div className="animate-glow absolute -bottom-[30%] left-[5%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.10)_0%,transparent_70%)]" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[20%] left-[40%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)]" />
      </div>

      {/* ── Navigation ───────────────────────────── */}
      <header className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue to-emerald">
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">
              GitHub Career Analyzer
            </span>
          </a>

          {/* Links */}
          <div className="hidden items-center gap-8 md:flex">
            {["Features", "Pricing", "Docs"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
            <a
              href="#signin"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Sign In
            </a>
          </div>

          {/* CTA */}
          <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-slate-100 hover:shadow-lg hover:shadow-white/10">
            Get Started
          </button>
        </nav>
      </header>

      {/* ── Hero Section ─────────────────────────── */}
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-8 lg:pt-28 lg:pb-24">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            {/* ── Left: Copy ────────────────────── */}
            <div className="animate-slide-up">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue-soft px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue" />
                </span>
                <span className="text-xs font-medium tracking-wide text-blue">
                  AI-Powered Career Intelligence
                </span>
              </div>

              {/* Headline */}
              <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
                Upload your GitHub.
                <br />
                <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
                  Discover your real developer value.
                </span>
              </h1>

              {/* Description */}
              <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-400">
                Analyze repositories, code quality, technologies, contribution
                patterns, and career readiness using AI.
              </p>

              {/* CTAs */}
              <div className="mb-8 flex flex-wrap items-center gap-4">
                <button className="group relative rounded-xl bg-gradient-to-r from-blue to-blue-600 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue/25 transition-all hover:shadow-xl hover:shadow-blue/30">
                  <span className="relative z-10 flex items-center gap-2">
                    Analyze GitHub
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="glass glass-hover rounded-xl px-7 py-3.5 text-sm font-medium text-slate-300 transition-all">
                  View Demo
                </button>
              </div>

              {/* Trust line */}
              <p className="text-xs text-slate-500">
                No login required{" "}
                <span className="mx-1.5 inline-block h-1 w-1 rounded-full bg-slate-600" />
                Analysis in under 30 seconds
              </p>
            </div>

            {/* ── Right: Dashboard Card ──────────── */}
            <div className="animate-slide-up-delay-2">
              {/* Glow behind card */}
              <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-gradient-to-br from-blue/15 via-transparent to-emerald/15 blur-2xl" />

              {/* Dashboard */}
              <div className="animate-float relative glass rounded-[20px] p-6 shadow-2xl shadow-black/40">
                <DashboardContent />
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ──────────────────────────── */}
        <section className="animate-fade-in border-t border-white/[0.06]">
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-8 py-12">
            {[
              { value: "10K+", label: "Developers Analyzed" },
              { value: "95%", label: "AI Accuracy" },
              { value: "500+", label: "Hiring Companies" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Dashboard Card Content
   ───────────────────────────────────────────────── */

function DashboardContent() {
  return (
    <div className="space-y-5">
      {/* ── GitHub Profile ──────────────────────── */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue to-emerald text-xs font-bold text-white">
          JD
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
            GitHub Profile
          </p>
          <p className="truncate text-sm font-semibold text-white">
            @johndoe
          </p>
          <p className="text-xs text-slate-400">Full Stack Developer</p>
        </div>
      </div>

      <div className="h-px bg-white/[0.06]" />

      {/* ── AI Analysis ─────────────────────────── */}
      <div>
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-soft">
            <svg className="h-3 w-3 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
          <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
            AI Analysis
          </p>
        </div>

        <div className="space-y-3">
          <ProgressRow label="Skill Level" value="Senior" percent={92} />
          <ProgressRow label="Code Quality" value="Excellent" percent={88} />
          <ProgressRow label="Architecture" value="Strong" percent={85} />
        </div>
      </div>

      <div className="h-px bg-white/[0.06]" />

      {/* ── Technologies ────────────────────────── */}
      <div>
        <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">
          Technologies
        </p>
        <div className="flex flex-wrap gap-1.5">
          {[
            { name: "React", color: "text-blue" },
            { name: "Next.js", color: "text-white" },
            { name: "Node.js", color: "text-emerald" },
            { name: "TypeScript", color: "text-blue" },
            { name: "Docker", color: "text-blue" },
            { name: "PostgreSQL", color: "text-emerald" },
          ].map((tech) => (
            <span
              key={tech.name}
              className={`rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      <div className="h-px bg-white/[0.06]" />

      {/* ── Career Insights ─────────────────────── */}
      <div>
        <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">
          Career Insights
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { icon: "💰", label: "Estimated Salary", value: "$120K–$150K" },
            { icon: "🏢", label: "Companies Match", value: "45 Found" },
            { icon: "✅", label: "Interview Ready", value: "92/100" },
            { icon: "📈", label: "Growth Score", value: "Top 8%" },
          ].map((insight) => (
            <div
              key={insight.label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
            >
              <div className="mb-1 flex items-center gap-1.5">
                <span className="text-xs">{insight.icon}</span>
                <span className="text-[10px] text-slate-500">
                  {insight.label}
                </span>
              </div>
              <p className="text-sm font-semibold text-white">{insight.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-white/[0.06]" />

      {/* ── Personalized Roadmap ────────────────── */}
      <div>
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-emerald-soft">
            <svg className="h-3 w-3 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503-11.213a9.014 9.014 0 01-.017 0 9.014 9.014 0 00-.017 0m-5.95.068A9.027 9.027 0 0112 3c1.893 0 3.642.634 5.058 1.684" />
            </svg>
          </div>
          <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
            Personalized Roadmap
          </p>
        </div>
        <div className="space-y-2">
          {[
            "Learn System Design",
            "Improve Testing",
            "Contribute to OSS",
            "Master Kubernetes",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded border border-emerald/30 bg-emerald-soft">
                <svg className="h-2.5 w-2.5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-xs text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Progress Row
   ───────────────────────────────────────────────── */

function ProgressRow({
  label,
  value,
  percent,
}: {
  label: string;
  value: string;
  percent: number;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-xs text-slate-400">{label}</span>
        <span className="text-xs font-medium text-white">
          {value}{" "}
          <span className="text-slate-500">({percent}%)</span>
        </span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
