import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { media } from "@/data/media";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Long Stride Ranch about horse sales, training, boarding, renewables or a general inquiry.",
  path: "/contact",
  image: media.horseCare.src,
});
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string; horse?: string }>;
}) {
  const params = await searchParams;
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Start with the right conversation."
        image={{
          ...media.horseCare,
          focalDesktop: media.horseCare.focal.desktop,
          focalMobile: media.horseCare.focal.mobile,
        }}
      >
        Tell Long Stride why you are reaching out so the team has useful context
        from the first message.
      </PageHero>
      <section className="py-24 md:py-32">
        <div className="ls-container grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="ls-eyebrow">Reach Long Stride</p>
            <h2 className="ls-display text-[var(--type-editorial)]">
              Visit by appointment.
            </h2>
            <div className="mt-8">
              <div className="border-t border-[var(--ls-line)] py-5 text-sm">
                <p>
                  851 Hyde Park Rd
                  <br />
                  Loxahatchee, FL, USA
                </p>
              </div>
              <div className="border-t border-[var(--ls-line)] py-5 text-sm">
                <p>
                  <strong>Danielle Harrity</strong>
                  <br />
                  <a
                    className="hover:text-[var(--ls-brass)]"
                    href="mailto:danielle@longstrideranch.com"
                  >
                    danielle@longstrideranch.com
                  </a>
                  <br />
                  <a
                    className="hover:text-[var(--ls-brass)]"
                    href="tel:+19175667628"
                  >
                    917-566-7628
                  </a>
                </p>
              </div>
              <div className="border-t border-[var(--ls-line)] py-5 text-sm">
                <p>
                  <strong>Sam Harrity</strong>
                  <br />
                  <a
                    className="hover:text-[var(--ls-brass)]"
                    href="mailto:samuel@longstrideranch.com"
                  >
                    samuel@longstrideranch.com
                  </a>
                  <br />
                  <a
                    className="hover:text-[var(--ls-brass)]"
                    href="tel:+16176995246"
                  >
                    617-699-5246
                  </a>
                </p>
              </div>
            </div>
          </div>
          <InquiryForm defaultInterest={params.interest} horse={params.horse} />
        </div>
      </section>
    </main>
  );
}
