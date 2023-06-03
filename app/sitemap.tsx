import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.chhatreshkhatri.com',
      lastModified: new Date(),
    }
  ];
}