import type { MetadataRoute } from 'next';

const routes = ['/', '/product', '/use-cases', '/security', '/security-policy', '/partners', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `https://vectorvue.nyxera.cloud${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.8
  }));
}
