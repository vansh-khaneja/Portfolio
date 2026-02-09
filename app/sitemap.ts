import { MetadataRoute } from 'next';
import portfolioData from '@/data/portfolio.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanshkhaneja.com';
  
  // Main page
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  // Blog posts
  portfolioData.blog.forEach((post) => {
    if (post.link && post.link !== '#') {
      routes.push({
        url: post.link,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  });

  return routes;
}

