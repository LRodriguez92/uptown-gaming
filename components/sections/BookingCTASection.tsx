import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

/**
 * Booking CTA: drive booking inquiry, primary CTA.
 * CONTENT_GUIDE: direct language, obvious action, short reason to act.
 */
export function BookingCTASection() {
  return (
    <section aria-label="Book the space">
      <Container className="py-12 md:py-16">
        <SectionHeading
          title="Host Your Next Event Here"
          support="Tournaments, community nights, brand activations, or private gatherings. Tell us what you have in mind and we’ll get back to you."
          align="center"
        />
        <div className="mt-8 flex justify-center">
          <Button as="link" href="/book">
            Start booking inquiry
          </Button>
        </div>
      </Container>
    </section>
  );
}
