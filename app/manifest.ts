import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chhatresh Khatri | Portfolio',
    short_name: 'Chhatresh Khatri',
    description: 'Chhatresh Khatri Portfolio. Full stack Web Developer and a self-motivated, initiative-taking and an enthusiastic professional.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
        {
            src: "icon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: 'any',
          },
          {
            src: "apple-icon.png",
            type: "image/png",
            sizes: "180x180"
          },
          {
            src: "icon.png",
            type: "image/png",
            sizes: "512x512"
          }
    ],
  }
}