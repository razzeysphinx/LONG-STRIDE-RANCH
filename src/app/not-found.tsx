import Link from "next/link";
export default function NotFound() {
  return (
    <main
      id="main"
      className="grid min-h-screen place-items-center bg-[var(--ls-cream)] px-6 text-center"
    >
      <div>
        <p className="ls-eyebrow">404</p>
        <h1 className="ls-display text-[clamp(4.5rem,9vw,9rem)]">
          That trail doesn&apos;t lead anywhere.
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            className="rounded-full bg-[var(--ls-forest)] px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em] text-white"
            href="/"
          >
            Return home
          </Link>
          <Link
            className="rounded-full border border-[var(--ls-line)] px-6 py-4 text-[11px] font-bold uppercase tracking-[.11em]"
            href="/horse-sales"
          >
            View horses
          </Link>
        </div>
      </div>
    </main>
  );
}
