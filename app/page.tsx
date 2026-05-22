import { HeroSection } from "@/components/sections/HeroSection";
import { EventsPreviewSection } from "@/components/sections/EventsPreviewSection";
import { VenueFeaturesSection } from "@/components/sections/VenueFeaturesSection";
import { BookingCTASection } from "@/components/sections/BookingCTASection";
import { MemberPerksSmsSection } from "@/components/sections/MemberPerksSmsSection";
import { SupportSection } from "@/components/sections/SupportSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EventsPreviewSection />
      <VenueFeaturesSection />
      <BookingCTASection />
      <MemberPerksSmsSection />
      <SupportSection />
    </>
  );
}
