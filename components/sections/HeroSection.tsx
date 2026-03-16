import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

/**
 * Hero section placeholder. Step 6 will add final content and visual polish.
 * Purpose: first impression, core brand value, primary CTA (Book the Space).
 */
export function HeroSection() {
  return (
    <section aria-label="Hero">
      <Container className="py-16 md:py-24">
        <SectionHeading
          title="Uptown Gaming"
          support="Community-driven gaming events and venue. Placeholder hero copy."
          as="h1"
          align="center"
        />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button as="link" href="/book">
            Book the Space
          </Button>
          <Button as="link" href="/events" variant="secondary">
            View Events
          </Button>
        </div>
      </Container>
    </section>
  );
}
