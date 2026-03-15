import localFont from "next/font/local";

export const qtPalatine = localFont({
  src: [
    {
      path: "../public/fonts/qt-palatine/QTPalatine.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/qt-palatine/QTPalatine-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/qt-palatine/QTPalatine-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const powerr = localFont({
  src: [
    {
      path: "../public/fonts/powerr/PowerrExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "serif"],
});