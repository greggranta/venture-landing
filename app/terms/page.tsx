import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Venture",
  description: "The terms and conditions governing use of the Venture platform.",
};

export default function TermsPage() {
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

      <main className="flex-1 px-6 lg:px-10 pt-32 pb-24">
        <div className="max-w-3xl mx-auto flex flex-col gap-10 animate-fade-up">
          {/* Label + heading */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-mint">
              Legal
            </span>
            <h1 className="font-headline text-[clamp(48px,8vw,80px)] leading-[0.95] text-white">
              Terms of Service
            </h1>
            <p className="text-[14px] text-[#4a4f7a]">Last updated: April 2026</p>
          </div>

          {/* Content placeholder */}
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10 flex flex-col gap-4 text-center">
            <p className="text-[16px] text-[#7880a8]">Terms of Service content coming soon.</p>
            <p className="text-[14px] text-[#4a4f7a]">
              Questions? Contact us at{" "}
              <a href="mailto:grant@venturesocialapp.com" className="text-white hover:text-magenta transition-colors">
                grant@venturesocialapp.com
              </a>
            </p>
          </div>
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
