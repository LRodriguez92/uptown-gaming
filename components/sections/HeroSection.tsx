import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

/**
 * Hero: first impression, core brand value, primary CTA (Book the Space).
 * CONTENT_GUIDE: headline concise, support short, CTA early.
 */
export function HeroSection() {
  return (
    <section aria-label="Hero" className="min-h-[calc(100vh-4rem)]">
      <div className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/media/ug-hero-720.webm" type="video/webm" />
        </video>
        <div className="relative">
          <Container className="py-16 md:py-24">
            <div className="flex flex-col items-center gap-6 hero-content hero-text-shadow">
              <Image
                src="/logos/UG_Logomark_White.png"
                alt="Uptown Gaming logomark"
                width={80}
                height={80}
                priority
              />
              <SectionHeading
                title="A community-centered gaming venue"
                support="A gaming and community venue built for events. Attend tournaments and meetups, or book the space for your next gathering."
                as="h1"
                align="center"
              />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 hero-content">
              <Button as="link" href="/book" className="hero-button-shadow">
                Book the Space
              </Button>
              <Button as="link" href="/events" variant="secondary">
                View Events
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
