import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

/**
 * Booking CTA section placeholder. Step 6 will add final copy and polish.
 * Purpose: drive booking inquiry, primary CTA.
 */
export function BookingCTASection() {
  return (
    <section aria-label="Book the space">
      <Container className="py-12 md:py-16">
        <SectionHeading
          title="Book the Space"
          support="Placeholder: booking CTA. Step 6 will add content."
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
