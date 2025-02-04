import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
   return {
      rules: {
         userAgent: "*",
         allow: "/",
         disallow: ["/api/", "/_next/", "/public/"],
      },
      sitemap: "https://nyxui.design/sitemap.xml",
   }
}
