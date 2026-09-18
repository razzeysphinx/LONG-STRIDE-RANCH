import Link from "next/link";

export function Footer() {
  return (
    <footer id="site-footer" className="bg-[#102018] py-16 text-white/80">
      <div className="ls-container">
        <div className="grid gap-10 md:grid-cols-[1.4fr_.7fr_.7fr]">
          <div>
            <Link href="/" className="brand text-white">
              <span className="brand-mark">L</span>
              <span>
                <span className="brand-name">Long Stride Ranch</span>
                <span className="brand-location">Equestrian · Renewables</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/75">
              Thoughtful horsemanship, quality horses and a personal standard of
              care.
            </p>
          </div>
          <div>
            <h2 className="footer-heading">Equestrian</h2>
            <FooterLink href="/training">Training</FooterLink>
            <FooterLink href="/boarding">Boarding</FooterLink>
            <FooterLink href="/horses">Our Horses</FooterLink>
            <FooterLink href="/horse-sales">Horse Sales</FooterLink>
          </div>
          <div>
            <h2 className="footer-heading">Long Stride</h2>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/renewables">Renewables</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-white/15 pt-6 text-[11px] uppercase tracking-[.14em] text-white/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Long Stride Ranch</span>
          <span>Wellington, Florida · Jackson Hole, Wyoming</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      className="mb-2.5 block text-[15px] text-white/70 transition-colors hover:text-white"
      href={href}
    >
      {children}
    </Link>
  );
}
