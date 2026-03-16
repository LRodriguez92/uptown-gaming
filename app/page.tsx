import { HeroSection } from "@/components/sections/HeroSection";
import { BrandIntroSection } from "@/components/sections/BrandIntroSection";
import { EventsPreviewSection } from "@/components/sections/EventsPreviewSection";
import { VenueFeaturesSection } from "@/components/sections/VenueFeaturesSection";
import { BookingCTASection } from "@/components/sections/BookingCTASection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";

/**
 * Home page: section order per ROUTES_AND_PAGE_SPECS and IA.
 * 1. Hero 2. Brand intro 3. Events preview 4. Venue features 5. Booking CTA 6. Social proof.
 * Footer is in root layout. Step 5 scaffold; Step 6 will add section content.
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandIntroSection />
      <EventsPreviewSection />
      <VenueFeaturesSection />
      <BookingCTASection />
      <SocialProofSection />
    </>
  );
}
