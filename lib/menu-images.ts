import fs from "fs";
import path from "path";

const MENU_DIR = path.join(process.cwd(), "public", "menu");

/**
 * Menu page images from public/menu/, sorted by filename (natural order).
 * Add or replace PNGs and redeploy; names like ug-full-menu-1.png … -10.png sort correctly.
 */
export function getMenuImagePaths(): string[] {
  if (!fs.existsSync(MENU_DIR)) return [];

  return fs
    .readdirSync(MENU_DIR)
    .filter((file) => /\.png$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/menu/${file}`);
}
