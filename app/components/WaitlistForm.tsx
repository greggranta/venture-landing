"use client";

import { useState, FormEvent } from "react";

export default function WaitlistForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-6 py-8 text-center">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div
            className="absolute inset-0 rounded-full opacity-20 animate-pulse"
            style={{ background: "#fd4fe9" }}
          />
          <div
            className="h-16 w-16 rounded-full flex items-center justify-center border border-magenta/40"
            style={{ background: "rgba(253,79,233,0.1)" }}
          >
            <svg
              className="h-7 w-7"
              style={{ color: "#fd4fe9" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-headline text-[28px] text-white">You&rsquo;re in.</h3>
          <p className="text-[14px] text-[#7880a8] leading-relaxed max-w-xs">
            We&rsquo;ll reach out when Venture opens at your campus. Something big is coming.
          </p>
        </div>
        <div className="w-full rounded-xl border border-border bg-card p-5 flex flex-col gap-1 text-left">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-mint">
            Next step
          </span>
          <p className="text-[14px] text-[#9399c0]">
            Follow{" "}
            <a
              href="https://www.instagram.com/venturesocialapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-magenta transition-colors font-semibold"
            >
              @venturesocialapp
            </a>{" "}
            on Instagram for launch updates and waitlist drops.
          </p>
        </div>
      </div>
    );
  }

  const inputClass =
    "h-12 w-full rounded-xl bg-card border border-border px-4 text-[14px] text-white placeholder-[#30355a] outline-none transition-colors focus:border-magenta/50 focus:ring-1 focus:ring-magenta/30";

  const labelClass =
    "text-[10px] font-bold uppercase tracking-[0.15em] text-[#4a4f7a]";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className={labelClass}>
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Alex"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className={labelClass}>
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Rivera"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClass}>
          Campus Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@university.edu"
          pattern=".*\.edu$"
          title="Please enter a .edu email address"
          className={inputClass}
        />
        <p className="text-[11px] text-[#30355a] pl-1">
          .edu address required for campus verification
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className={labelClass}>
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(312) 555-0100"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-2 h-13 w-full rounded-xl font-bold text-[14px] tracking-wide text-bg disabled:opacity-50 transition-all hover:scale-[1.02] glow-magenta cursor-pointer"
        style={{ background: loading ? "#a038a0" : "#fd4fe9" }}
      >
        {loading ? "Getting your invite…" : "Get the invite →"}
      </button>

      <p className="text-center text-[11px] text-[#30355a]">
        No spam. No ticket fees. Just real moments.
      </p>
    </form>
  );
}
