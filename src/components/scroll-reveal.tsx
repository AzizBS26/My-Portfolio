'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

/**
 * Reveals elements carrying `.animate-fade-in-up` as they enter the viewport.
 *
 * Entrance animations only communicate something when the user can see them
 * happen. Running every animation on load means below-the-fold content has
 * already finished animating by the time it is scrolled into view.
 *
 * Renders nothing; mounted once in the root layout. Re-runs on navigation so
 * client-side route changes observe the new page's elements.
 */
export function ScrollReveal() {
  const pathname = usePathname()

  React.useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.animate-fade-in-up')
    )
    if (elements.length === 0) return

    const reveal = (el: Element) => el.setAttribute('data-revealed', 'true')

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach(reveal)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          reveal(entry.target)
          observer.unobserve(entry.target)
        })
      },
      // Trigger slightly before the element is fully visible so the motion
      // resolves around the moment it reaches a comfortable reading position.
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
