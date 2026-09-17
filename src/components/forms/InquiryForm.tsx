"use client";

import { useState } from "react";

const interests = [
  "Horse Purchase",
  "Training & Lessons",
  "Boarding",
  "Schedule a Visit",
  "Renewables",
  "General Inquiry",
];
export function InquiryForm({
  defaultInterest = "Horse Purchase",
  horse,
}: {
  defaultInterest?: string;
  horse?: string;
}) {
  const [interest, setInterest] = useState(defaultInterest);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Online submission is temporarily unavailable.");
    }
  }
  if (status === "success")
    return (
      <div className="rounded-[24px] bg-[var(--ls-cream)] p-8 md:p-12">
        <p className="ls-eyebrow">Thank you</p>
        <h2 className="ls-display text-6xl">Your inquiry is on its way.</h2>
        <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--ls-muted)]">
          Long Stride will be in touch soon. We appreciate the context you
          shared.
        </p>
      </div>
    );
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[24px] bg-[var(--ls-cream)] p-6 md:p-9"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
          />
        </div>
        <div className="field md:col-span-2">
          <label htmlFor="interest">I’m contacting Long Stride about</label>
          <select
            id="interest"
            name="interest"
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
          >
            {interests.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="location">Preferred location</label>
          <select id="location" name="preferredLocation">
            <option>Wellington / Loxahatchee, FL</option>
            <option>Jackson Hole, WY</option>
            <option>Not sure</option>
          </select>
        </div>
        {interest === "Horse Purchase" && (
          <>
            <div className="field">
              <label htmlFor="horse">Horse of interest</label>
              <input id="horse" name="horse" defaultValue={horse} />
            </div>
            <div className="field">
              <label htmlFor="experience">Rider experience</label>
              <input id="experience" name="riderExperience" />
            </div>
            <div className="field md:col-span-2">
              <label htmlFor="discipline">Preferred discipline</label>
              <input id="discipline" name="discipline" />
            </div>
          </>
        )}
        <div className="sr-only">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="field md:col-span-2">
          <label htmlFor="message">How can we help?</label>
          <textarea id="message" name="message" required />
        </div>
        <div className="md:col-span-2">
          <button
            disabled={status === "sending"}
            className="rounded-full bg-[var(--ls-forest)] px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-white disabled:opacity-60"
            type="submit"
          >
            {status === "sending" ? "Sending…" : "Send inquiry"}
          </button>
          <p
            className="mt-3 min-h-5 text-sm text-[var(--ls-muted)]"
            aria-live="polite"
          >
            {message}
            {status === "error" && (
              <>
                {" "}
                Email Danielle directly:{" "}
                <a
                  className="underline"
                  href="mailto:danielle@longstrideranch.com"
                >
                  danielle@longstrideranch.com
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </form>
  );
}
