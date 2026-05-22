import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bookingFormUrl } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function BookingCTASection() {
  return (
    <Section aria-label="Book the space">
      <Container>
        <Panel className="text-center">
          <SectionHeading
            eyebrow="Booking"
            title="Host Your Next Event Here"
            support="Tournaments, community nights, brand activations, or private gatherings. Tell us what you have in mind and we'll get back to you."
            align="center"
          />
          <div className="section-stack flex justify-center">
            <Button as="link" href={bookingFormUrl}>
              Start booking inquiry
            </Button>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}
