"use client";

import { useState } from "react";

const interests = [
  "Horse Purchase",
  "Training",
  "Boarding",
  "Schedule a Visit",
  "Renewables",
  "General Inquiry",
] as const;

type InterestType = (typeof interests)[number];

export function InquiryForm({
  defaultInterest = "Horse Purchase",
  horse,
}: {
  defaultInterest?: string;
  horse?: string;
}) {
  const normalisedInterest = (interests as readonly string[]).includes(
    defaultInterest,
  )
    ? (defaultInterest as InterestType)
    : "Horse Purchase";

  const [interest, setInterest] = useState<InterestType>(normalisedInterest);
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

  if (status === "success") {
    return (
      <div className="rounded-[16px] bg-[var(--ls-cream)] p-8 md:p-12">
        <p className="ls-eyebrow text-[var(--ls-forest)]">Thank you</p>
        <h2 className="ls-display text-5xl md:text-6xl">
          Your inquiry is on its way.
        </h2>
        <p className="mt-5 max-w-lg text-[15px] leading-7 text-[var(--ls-muted)]">
          Long Stride will be in touch soon. We appreciate the context you
          shared.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      data-inquiry-form
      className="rounded-[16px] bg-[var(--ls-cream)] p-6 md:p-9"
    >
      <div className="mb-8">
        <p className="ls-eyebrow text-[var(--ls-forest)]">
          What brings you to Long Stride?
        </p>
        <div
          className="mt-3 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Inquiry interest categories"
        >
          {interests.map((item) => {
            const isSelected = interest === item;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setInterest(item)}
                className={`rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-[.09em] transition-all duration-200 ${
                  isSelected
                    ? "bg-[var(--ls-forest)] text-white shadow-sm"
                    : "border border-[var(--ls-line)] bg-white/60 text-[var(--ls-ink)] hover:border-[var(--ls-forest)] hover:bg-white"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
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

        {/* Adaptive fields per selected interest */}
        {interest === "Horse Purchase" && (
          <>
            <div className="field">
              <label htmlFor="horse">Horse of interest</label>
              <input id="horse" name="horse" defaultValue={horse} />
            </div>
            <div className="field">
              <label htmlFor="riderExperience">Rider experience</label>
              <input id="riderExperience" name="riderExperience" />
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
              <label htmlFor="trainingContext">Horse / rider context</label>
              <input id="trainingContext" name="context" />
            </div>
            <div className="field md:col-span-2">
              <label htmlFor="goals">Goals</label>
              <input id="goals" name="goals" />
            </div>
          </>
        )}

        {interest === "Boarding" && (
          <div className="field md:col-span-2">
            <label htmlFor="horseContext">Horse context</label>
            <input id="horseContext" name="context" />
          </div>
        )}

        {interest === "Schedule a Visit" && (
          <>
            <div className="field">
              <label htmlFor="visitTiming">Preferred timing</label>
              <input
                id="visitTiming"
                name="timing"
                placeholder="e.g. Next week, mornings"
              />
            </div>
            <div className="field">
              <label htmlFor="partySize">Party size</label>
              <input
                id="partySize"
                name="partySize"
                placeholder="e.g. 2 guests"
              />
            </div>
          </>
        )}

        {interest === "Renewables" && (
          <>
            <div className="field">
              <label htmlFor="organization">Organization</label>
              <input id="organization" name="organization" />
            </div>
            <div className="field">
              <label htmlFor="projectContext">Project context</label>
              <input id="projectContext" name="context" />
            </div>
          </>
        )}

        {/* Spam protection honeypot */}
        <div className="sr-only">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="field md:col-span-2">
          <label htmlFor="message">How can we help?</label>
          <textarea id="message" name="message" required />
        </div>

        <div className="md:col-span-2 pt-2">
          <button
            disabled={status === "sending"}
            className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[var(--ls-forest)] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[.11em] text-white transition-opacity hover:opacity-90 disabled:opacity-60"
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
                  className="underline hover:text-[var(--ls-brass)]"
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
