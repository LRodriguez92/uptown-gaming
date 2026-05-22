import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { CommunitySection } from "@/components/sections/CommunitySection";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Uptown Gaming by email or book the space. Community links for Discord, events, and more.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section aria-label="Contact intro">
        <Container className="py-12 md:py-16">
          <SectionHeading
            as="h1"
            title="Contact Us"
            support="Email us for general questions. To book the space, use our official Monday.com booking form."
          />
          <div className="mt-6 flex flex-wrap gap-4">
            <Button as="link" href="/book">
              Book the Space
            </Button>
            <Button
              as="link"
              href={`mailto:${siteConfig.contact.email}`}
              variant="secondary"
            >
              Email us
            </Button>
          </div>
        </Container>
      </section>

      <section aria-label="Contact details">
        <Container className="pb-8 md:pb-12">
          <Card className="max-w-xl">
            <h2 className="text-lg font-semibold text-(--foreground)">
              Get in touch
            </h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-(--foreground)">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-(--brand-primary) hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-(--foreground)">Booking</dt>
                <dd className="mt-1 text-(--foreground)/80">
                  <a href="/book" className="text-(--brand-primary) hover:underline">
                    Official booking form
                  </a>
                  {" "}
                  — tournaments, private events, and venue inquiries.
                </dd>
              </div>
            </dl>
          </Card>
        </Container>
      </section>

      <CommunitySection />
    </>
  );
}
