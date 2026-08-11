import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Keep in sync with the routes under src/app. Priorities are relative hints
// only: the home page first, then the pages a recruiter is most likely to want.
const routes = [
  { path: '', priority: 1 },
  { path: '/about', priority: 0.9 },
  { path: '/projects', priority: 0.9 },
  { path: '/experience', priority: 0.8 },
  { path: '/skills', priority: 0.8 },
  { path: '/certifications', priority: 0.7 },
  { path: '/activities', priority: 0.6 },
  { path: '/contact', priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }))
}
