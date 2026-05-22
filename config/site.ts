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
    menuUrl:
      "https://drive.google.com/file/d/1lFUt1mGZbxm7V4elYJvoR0-oLFgNnLhO/view",
  },

  sms: {
    keyword: "JOIN",
    phoneDisplay: "1-833-341-1659",
    smsUri: "sms:18333411659?body=JOIN",
    confirmKeyword: "YES",
    termsUrl: "https://pos.toasttab.com/terms-of-service",
    privacyUrl: "https://pos.toasttab.com/privacy",
    flyerImagePath: "/images/sms-flyer.png",
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

/** Footer / contact social list with display labels. */
export const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "TikTok", href: siteConfig.social.tiktok },
  { label: "X", href: siteConfig.social.x },
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "Twitch", href: siteConfig.social.twitch },
] as const;

export const communityLinks = [
  { label: "Discord", href: siteConfig.community.discord },
  { label: "start.gg hub", href: siteConfig.community.startGgHub },
  { label: "Membership", href: siteConfig.community.membershipUrl },
  { label: "Food & drink menu", href: siteConfig.community.menuUrl },
  { label: "All links (Linktree)", href: siteConfig.funnel.linktreeUrl },
] as const;
