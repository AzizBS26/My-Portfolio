import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ChatAssistant } from "@/components/chat-assistant";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { PERSONAL_INFO } from "@/data/portfolio";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const DESCRIPTION =
  "Data Science student specializing in AI, LLMs, and Machine Learning. Building intelligent solutions with deep learning and NLP.";

export const metadata: Metadata = {
  // Required for Open Graph and canonical URLs to resolve to absolute paths.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mohamed Aziz Ben Slima - Data Science & AI Portfolio",
    // Sub-pages set only their own title; this appends the site name.
    template: "%s | Mohamed Aziz Ben Slima",
  },
  description: DESCRIPTION,
  keywords: ["Data Science", "AI", "Machine Learning", "LLM", "Deep Learning", "NLP", "Computer Vision", "Portfolio"],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: '/logo-AB.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Mohamed Aziz Ben Slima - Data Science & AI Portfolio",
    description: DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: "/profile.jpg", width: 1200, height: 1200, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Aziz Ben Slima - Data Science & AI Portfolio",
    description: DESCRIPTION,
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
        style={{ fontFamily: 'var(--font-inter), var(--font-poppins), system-ui, sans-serif' }}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = stored === 'light' || stored === 'dark' ? stored : (prefersDark ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
                // Enables the scroll-reveal hidden state only when JS is running
                document.documentElement.setAttribute('data-reveal-ready', '');
              } catch (e) {}
            })();`,
          }}
        />
        {/* Person schema: lets Google tie the site to you as an entity rather
            than treating it as an anonymous page. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: PERSONAL_INFO.name,
              url: SITE_URL,
              image: `${SITE_URL}/profile.jpg`,
              email: PERSONAL_INFO.email,
              jobTitle: PERSONAL_INFO.title,
              description: PERSONAL_INFO.bio,
              sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
            }),
          }}
        />
        {children}
        <ScrollReveal />
        <Toaster />
        <ChatAssistant />
      </body>
    </html>
  );
}
