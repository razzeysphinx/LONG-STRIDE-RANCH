"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mainNavigation } from "@/data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [inquiryBlocked, setInquiryBlocked] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setPastHero(window.scrollY > window.innerHeight * 0.55);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const blockedAreas = [
      document.querySelector("[data-inquiry-form]"),
      document.querySelector("#site-footer"),
    ].filter((node): node is Element => node !== null);

    if (!blockedAreas.length) return;

    const observer = new IntersectionObserver(
      (entries) =>
        setInquiryBlocked(entries.some((entry) => entry.isIntersecting)),
      { threshold: 0.08 },
    );

    blockedAreas.forEach((area) => observer.observe(area));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (open) closeRef.current?.focus();
    if (!open && wasOpen.current) triggerRef.current?.focus();
    wasOpen.current = open;
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) =>
      event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header
        className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
      >
        <div className="ls-container flex h-[72px] items-center justify-between gap-6 md:h-[82px]">
          <Link href="/" className="brand" aria-label="Long Stride Ranch home">
            <span className="brand-mark">L</span>
            <span>
              <span className="brand-name">Long Stride Ranch</span>
              <span className="brand-location">Wellington · Jackson Hole</span>
            </span>
          </Link>
          <nav
            className="hidden items-center gap-5 lg:flex"
            aria-label="Primary navigation"
          >
            {mainNavigation.map((item) => (
              <Link key={item.href} className="nav-link" href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="nav-inquiry" href="/contact">
              Start an inquiry
            </Link>
          </nav>
          <button
            ref={triggerRef}
            className="grid size-11 place-items-center lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            aria-expanded={open}
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </header>
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-[var(--ls-paper)] p-6 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex justify-end">
            <button
              ref={closeRef}
              className="grid size-11 place-items-center text-3xl"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              ×
            </button>
          </div>
          <nav className="mt-8" aria-label="Mobile navigation">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-[var(--ls-line)] py-3 font-display text-5xl leading-none tracking-[-.045em]"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Link
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex rounded-full bg-[var(--ls-forest)] px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-white"
              href="/contact"
            >
              Start an inquiry
            </Link>
          </nav>
        </div>
      )}
      {pastHero && !open && !inquiryBlocked && (
        <Link className="mobile-inquiry lg:hidden" href="/contact">
          Start an inquiry
        </Link>
      )}
    </>
  );
}
