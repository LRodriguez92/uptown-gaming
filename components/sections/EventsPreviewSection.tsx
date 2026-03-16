import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

/**
 * Events preview section placeholder. Step 6 will add event list/preview content.
 * Purpose: surface featured/upcoming events, link to Events page.
 */
export function EventsPreviewSection() {
  return (
    <section aria-label="Events preview">
      <Container className="py-12 md:py-16">
        <SectionHeading
          title="Upcoming Events"
          support="Placeholder: event preview. Step 6 will add content."
        />
        <div className="mt-6">
          <Button as="link" href="/events" variant="secondary">
            View all events
          </Button>
        </div>
      </Container>
    </section>
  );
}
