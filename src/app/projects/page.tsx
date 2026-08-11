import * as React from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  GraduationCap,
  Briefcase,
  Sparkles,
  ExternalLink
} from 'lucide-react'
import { PROJECTS } from '@/data/portfolio'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Academic, internship and personal projects of Mohamed Aziz Ben Slima in machine learning, NLP, computer vision and web development.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects | Mohamed Aziz Ben Slima',
    description: 'Academic, internship and personal projects of Mohamed Aziz Ben Slima in machine learning, NLP, computer vision and web development.',
    url: '/projects',
  },
}


function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <Card className="card-hover project-card-lift animate-fade-in-up h-full flex flex-col group" style={{ animationDelay: `${index * 0.05}s` }}>
      <CardHeader>
        <div className="mb-4 p-4 bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl w-fit animate-float transition-all group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-lg group-hover:shadow-accent/20" style={{ animationDelay: `${index * 0.2}s` }}>
          <div className="text-accent">
            {project.icon}
          </div>
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors">{project.title}</CardTitle>
        {project.dates && (
          <CardDescription className="text-xs font-semibold text-accent/80 mt-1">
            {project.dates}{project.company ? ` • ${project.company}` : ''}
          </CardDescription>
        )}
        <CardDescription className="line-clamp-3 mt-3 leading-relaxed">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors border border-transparent hover:border-accent/30">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full gap-2 btn-glow group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all font-semibold" asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function ProjectsPage() {
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
              Projects
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
            A collection of my academic research, internship contributions, and personal projects
          </p>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Projects Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Academic Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-7 w-7 text-primary" />
              Academic Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.academic.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* Internship Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-7 w-7 text-primary" />
              Internship Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.internship.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index + 4} />
              ))}
            </div>
          </div>

          {/* Personal Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="h-7 w-7 text-primary" />
              Personal Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.personal.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index + 7} />
              ))}
            </div>
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
