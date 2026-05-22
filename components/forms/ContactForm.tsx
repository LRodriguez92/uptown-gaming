"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  className?: string;
};

function buildMailtoUrl(form: HTMLFormElement): string {
  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const eventType = String(data.get("eventType") ?? "").trim();
  const preferredDate = String(data.get("preferredDate") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    eventType ? `Event type: ${eventType}` : null,
    preferredDate ? `Preferred date/timeframe: ${preferredDate}` : null,
    "",
    message,
  ].filter((line): line is string => line !== null);

  const params = new URLSearchParams({
    subject: "Uptown Gaming inquiry",
    body: lines.join("\n"),
  });

  return `mailto:${siteConfig.contact.email}?${params.toString()}`;
}

/**
 * General contact inquiry form (not official booking — use /book → Monday).
 * Opens the user's mail client with a prefilled message to contact@uptowngaming.net.
 */
export function ContactForm({ className }: ContactFormProps) {
  return (
    <form
      className={cn("space-y-4", className)}
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = buildMailtoUrl(e.currentTarget);
      }}
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
          Share any details that help us understand your question. Submitting
          opens your email app with this inquiry prefilled. To book the space,
          use the official booking form on the Book the Space page.
        </p>
      </div>

      <div className="pt-2">
        <Button type="submit">Send inquiry</Button>
      </div>
    </form>
  );
}
