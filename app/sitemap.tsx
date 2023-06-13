import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.chhatreshkhatri.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.chhatreshkhatri.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.chhatreshkhatri.com/projects',
      lastModified: new Date(),
    }
  ];
}