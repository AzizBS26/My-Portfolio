import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Award,
  ExternalLink,
  ChevronRight
} from 'lucide-react'
import { CERTIFICATIONS } from '@/data/portfolio'


export default function CertificationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background data-grid-pattern">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
          <div className="absolute top-16 left-12 w-44 h-44 bg-primary/18 rounded-full blur-3xl" />
          <div className="absolute bottom-16 right-12 w-56 h-56 bg-accent/18 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-radial from-primary/10 via-accent/5 to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to Portfolio
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-primary to-accent/80 dark:from-foreground dark:via-accent dark:to-foreground bg-clip-text text-transparent">
              Certifications
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
            Professional certifications and achievements in Data Science, AI, and Cloud Technologies
          </p>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Certifications Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <Card key={cert.name} className="card-hover animate-fade-in-up overflow-hidden h-full flex flex-col group" style={{ animationDelay: `${index * 0.05}s` }}>
                {cert.image && (
                  <div className="relative h-48 w-full bg-secondary overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                      {cert.icon || <Award className="w-5 h-5 text-primary" />}
                    </div>
                  </div>
                )}
                <CardHeader className="flex-grow">
                  <div className="flex items-start gap-3">
                    {!cert.image && (
                      <div className="flex-shrink-0 mt-1">
                        {cert.icon || <Award className="w-6 h-6 text-primary" />}
                      </div>
                    )}
                    <div className="flex-grow">
                      <CardTitle className="text-lg leading-tight">{cert.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <span className="font-medium text-primary">{cert.issuer}</span>
                      </CardDescription>
                      <CardDescription className="text-xs mt-1 flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        {cert.date}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                {cert.link && (
                  <CardFooter className="pt-0">
                    <Button variant="outline" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        View Credential <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8 px-4 mt-auto">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mohamed Aziz Ben Slima. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
