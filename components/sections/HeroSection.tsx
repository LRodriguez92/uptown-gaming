import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bookingFormUrl } from "@/config/site";
import { Button } from "@/components/ui/Button";

/**
 * Hero: first impression, core brand value, primary CTA (Book the Space).
 * CONTENT_GUIDE: headline concise, support short, CTA early.
 */
export function HeroSection() {
  return (
    <section aria-label="Hero" className="min-h-[calc(100vh-4rem)]">
      <div className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-(--background)/60"
          aria-hidden="true"
        />
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
          <Container className="py-16 md:py-24 lg:py-28">
            <div className="flex flex-col items-center gap-8 hero-content hero-text-shadow">
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
            <div className="mt-10 flex flex-wrap justify-center gap-4 hero-content">
              <Button as="link" href={bookingFormUrl} className="hero-button-shadow">
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
