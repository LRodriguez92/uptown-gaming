import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

/**
 * Venue features section placeholder. Step 6 will add amenities/features content.
 * Purpose: highlight venue value, support booking path.
 */
export function VenueFeaturesSection() {
  return (
    <section aria-label="Venue features">
      <Container className="py-12 md:py-16">
        <SectionHeading
          title="The Space"
          support="Placeholder: venue features and amenities. Step 6 will add content."
        />
        <div className="mt-6">
          <Button as="link" href="/venue" variant="secondary">
            Learn about the venue
          </Button>
        </div>
      </Container>
    </section>
  );
}
