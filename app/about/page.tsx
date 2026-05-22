import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { bookingFormUrl } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description: "Who we are. Uptown Gaming is a community-centered gaming and event venue.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Section aria-label="About content">
      <Container>
        <Panel className="space-y-10 md:space-y-12">
          <SectionHeading
            title="Our Story"
            support="We built a venue where local communities can run tournaments, casual nights, and branded experiences. The space is designed to be flexible, welcoming, and ready for whatever you have in mind."
          />
          <SectionHeading
            title="Community First"
            support="We believe in events that connect people. Whether you're here to compete, hang out, or host your own thing—you're in the right place."
          />
          <div className="flex flex-wrap gap-4 border-t border-(--foreground)/10 pt-8">
            <Button as="link" href="/events">
              View Events
            </Button>
            <Button as="link" href={bookingFormUrl} variant="secondary">
              Book the Space
            </Button>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}
