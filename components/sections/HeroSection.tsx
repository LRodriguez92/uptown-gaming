import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

/**
 * Hero: first impression, core brand value, primary CTA (Book the Space).
 * CONTENT_GUIDE: headline concise, support short, CTA early.
 */
export function HeroSection() {
  return (
    <section aria-label="Hero">
      <Container className="py-16 md:py-24">
        <SectionHeading
          title="Uptown Gaming"
          support="A gaming and community venue built for events. Attend tournaments and meetups, or book the space for your next gathering."
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
