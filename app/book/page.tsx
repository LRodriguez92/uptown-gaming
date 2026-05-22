import { redirect } from "next/navigation";
import { bookingFormUrl } from "@/config/site";

/** Official booking handoff — redirects to Monday.com public form (same tab). */
export default function BookPage() {
  redirect(bookingFormUrl);
}
