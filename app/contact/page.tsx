import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Venture",
  description: "Questions, feedback, or privacy requests? Reach out to the Venture team.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen city-grid-subtle">
      {/* ─── NAV ─────────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 lg:px-10 h-16 border-b border-border bg-bg/70 backdrop-blur-xl">
        <a href="/" className="font-headline text-[22px] tracking-widest uppercase text-white">
          Venture
        </a>
        <a
          href="/#waitlist"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-magenta px-5 py-2 text-[13px] font-bold text-bg tracking-wide glow-magenta transition-all hover:scale-[1.03]"
        >
          Get Early Access
        </a>
        <a
          href="/#waitlist"
          className="sm:hidden text-[13px] font-semibold text-magenta"
        >
          Join →
        </a>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-24">
        <div className="w-full max-w-lg flex flex-col gap-10 animate-fade-up">
          {/* Label */}
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-mint">
            Contact
          </span>

          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h1 className="font-headline text-[clamp(48px,8vw,80px)] leading-[0.95] text-white">
              Say hello.
            </h1>
            <p className="text-[16px] text-[#7880a8] leading-relaxed">
              Questions, feedback, or privacy requests? Reach out — we read everything.
            </p>
          </div>

          {/* Contact card */}
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4a4f7a]">
                Email
              </span>
              <a
                href="mailto:grant@venturesocialapp.com"
                className="text-[20px] font-semibold text-white hover:text-magenta transition-colors"
              >
                grant@venturesocialapp.com
              </a>
            </div>

            <div className="h-px bg-border" />

            <p className="text-[14px] text-[#5a6090] leading-relaxed">
              We respond within 2 business days.
            </p>
          </div>

          {/* Footer note */}
          <p className="text-[13px] text-[#30355a] text-center">
            For privacy-related requests, please include "Privacy Request" in your subject line.
          </p>
        </div>
      </main>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer className="border-t border-border px-6 lg:px-10 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <span className="font-headline text-[20px] tracking-widest uppercase text-white">
            Venture
          </span>

          <div className="flex items-center gap-8">
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
