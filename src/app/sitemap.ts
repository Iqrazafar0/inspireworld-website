import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const routes = ["", "/products", "/about", "/contact", "/terms", "/privacy", "/returns", "/delivery"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${siteUrl}${r || "/"}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : r.startsWith("/products") || r === "/contact" ? 0.8 : 0.5,
  }));
}
