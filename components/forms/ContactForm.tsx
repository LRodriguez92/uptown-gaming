import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  className?: string;
};

/**
 * Contact / booking inquiry form.
 * COMPONENT_SPEC: BookingInquiryForm suggested fields; kept lightweight and email-based for MVP.
 * No custom booking engine or backend; submits via mailto to the booking email.
 */
export function ContactForm({ className }: ContactFormProps) {
  const action = `mailto:${siteConfig.contact.bookingEmail}`;

  return (
    <form
      action={action}
      method="POST"
      className={cn("space-y-4", className)}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-(--foreground)"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-1 w-full rounded-md border border-(--foreground)/20 bg-(--surface-light) px-3 py-2 text-(--foreground) shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-(--foreground)"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-md border border-(--foreground)/20 bg-(--surface-light) px-3 py-2 text-(--foreground) shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="eventType"
            className="block text-sm font-medium text-(--foreground)"
          >
            Event type
          </label>
          <input
            id="eventType"
            name="eventType"
            placeholder="Tournament, meetup, private event…"
            className="mt-1 w-full rounded-md border border-(--foreground)/20 bg-(--surface-light) px-3 py-2 text-(--foreground) shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2"
          />
        </div>
        <div>
          <label
            htmlFor="preferredDate"
            className="block text-sm font-medium text-(--foreground)"
          >
            Preferred date or timeframe
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            placeholder="e.g. Next month, Friday evenings"
            className="mt-1 w-full rounded-md border border-(--foreground)/20 bg-(--surface-light) px-3 py-2 text-(--foreground) shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-(--foreground)"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-md border border-(--foreground)/20 bg-(--surface-light) px-3 py-2 text-(--foreground) shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2"
        />
        <p className="mt-1 text-xs text-(--foreground)/70">
          Share any details that help us understand your event or question.
        </p>
      </div>

      <div className="pt-2">
        <Button type="submit">
          Send inquiry
        </Button>
      </div>
    </form>
  );
}

