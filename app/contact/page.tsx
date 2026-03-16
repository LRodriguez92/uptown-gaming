import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Get in touch with Uptown Gaming. Event questions, booking inquiries, and general outreach.",
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
            support="Questions about events, booking the space, or partnerships? Reach out and we’ll get back to you."
          />
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
                <span className="font-medium text-(--foreground)">General:</span>{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-(--brand-primary) hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <span className="font-medium text-(--foreground)">Booking:</span>{" "}
                <a
                  href={`mailto:${siteConfig.contact.bookingEmail}`}
                  className="text-(--brand-primary) hover:underline"
                >
                  {siteConfig.contact.bookingEmail}
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section aria-label="Contact form">
        <Container className="pb-12 md:pb-16">
          <h2 className="text-lg font-semibold text-(--foreground)">
            Send an inquiry
          </h2>
          <p className="mt-2 text-(--foreground)/80">
            Use the form below for booking inquiries, event questions, or general outreach.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Container>
      </section>

      <section aria-label="Social">
        <Container className="pb-12 md:pb-16">
          <h2 className="text-lg font-semibold text-(--foreground)">
            Follow us
          </h2>
          <p className="mt-2 text-(--foreground)/80">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--brand-primary) hover:underline"
            >
              Instagram
            </a>
          </p>
        </Container>
      </section>
    </>
  );
}
