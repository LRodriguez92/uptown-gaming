import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig, socialLinks, communityLinks } from "@/config/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { SmsProgramBlock } from "@/components/marketing/SmsProgramBlock";
import { SupportFundraiserBlock } from "@/components/marketing/SupportFundraiserBlock";
import { externalLinkClassName } from "@/lib/links";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Uptown Gaming. Event questions, general outreach, and community links.",
  path: "/contact",
});

export default function ContactPage() {
  const { membership } = siteConfig;

  return (
    <>
      <section aria-label="Contact intro">
        <Container className="py-12 md:py-16">
          <SectionHeading
            as="h1"
            title="Contact Us"
            support="Questions about events, partnerships, or the venue? Reach out. To book the space, use our official booking form."
          />
          <div className="mt-6">
            <Button as="link" href="/book">
              Book the Space
            </Button>
          </div>
        </Container>
      </section>

      <section aria-label="Contact details">
        <Container className="pb-12 md:pb-16">
          <div className="rounded-lg border border-(--foreground)/15 bg-(--surface-dark) p-6">
            <h2 className="text-lg font-semibold text-(--foreground)">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-2 text-(--foreground)/80">
              <li>
                <span className="font-medium text-(--foreground)">Email:</span>{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-(--brand-primary) hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <span className="font-medium text-(--foreground)">Booking:</span>{" "}
                <a href="/book" className="text-(--brand-primary) hover:underline">
                  Official booking form
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section aria-label="Contact form">
        <Container className="pb-12 md:pb-16">
          <h2 className="text-lg font-semibold text-(--foreground)">
            Send a general inquiry
          </h2>
          <p className="mt-2 text-(--foreground)/80">
            For event questions, partnerships, or other outreach—not for booking
            the space (use the booking form above).
          </p>
          <div className="mt-6 max-w-2xl">
            <ContactForm />
          </div>
        </Container>
      </section>

      <section aria-label="Community links">
        <Container className="pb-12 md:pb-16">
          <h2 className="text-lg font-semibold text-(--foreground)">Community</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {communityLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClassName}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-(--foreground)">
              Membership ({membership.priceLabel})
            </h3>
            <ul className="mt-2 list-inside list-disc text-sm text-(--foreground)/80">
              {membership.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <p className="mt-4">
              <a
                href={siteConfig.community.membershipUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--brand-primary) hover:underline"
              >
                Join on JoinIt
              </a>
            </p>
          </div>
        </Container>
      </section>

      <section aria-label="SMS program">
        <Container className="pb-12 md:pb-16">
          <SmsProgramBlock />
        </Container>
      </section>

      <section aria-label="Support fundraiser">
        <Container className="pb-12 md:pb-16">
          <SupportFundraiserBlock />
        </Container>
      </section>

      <section aria-label="Social">
        <Container className="pb-12 md:pb-16">
          <h2 className="text-lg font-semibold text-(--foreground)">Follow us</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {socialLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClassName}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
