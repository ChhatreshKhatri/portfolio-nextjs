import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chhatresh Khatri | Portfolio",
    short_name: "Chhatresh Khatri",
    description:
      "Chhatresh Khatri Portfolio. Full stack Web Developer and a self-motivated, initiative-taking and an enthusiastic professional.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "favicon.ico",
        sizes: "16x16 24x24 32x32 48x48 64x64 96x96 128x128 192x192 256x256 512x512",
        type: "image/x-icon",
      },
    ],
  };
}
