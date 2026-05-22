/**
 * Site-level configuration. Single source of truth for metadata, contact,
 * booking, social, and community links. See docs/INTEGRATIONS.md.
 */

export const siteConfig = {
  name: "Uptown Gaming",
  shortDescription:
    "Community-driven gaming events, venue experiences, and bookings.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.uptowngaming.net",

  contact: {
    email: "contact@uptowngaming.net",
  },

  booking: {
    mondayFormUrl:
      "https://forms.monday.com/forms/bee8248285b6703275f57a30ea76c9bc?r=use1",
  },

  funnel: {
    linktreeUrl: "https://linktr.ee/UGNY",
  },

  social: {
    instagram: "https://www.instagram.com/ug_nyc",
    tiktok: "https://www.tiktok.com/@ug_nyc",
    x: "https://x.com/UG_NYC",
    facebook: "https://www.facebook.com/uptowngamingnyc",
    twitch: "https://www.twitch.tv/ug_nyc",
  },

  community: {
    discord: "https://discord.com/invite/UGNY",
    startGgHub: "https://www.start.gg/hub/up-the-block-ugny",
    membershipUrl: "https://app.joinit.com/o/ugny",
    gofundmeUrl:
      "https://www.gofundme.com/f/help-uptown-gaming-reopen?attribution_id=sl%3A1d657b5b-3c90-42e1-ad91-980c2d26c81b&lang=en_US&ts=1768405588",
    gofundmeTitle: "Help Uptown Gaming Rebuild",
    /** On-site menu page (nav + footer). */
    menuUrl: "/menu",
  },

  sms: {
    keyword: "JOIN",
    phoneDisplay: "1-833-341-1659",
    smsUri: "sms:18333411659?body=JOIN",
    confirmKeyword: "YES",
    termsUrl: "https://pos.toasttab.com/terms-of-service",
    privacyUrl: "https://pos.toasttab.com/privacy",
    qrImagePath: "/images/sms-qr.png",
  },

  membership: {
    priceLabel: "$35/month",
    benefits: [
      "Waived venue fee on all tournaments",
      "10% discount on food & drinks",
      "Access to member-only events",
      "Early access to merchandise",
      "Video Game Wall daily free time",
      "Exclusive Discord icon & members-only channels",
    ],
  },

  fundraising: {
    /** Hide GoFundMe links in UI when set false (e.g. after campaign ends). */
    showSupportLink: true,
    supportBlurb:
      "We reopened February 6, 2026. Thank you for the support that got us there. We’re still fundraising through February to restock, organize, and start strong in spring.",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const bookingFormUrl = siteConfig.booking.mondayFormUrl;

/** Footer social list — platform drives icon; label for accessibility. */
export const socialLinks = [
  {
    platform: "instagram" as const,
    label: "Instagram",
    href: siteConfig.social.instagram,
  },
  {
    platform: "tiktok" as const,
    label: "TikTok",
    href: siteConfig.social.tiktok,
  },
  { platform: "x" as const, label: "X", href: siteConfig.social.x },
  {
    platform: "facebook" as const,
    label: "Facebook",
    href: siteConfig.social.facebook,
  },
  {
    platform: "twitch" as const,
    label: "Twitch",
    href: siteConfig.social.twitch,
  },
  {
    platform: "discord" as const,
    label: "Discord",
    href: siteConfig.community.discord,
  },
] as const;

export const communityLinks = [
  {
    label: "start.gg hub",
    href: siteConfig.community.startGgHub,
    description: "Find tournaments and events hosted by Uptown Gaming.",
  },
  {
    label: "Membership",
    href: siteConfig.community.membershipUrl,
    description: "Join on JoinIt for member perks, discounts, and exclusive access.",
  },
  {
    label: "All links (Linktree)",
    href: siteConfig.funnel.linktreeUrl,
    description: "One link for socials, booking, and more from our bio and QR codes.",
  },
] as const;
