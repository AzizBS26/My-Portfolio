'use client'

import * as React from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ChevronRight, Folder } from 'lucide-react'

const SKILLS = {
  'Programming Languages': [
    { name: 'Python', icon: '🐍' },
    { name: 'C', icon: '©' },
    { name: 'C++', icon: '⚡' },
    { name: 'Java', icon: '☕' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'PHP', icon: '🐘' },
    { name: '.NET', icon: '#' },
    { name: 'R', icon: 'R' }
  ],
  'Artificial Intelligence & Machine Learning': [
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'Scikit-learn', icon: '📊' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'NumPy', icon: '🔢' },
    { name: 'OpenCV', icon: '👁' },
    { name: 'NLP', icon: '💬' },
    { name: 'RAG', icon: '🤖' }
  ],
  'Databases & Data': [
    { name: 'SQL/MySQL', icon: '🗄️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Oracle', icon: '⭕' },
    { name: 'Power BI', icon: '📊' }
  ],
  'Frontend Technologies': [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'React.js', icon: '⚛' },
    { name: 'Angular', icon: '🅰' },
    { name: 'Next.js', icon: 'N' }
  ],
  'Backend Frameworks': [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: 'E' },
    { name: 'NestJS', icon: '🪺' },
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'Symfony', icon: 'S' }
  ],
  'Cloud & DevOps': [
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '🟧' },
    { name: 'Git/GitHub', icon: '🔀' },
    { name: 'CI/CD', icon: '♻' }
  ],
  'Development Tools': [
    { name: 'VS Code', icon: '💻' },
    { name: 'IntelliJ IDEA', icon: '🧩' },
    { name: 'Teams', icon: '👥' },
    { name: 'Jupyter', icon: '📓' }
  ],
  'Soft Skills': [
    { name: 'Analytic Thinking', icon: '🧠' },
    { name: 'Team Work', icon: '👥' },
    { name: 'Communication', icon: '💬' },
    { name: 'Adaptability', icon: '🔄' },
    { name: 'Problem Solving', icon: '💡' },
    { name: 'Time Management', icon: '⏰' }
  ]
}

function SkillBadge({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary/80 border border-border hover:border-accent/50 transition-all cursor-default group">
      <span className="text-lg group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

function SkillCategory({ title, skills }: {
  title: string
  skills: Array<{ name: string; icon: string }>
}) {
  return (
    <Card className="h-full card-hover">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Folder className="h-5 w-5 text-accent" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default function SkillsPage() {
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
              Skills & Technologies
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
            Comprehensive overview of my technical expertise across programming, frameworks, tools, and soft skills
          </p>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Skills Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <SkillCategory key={category} title={category} skills={skills} />
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
