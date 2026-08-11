import type { Metadata } from 'next'

// page.tsx is a client component (it holds the form state), and client
// components cannot export metadata — hence this layout.
const description =
  'Get in touch with Mohamed Aziz Ben Slima, Data Science and AI student. Email, GitHub, LinkedIn and a direct contact form.'

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Mohamed Aziz Ben Slima',
    description,
    url: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
