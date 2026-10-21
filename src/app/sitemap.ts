import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: siteConfig.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/privacidad`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/terminos`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
