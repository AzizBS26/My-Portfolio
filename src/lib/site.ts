/**
 * Canonical origin of the site, used for metadataBase, canonical URLs and the
 * sitemap.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL — set this in Vercel once you have a custom domain.
 *  2. VERCEL_PROJECT_PRODUCTION_URL — injected by Vercel, points at the
 *     production deployment even when building a preview.
 *  3. localhost, for local development.
 */
const fromEnv =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined)

export const SITE_URL = (fromEnv ?? 'http://localhost:3000').replace(/\/$/, '')

export const SITE_NAME = 'Mohamed Aziz Ben Slima'
