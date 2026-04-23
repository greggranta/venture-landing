import WaitlistForm from "./components/WaitlistForm";

const steps = [
  {
    number: "01",
    heading: "Post what you're up to.",
    body: "Coffee. Gym. Study session. Whatever you're doing now or in the next two hours — post it and see who's in.",
    chips: ["☕ Coffee", "🏋️ Gym", "📚 Study", "🎵 Concert"],
  },
  {
    number: "02",
    heading: "See who's nearby, right now.",
    body: "Verified students from your campus who match your vibe appear in real time. No swiping. No week-long text chains.",
    chips: null,
  },
  {
    number: "03",
    heading: "Show up. In real life.",
    body: "Join with a tap. Meet up within minutes. Venture isn't trying to keep you on the app — it's trying to get you off it.",
    chips: null,
  },
];

const moments = [
  {
    location: "Harold Washington Library",
    body: "Someone is looking for a study partner.",
    accent: "Two hours left.",
    tag: "WINDOW",
  },
  {
    location: "South Loop S&C",
    body: "Finding a spotter has never been",
    accent: "easier.",
    tag: "SPOT",
  },
  {
    location: "Café Deko",
    body: "A place where you say you'll stay for just",
    accent: "one coffee.",
    tag: "SPOT",
  },
];

const trust = [
  {
    heading: ".edu Verified",
    body: "Every user is verified through their campus email. No strangers — only students.",
  },
  {
    heading: "Vibe Score",
    body: "After each meetup, leave quick feedback. People who show up consistently get recognized. Trust is built into the loop.",
  },
  {
    heading: "Real-Time Only",
    body: "Activities expire within 2 hours. No lingering posts. No passive scrolling. Just live moments.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen city-grid-subtle">
      {/* ─── NAV ─────────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 lg:px-10 h-16 border-b border-border bg-bg/70 backdrop-blur-xl">
        <span className="font-headline text-[22px] tracking-widest uppercase text-white">
          Venture
        </span>
        <a
          href="#waitlist"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-magenta px-5 py-2 text-[13px] font-bold text-bg tracking-wide glow-magenta transition-all hover:scale-[1.03]"
        >
          Get Early Access
        </a>
        <a
          href="#waitlist"
          className="sm:hidden text-[13px] font-semibold text-magenta"
        >
          Join →
        </a>
      </header>

      <main>
        {/* ─── HERO ────────────────────────────────────────────────── */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-24 text-center overflow-hidden">
          {/* Ambient glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(51,43,101,0.6) 0%, transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(253,79,233,0.12) 0%, transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 w-[400px] h-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(142,254,186,0.06) 0%, transparent 65%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl animate-fade-up">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#c0c4e0]">
              <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse-slow" />
              Spring 2026 Beta · Columbia College Chicago
            </div>

            {/* Headline */}
            <h1 className="font-headline text-[clamp(64px,12vw,128px)] leading-[0.9] tracking-tight text-white">
              Don&rsquo;t plan it.
              <br />
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #fd4fe9 0%, #c066e0 50%, #8efeba 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Venture it.
              </span>
            </h1>

            {/* Sub */}
            <p className="max-w-xl text-[17px] leading-relaxed text-[#9399c0] font-medium">
              Real-time spontaneous meetups with verified students nearby.
              The goal isn&rsquo;t to keep you on the app&nbsp;—&nbsp;it&rsquo;s to get you off it.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4 mt-2">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-3 rounded-full bg-magenta px-9 py-4 text-[15px] font-bold text-bg tracking-wide glow-magenta transition-all hover:scale-[1.03]"
              >
                Get Early Access
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <span className="text-[13px] text-[#4a4f7a] font-medium">
                .edu email required · Free forever during beta
              </span>
            </div>

            {/* Social proof */}
            <div className="mt-4 flex items-center gap-2 text-[13px] text-[#5a6090]">
              <span className="inline-flex">
                {["A","B","C","D"].map((_, i) => (
                  <span
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-bg flex items-center justify-center text-[10px] font-bold -ml-2 first:ml-0"
                    style={{
                      background: [
                        "linear-gradient(135deg,#fd4fe9,#9b4fdd)",
                        "linear-gradient(135deg,#8efeba,#3cb87a)",
                        "linear-gradient(135deg,#4f8bfd,#7b4ffd)",
                        "linear-gradient(135deg,#fd9b4f,#fd4fe9)",
                      ][i],
                    }}
                  />
                ))}
              </span>
              <span>47+ Columbia students already on the waitlist</span>
            </div>
          </div>
        </section>

        {/* ─── PROBLEM / STATS ─────────────────────────────────────── */}
        <section className="border-t border-border px-6 lg:px-10 py-28">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Stats */}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <span
                    className="font-headline text-[clamp(64px,10vw,96px)] leading-none"
                    style={{ color: "#fd4fe9" }}
                  >
                    58%
                  </span>
                  <p className="text-[15px] text-[#7880a8] leading-relaxed max-w-sm">
                    of college students prefer in-person interaction over digital alternatives — but most platforms make it harder, not easier.
                  </p>
                </div>
                <div className="h-px bg-border" />
                <div className="flex flex-col gap-2">
                  <span
                    className="font-headline text-[clamp(64px,10vw,96px)] leading-none"
                    style={{ color: "#8efeba" }}
                  >
                    36%
                  </span>
                  <p className="text-[15px] text-[#7880a8] leading-relaxed max-w-sm">
                    of college students don&rsquo;t participate in extracurricular activities. They&rsquo;re surrounded by thousands of peers — and still feel alone.
                  </p>
                </div>
              </div>

              {/* Pull quote */}
              <div className="flex flex-col gap-6 lg:pl-10 lg:border-l border-border">
                <svg className="w-8 h-8 text-magenta opacity-60" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M0 16.8c0-6.4 4.267-12.267 12.8-17.6l2.4 2.933C10.667 4.8 8.267 8.267 7.467 12H12v12H0V16.8zm17.6 0c0-6.4 4.267-12.267 12.8-17.6L32.8 2.133C28.267 4.8 25.867 8.267 25.067 12H29.6v12H17.6V16.8z" />
                </svg>
                <blockquote className="text-[22px] sm:text-[26px] leading-snug font-semibold text-white">
                  Real life doesn&rsquo;t work on a schedule. Your afternoon frees up, you feel like being social, and there&rsquo;s no simple way to find someone else who&rsquo;s in that same moment.
                </blockquote>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[14px] font-semibold text-[#c0c4e0]">Grant Gregga</span>
                  <span className="text-[13px] text-[#5a6090]">Founder, Venture</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ────────────────────────────────────────── */}
        <section id="how-it-works" className="border-t border-border px-6 lg:px-10 py-28">
          <div className="max-w-5xl mx-auto flex flex-col gap-16">
            {/* Header */}
            <div className="flex flex-col gap-3 max-w-lg">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-mint">
                How it works
              </span>
              <h2 className="font-headline text-[clamp(40px,6vw,72px)] leading-[0.95] text-white">
                From impulse to IRL in minutes.
              </h2>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`flex flex-col sm:flex-row gap-6 sm:gap-12 py-10 ${i !== steps.length - 1 ? "border-b border-border" : ""}`}
                >
                  <div className="sm:w-16 flex-shrink-0">
                    <span className="font-headline text-[13px] tracking-[0.12em] text-[#3a3f6a]">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 flex-1">
                    <h3 className="font-headline text-[clamp(26px,3vw,36px)] leading-tight text-white">
                      {step.heading}
                    </h3>
                    <p className="text-[15px] text-[#7880a8] leading-relaxed max-w-lg">
                      {step.body}
                    </p>
                    {step.chips && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {step.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-mint/20 bg-mint/8 px-4 py-1.5 text-[13px] font-medium text-mint"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MOMENTS (brand cards) ───────────────────────────────── */}
        <section className="border-t border-border px-6 lg:px-10 py-28 overflow-hidden">
          <div className="max-w-5xl mx-auto flex flex-col gap-16">
            <div className="flex flex-col gap-3 max-w-lg">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-mint">
                Every moment, a new connection
              </span>
              <h2 className="font-headline text-[clamp(40px,6vw,72px)] leading-[0.95] text-white">
                Less planning.
                <br />
                More connecting.
              </h2>
            </div>

            {/* Brand-style cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {moments.map((m) => (
                <div
                  key={m.location}
                  className="group relative rounded-2xl overflow-hidden bg-navy city-grid flex flex-col justify-between p-7 min-h-[320px] border border-white/6 hover:border-white/12 transition-colors"
                >
                  {/* Subtle corner glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "radial-gradient(ellipse at top right, rgba(253,79,233,0.08) 0%, transparent 70%)",
                    }}
                  />

                  <div className="flex flex-col gap-6 relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-mint">
                      {m.location}
                    </span>
                    <p className="text-[22px] font-bold text-white leading-snug">
                      {m.body}{" "}
                      <span className="text-magenta">{m.accent}</span>
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between mt-8">
                    <span className="font-headline text-[13px] tracking-[0.18em] text-white/30 uppercase">
                      Venture
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/20">
                      {m.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BUILT FOR TRUST ─────────────────────────────────────── */}
        <section className="border-t border-border px-6 lg:px-10 py-28">
          <div className="max-w-5xl mx-auto flex flex-col gap-16">
            <div className="flex flex-col gap-3 max-w-lg">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-mint">
                Designed for spontaneity, built for trust
              </span>
              <h2 className="font-headline text-[clamp(40px,6vw,72px)] leading-[0.95] text-white">
                Real people.
                <br />
                Right now.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
              {trust.map((item) => (
                <div
                  key={item.heading}
                  className="flex flex-col gap-4 bg-surface p-8 sm:p-10"
                >
                  <h3 className="font-headline text-[22px] text-white leading-tight">
                    {item.heading}
                  </h3>
                  <p className="text-[14px] text-[#7880a8] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Mission statement */}
            <div className="rounded-2xl border border-magenta/20 bg-magenta/5 p-10 sm:p-12 text-center flex flex-col gap-4">
              <p className="text-[19px] sm:text-[22px] font-semibold text-white leading-relaxed max-w-2xl mx-auto">
                "Venture is about what happens{" "}
                <span className="text-magenta">after you close the app.</span>"
              </p>
              <span className="text-[13px] text-[#5a6090]">— From the Venture mission</span>
            </div>
          </div>
        </section>

        {/* ─── WAITLIST ────────────────────────────────────────────── */}
        <section id="waitlist" className="border-t border-border px-6 lg:px-10 py-28">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: copy */}
              <div className="flex flex-col gap-6 lg:sticky lg:top-24">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-mint">
                  Early access
                </span>
                <h2 className="font-headline text-[clamp(40px,6vw,72px)] leading-[0.95] text-white">
                  Your campus.
                  <br />
                  Your moment.
                </h2>
                <p className="text-[15px] text-[#7880a8] leading-relaxed max-w-sm">
                  The beta starts at Columbia College Chicago. Join the waitlist and be among the first students to experience Venture when it opens on your campus.
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  {[
                    "No ticket purchases",
                    "No endless swiping",
                    "No passive scrolling",
                    "Just real people, right now",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[14px] text-[#9399c0]">
                      <svg className="w-4 h-4 text-mint flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: form */}
              <div className="rounded-2xl border border-border bg-surface overflow-hidden">
                <div className="city-grid h-2 w-full bg-navy" />
                <div className="p-8 sm:p-10">
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer className="border-t border-border px-6 lg:px-10 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <span className="font-headline text-[20px] tracking-widest uppercase text-white">
            Venture
          </span>

          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/venturesocialapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] text-[#4a4f7a] hover:text-white transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
              @venturesocialapp
            </a>
            <a
              href="https://x.com/venturesocial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] text-[#4a4f7a] hover:text-white transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X / Twitter
            </a>
            <span className="text-[#1e2240]">|</span>
            <a
              href="/privacy"
              className="text-[13px] text-[#4a4f7a] hover:text-white transition-colors font-medium"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-[13px] text-[#4a4f7a] hover:text-white transition-colors font-medium"
            >
              Terms
            </a>
            <a
              href="/contact"
              className="text-[13px] text-[#4a4f7a] hover:text-white transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          <p className="text-[13px] text-[#30355a] font-medium">
            © 2026 Venture Social Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
