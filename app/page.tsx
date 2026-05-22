import { HeroSection } from "@/components/sections/HeroSection";
import { BrandIntroSection } from "@/components/sections/BrandIntroSection";
import { EventsPreviewSection } from "@/components/sections/EventsPreviewSection";
import { VenueFeaturesSection } from "@/components/sections/VenueFeaturesSection";
import { BookingCTASection } from "@/components/sections/BookingCTASection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { MembershipSection } from "@/components/sections/MembershipSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { SmsProgramSection } from "@/components/sections/SmsProgramSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";

/**
 * Home page: section order per ROUTES_AND_PAGE_SPECS and IA.
 * Footer is in root layout.
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandIntroSection />
      <EventsPreviewSection />
      <VenueFeaturesSection />
      <BookingCTASection />
      <CommunitySection />
      <MembershipSection />
      <SupportSection />
      <SmsProgramSection />
      <SocialProofSection />
    </>
  );
}
