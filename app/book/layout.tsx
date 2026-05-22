import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Book the Space",
  description:
    "Host your next event at Uptown Gaming. Inquire about tournaments, meetups, and private bookings.",
  path: "/book",
});

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
