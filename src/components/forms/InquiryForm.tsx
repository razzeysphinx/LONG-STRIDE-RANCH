"use client";

import { useState } from "react";

const interests = [
  "Horse Purchase",
  "Training",
  "Boarding",
  "Visit",
  "Renewables",
  "General",
];

export function InquiryForm({
  defaultInterest = "Horse Purchase",
  horse,
}: {
  defaultInterest?: string;
  horse?: string;
}) {
  const normalisedInterest = interests.includes(defaultInterest)
    ? defaultInterest
    : "Horse Purchase";
  const [interest, setInterest] = useState(normalisedInterest);
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
      <div className="rounded-[18px] bg-[var(--ls-cream)] p-8 md:p-12">
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
      className="rounded-[18px] bg-[var(--ls-cream)] p-6 md:p-9"
    >
      <div className="mb-6 flex flex-wrap gap-2" aria-label="Inquiry type">
        {interests.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setInterest(item)}
            className={`border px-3 py-2 text-[10px] font-bold uppercase tracking-[.09em] ${interest === item ? "border-[var(--ls-forest)] bg-[var(--ls-forest)] text-white" : "border-[var(--ls-line)]"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <input type="hidden" name="interest" value={interest} />
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
              <label htmlFor="discipline">Discipline</label>
              <input id="discipline" name="discipline" />
            </div>
          </>
        )}
        {interest === "Training" && (
          <>
            <div className="field md:col-span-2">
              <label htmlFor="context">Rider / horse context</label>
              <input id="context" name="context" />
            </div>
            <div className="field md:col-span-2">
              <label htmlFor="goals">Goals</label>
              <input id="goals" name="goals" />
            </div>
          </>
        )}
        {interest === "Boarding" && (
          <div className="field md:col-span-2">
            <label htmlFor="context">Horse context</label>
            <input id="context" name="context" />
          </div>
        )}
        {interest === "Renewables" && (
          <>
            <div className="field">
              <label htmlFor="organization">Organization</label>
              <input id="organization" name="organization" />
            </div>
            <div className="field">
              <label htmlFor="context">Project context</label>
              <input id="context" name="context" />
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
