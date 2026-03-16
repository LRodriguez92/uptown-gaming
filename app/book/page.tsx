import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Book the Space",
  description: "Host your next event at Uptown Gaming. Inquire about tournaments, meetups, and private bookings.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <section aria-label="Book intro">
        <Container className="py-12 md:py-16">
          <SectionHeading
            as="h1"
            title="Book the Space"
            support="Host tournaments, community nights, brand activations, or private gatherings. Tell us what you have in mind."
          />
          <div className="mt-6">
            <Button as="link" href="/contact">
              Start booking inquiry
            </Button>
          </div>
        </Container>
      </section>

      <section aria-label="Who the space is for">
        <Container className="pb-12 md:pb-16">
          <SectionHeading
            title="Who It’s For"
            support="Event organizers, community groups, brands, and anyone looking for a gaming-ready venue. The space works for competitive play, casual meetups, and custom experiences."
          />
        </Container>
      </section>

      <section aria-label="Venue snapshot">
        <Container className="pb-12 md:pb-16">
          <SectionHeading
            title="What You Get"
            support="Flexible layout, gaming-ready setup, and a central location—everything you need to run a great event."
          />
        </Container>
      </section>

      <section aria-label="Booking CTA">
        <Container className="pb-12 md:pb-16">
          <div className="rounded-lg border border-(--foreground)/10 bg-(--foreground)/5 p-8 text-center">
            <h2 className="text-xl font-semibold text-(--foreground)">
              Ready to book?
            </h2>
            <p className="mt-2 text-(--foreground)/80">
              Reach out with your event idea and we’ll get back to you.
            </p>
            <div className="mt-6">
              <Button as="link" href="/contact">
                Contact for booking
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
