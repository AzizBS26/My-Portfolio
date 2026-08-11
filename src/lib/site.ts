/**
 * Canonical origin of the site, used for metadataBase, canonical URLs and the
 * sitemap.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL — set this in Vercel, especially with a custom domain.
 *  2. VERCEL_PROJECT_PRODUCTION_URL — the project's production domain.
 *  3. VERCEL_URL — the current deployment, so previews self-reference.
 *  4. localhost, for local development only.
 */
const withScheme = (host?: string) => (host ? `https://${host}` : undefined)

const fromEnv =
  process.env.NEXT_PUBLIC_SITE_URL ??
  withScheme(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  withScheme(process.env.VERCEL_URL)

// Shipping localhost canonical tags and a localhost sitemap would tell Google
// the authoritative copy of every page lives on a machine it cannot reach —
// worse than emitting nothing. Fail the deploy instead of publishing that.
// process.env.VERCEL is only set on Vercel, so local builds keep working.
if (!fromEnv && process.env.VERCEL) {
  throw new Error(
    'No site URL available. Set NEXT_PUBLIC_SITE_URL in the Vercel project ' +
      'environment variables, or re-enable "Automatically expose System ' +
      'Environment Variables" in Project Settings.'
  )
}

export const SITE_URL = (fromEnv ?? 'http://localhost:3000').replace(/\/$/, '')

export const SITE_NAME = 'Mohamed Aziz Ben Slima'
