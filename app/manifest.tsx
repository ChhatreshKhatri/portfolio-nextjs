import { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chhatresh Khatri | Portfolio",
    short_name: "Chhatresh Khatri",
    description: "Chhatresh Khatri Portfolio. Full stack Web Developer and a self-motivated, initiative-taking and an enthusiastic professional.",
    start_url: "/",
    display: "standalone",
    background_color: "#191919",
    theme_color: "#191919",
    icons: [
      { src: "https://cdn.chhatreshkhatri.com/icons/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },
      { src: "https://cdn.chhatreshkhatri.com/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "https://cdn.chhatreshkhatri.com/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
