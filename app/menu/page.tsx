import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { MenuImages } from "@/components/menu/MenuImages";
import { getMenuImagePaths } from "@/lib/menu-images";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Menu",
  description: "Food and drinks at Uptown Gaming. View our full menu.",
  path: "/menu",
});

export default function MenuPage() {
  const menuImages = getMenuImagePaths();

  return (
    <Section aria-label="Menu" className="py-14 md:py-20">
      <Container>
        <h1 className="sr-only">Menu</h1>
        <MenuImages images={menuImages} />
      </Container>
    </Section>
  );
}
