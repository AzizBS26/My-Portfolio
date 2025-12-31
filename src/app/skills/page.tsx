'use client'

import * as React from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ChevronRight, Folder, Brain, Users, MessageSquare, RefreshCw, Lightbulb, Clock, Code, BarChart3 } from 'lucide-react'
import {
  FaAws,
  FaGithub,
  FaPython,
  FaRobot,
  FaBrain as FaBrainIcon,
  FaJava,
  FaPhp
} from 'react-icons/fa'
import {
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiPython,
  SiCplusplus,
  SiDotnet,
  SiR,
  SiHtml5,
  SiCss3,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiSymfony,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiOracle,
  SiDocker,
  SiJenkins,
  SiIntellijidea,
  SiJupyter
} from 'react-icons/si'
import { TbLetterC } from 'react-icons/tb'

const SKILLS = {
  'Programming Languages': [
    { name: 'Python', icon: <SiPython className="w-5 h-5 text-yellow-400" /> },
    { name: 'C', icon: <TbLetterC className="w-5 h-5 text-blue-500" /> },
    { name: 'C++', icon: <SiCplusplus className="w-5 h-5 text-blue-500" /> },
    { name: 'Java', icon: <FaJava className="w-5 h-5 text-orange-500" /> },
    { name: 'PHP', icon: <FaPhp className="w-5 h-5 text-indigo-500" /> },
    { name: '.NET', icon: <SiDotnet className="w-5 h-5 text-purple-500" /> },
    { name: 'R', icon: <SiR className="w-5 h-5 text-sky-500" /> }
  ],
  'Artificial Intelligence & Machine Learning': [
    { name: 'TensorFlow', icon: <SiTensorflow className="w-5 h-5 text-orange-400" /> },
    { name: 'PyTorch', icon: <SiPytorch className="w-5 h-5 text-orange-500" /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn className="w-5 h-5 text-amber-500" /> },
    { name: 'Pandas', icon: <SiPandas className="w-5 h-5 text-purple-600" /> },
    { name: 'NumPy', icon: <SiNumpy className="w-5 h-5 text-blue-500" /> },
    { name: 'OpenCV', icon: <SiOpencv className="w-5 h-5 text-green-500" /> },
    { name: 'NLP', icon: <FaBrainIcon className="w-5 h-5 text-pink-500" /> },
    { name: 'RAG', icon: <FaRobot className="w-5 h-5 text-emerald-500" /> }
  ],
  'Databases & Data': [
    { name: 'SQL/MySQL', icon: <SiMysql className="w-5 h-5 text-blue-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-5 h-5 text-green-600" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-5 h-5 text-sky-700" /> },
    { name: 'Oracle', icon: <SiOracle className="w-5 h-5 text-red-500" /> },
    { name: 'Power BI', icon: <BarChart3 className="w-5 h-5 text-yellow-500" /> }
  ],
  'Frontend Technologies': [
    { name: 'HTML5', icon: <SiHtml5 className="w-5 h-5 text-orange-500" /> },
    { name: 'CSS3', icon: <SiCss3 className="w-5 h-5 text-blue-500" /> },
    { name: 'React.js', icon: <SiReact className="w-5 h-5 text-cyan-400" /> },
    { name: 'Angular', icon: <SiAngular className="w-5 h-5 text-red-500" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="w-5 h-5 text-foreground" /> }
  ],
  'Backend Frameworks': [
    { name: 'Node.js', icon: <SiNodedotjs className="w-5 h-5 text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="w-5 h-5 text-foreground" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="w-5 h-5 text-green-600" /> },
    { name: 'Symfony', icon: <SiSymfony className="w-5 h-5 text-foreground" /> }
  ],
  'Cloud & DevOps': [
    { name: 'Docker', icon: <SiDocker className="w-5 h-5 text-blue-500" /> },
    { name: 'AWS', icon: <FaAws className="w-5 h-5 text-orange-500" /> },
    { name: 'Git/GitHub', icon: <FaGithub className="w-5 h-5" /> },
    { name: 'CI/CD', icon: <SiJenkins className="w-5 h-5 text-red-500" /> }
  ],
  'Development Tools': [
    { name: 'VS Code', icon: <Code className="w-5 h-5 text-blue-500" /> },
    { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="w-5 h-5 text-purple-600" /> },
    { name: 'Teams', icon: <Users className="w-5 h-5 text-purple-500" /> },
    { name: 'Jupyter', icon: <SiJupyter className="w-5 h-5 text-orange-500" /> }
  ],
  'Soft Skills': [
    { name: 'Analytic Thinking', icon: <Brain className="w-5 h-5 text-accent" /> },
    { name: 'Team Work', icon: <Users className="w-5 h-5 text-accent" /> },
    { name: 'Communication', icon: <MessageSquare className="w-5 h-5 text-accent" /> },
    { name: 'Adaptability', icon: <RefreshCw className="w-5 h-5 text-accent" /> },
    { name: 'Problem Solving', icon: <Lightbulb className="w-5 h-5 text-accent" /> },
    { name: 'Time Management', icon: <Clock className="w-5 h-5 text-accent" /> }
  ]
}

function SkillBadge({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary/80 border border-border hover:border-accent/50 transition-all cursor-default group">
      <span className="text-lg group-hover:scale-110 transition-transform flex items-center">{icon}</span>
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

function SkillCategory({ title, skills }: {
  title: string
  skills: Array<{ name: string; icon: React.ReactNode }>
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
