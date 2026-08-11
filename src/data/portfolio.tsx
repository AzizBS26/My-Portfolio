import * as React from 'react'
import {
  Activity,
  BarChart3,
  Brain,
  Clock,
  Code,
  Lightbulb,
  MessageSquare,
  Mic,
  PawPrint,
  RefreshCw,
  Users
} from 'lucide-react'
import { FaAws, FaBrain, FaGithub, FaJava, FaPhp, FaRobot } from 'react-icons/fa'
import {
  SiAngular,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiHtml5,
  SiIntellijidea,
  SiJenkins,
  SiJupyter,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiNvidia,
  SiOpencv,
  SiOracle,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiR,
  SiReact,
  SiScikitlearn,
  SiSpringboot,
  SiSymfony,
  SiTensorflow
} from 'react-icons/si'
import { TbLetterC } from 'react-icons/tb'
import { HiScale } from 'react-icons/hi'

// Single source of truth for every piece of portfolio content.
// These objects used to be duplicated across page.tsx and each sub-page, which
// is how a certification and an image path once drifted out of sync.

export const PERSONAL_INFO = {
  name: 'Mohamed Aziz Ben Slima',
  title: 'Data Science Student & AI/LLM Builder',
  tagline: 'Building AI Agents, Fine-Tuned LLMs & Modern Web Applications',
  email: 'mohammedaziz.benslima@esprit.tn',
  github: 'https://github.com/AzizBS26',
  linkedin: 'https://www.linkedin.com/in/mohamed-aziz-ben-slima',
  bio: `I am a Data Science and AI enthusiast passionate about building intelligent solutions using large language models, fine-tuning techniques, and advanced AI tools like Ollama. I have hands-on experience in training and customizing models, designing AI pipelines, and leveraging machine learning for practical applications. Driven by curiosity and innovation, I aim to create impactful AI-powered solutions while continuously expanding my expertise in multimodal AI, computer vision, and strategic data-driven projects.`
}

export const SKILLS = {
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
    { name: 'NLP', icon: <FaBrain className="w-5 h-5 text-pink-500" /> },
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

export const PROFESSIONAL_EXPERIENCE = [
  {
    title: 'Data Analytics Intern',
    company: 'Tunisie Telecom',
    location: 'Tunis, Tunisia',
    period: 'Jul 2025 - Sep 2025',
    summary: 'Optimized ETL pipelines for SOS credit transactions and built interactive Power BI dashboards accelerating operational decision-making.',
    highlights: [
      'Churn prediction models with 87% accuracy',
      'Reduced ETL processing time for SOS credit transactions'
    ],
    tech: ['ETL', 'Power BI', 'ML', 'Python', 'SQL'],
    icon: <BarChart3 className="w-8 h-8 text-accent" />
  },
  {
    title: 'AI Intern',
    company: 'Première Consulting',
    location: 'Tunis, Tunisia',
    period: 'Jul 2025 - Aug 2025',
    summary: 'Designed and deployed a multilingual legal chatbot using advanced NLP with dynamic database retrieval for accurate responses.',
    highlights: [
      'Improved legal query matching accuracy with NLP',
      'Integrated RAG-style retrieval for up-to-date answers'
    ],
    tech: ['NLP', 'RAG', 'Python', 'Chatbot'],
    icon: <HiScale className="w-8 h-8 text-accent" />
  },
  {
    title: 'Data Analytics Intern',
    company: 'Attijari Bank',
    location: 'Tunis, Tunisia',
    period: 'Jun 2024 - Aug 2024',
    summary: 'Built Talend ETL pipelines and Power BI dashboards to improve data quality, reduce errors, and speed up trend analysis.',
    highlights: [
      'Improved data quality via Talend ETL',
      'Delivered cross-team Power BI reports'
    ],
    tech: ['Talend', 'ETL', 'Power BI', 'SQL'],
    icon: <BarChart3 className="w-8 h-8 text-accent" />
  }
]

export const INTERNSHIPS = [
  {
    title: 'Data Analytics Intern',
    company: 'Tunisie Telecom',
    location: 'Tunis, Tunisia',
    period: 'Jul 2025 - Sep 2025',
    duration: '3 months',
    description: 'Optimized ETL pipelines for SOS credit transactions, reducing processing time significantly. Developed interactive Power BI dashboards that accelerated operational decision-making across multiple departments.',
    achievements: [
      'Built churn prediction models with 87% accuracy, supporting retention of high-risk clients',
      'Optimized ETL pipelines for SOS credit transactions, reducing processing time',
      'Developed interactive Power BI dashboards that accelerated operational decision-making'
    ],
    technologies: ['ETL', 'Power BI', 'Machine Learning', 'Python', 'SQL'],
    icon: <BarChart3 className="w-8 h-8 text-accent" />
  },
  {
    title: 'AI Intern',
    company: 'Première Consulting',
    location: 'Tunis, Tunisia',
    period: 'Jul 2025 - Aug 2025',
    duration: '2 months',
    description: 'Designed and deployed a multilingual legal chatbot system that enhanced query resolution efficiency. Applied advanced NLP techniques to improve legal query matching accuracy with dynamic database retrieval.',
    achievements: [
      'Designed and deployed a multilingual legal chatbot enhancing query resolution efficiency',
      'Applied NLP techniques to improve legal query matching accuracy',
      'Integrated dynamic database retrieval to ensure up-to-date and accurate responses'
    ],
    technologies: ['NLP', 'Python', 'RAG', 'Chatbot', 'Flask'],
    link: 'https://github.com/AzizBS26/Chatbot-Juridique-Multilingue',
    icon: <HiScale className="w-8 h-8 text-accent" />
  },
  {
    title: 'Data Analytics Intern',
    company: 'Attijari Bank',
    location: 'Tunis, Tunisia',
    period: 'Jun 2024 - Aug 2024',
    duration: '3 months',
    description: 'Built robust ETL pipelines using Talend, improving overall data quality and reducing errors across the organization. Created comprehensive dashboards and reports in Power BI for trend analysis and business insights.',
    achievements: [
      'Built ETL pipelines using Talend, improving data quality and reducing errors',
      'Created dashboards and reports in Power BI, enabling faster trend analysis',
      'Collaborated with cross-functional teams to optimize workflows and deliver actionable insights'
    ],
    technologies: ['Talend', 'ETL', 'Power BI', 'SQL', 'Data Analysis'],
    icon: <BarChart3 className="w-8 h-8 text-accent" />
  }
]

export const PROJECTS = {
  academic: [
    {
      title: 'Deep Learning Model Development and Evaluation',
      description: 'Developed and trained deep learning models using Python and TensorFlow/PyTorch with data augmentation. Deployed models with integrated pipelines, providing actionable insights through visualizations.',
      tech: ['Python', 'TensorFlow', 'PyTorch', 'Data Augmentation'],
      link: 'https://github.com/AzizBS26/Local_AIAgent_NewsBotAI',
      icon: <Brain className="w-10 h-10" />,
      dates: 'Sep 2025 - Oct 2025'
    },
    {
      title: 'Emotional Speech Data Generation with VAE and Diffusion Models',
      description: 'Built a PyTorch pipeline to generate emotional speech using VAE and diffusion models. Validated synthetic data with a ResNet-50 classifier, achieving 98.3% accuracy on RAVDESS and EmoDB datasets.',
      tech: ['PyTorch', 'VAE', 'Diffusion Models', 'ResNet-50'],
      link: '#',
      icon: <Mic className="w-10 h-10" />,
      dates: 'May 2025'
    },
    {
      title: 'Cancer Detection Using Deep Learning',
      description: 'Developed a CNN for multi-class medical image classification with custom augmentation and optimization. Implemented training-validation pipelines to improve accuracy and generalization on real-world datasets.',
      tech: ['CNN', 'Python', 'Medical Imaging', 'Deep Learning'],
      link: '#',
      icon: <Activity className="w-10 h-10" />,
      dates: 'Feb 2025'
    },
    {
      title: 'Customer Loyalty & Business Insights',
      description: 'Analyzed customer behavior and built predictive models in Python to optimize loyalty programs. Developed a multimodal agent integrating dashboards, reports, and predictive insights for decision-making.',
      tech: ['Python', 'Power BI', 'ML', 'Multimodal AI'],
      link: 'https://github.com/AzizBS26/MarketMind-4DS3',
      icon: <BarChart3 className="w-10 h-10" />,
      dates: 'Nov 2024 - May 2025'
    }
  ],
  internship: [
    {
      title: 'Data Analytics Intern - Tunisie Telecom',
      description: 'Optimized ETL pipelines for SOS credit transactions, reducing processing time. Developed interactive Power BI dashboards that accelerated operational decision-making. Built churn prediction models with 87% accuracy.',
      tech: ['ETL', 'Power BI', 'ML', 'Churn Prediction'],
      link: '#',
      icon: <BarChart3 className="w-10 h-10" />,
      dates: 'Jul 2025 - Sep 2025',
      company: 'Tunisie Telecom'
    },
    {
      title: 'AI Intern - Première Consulting',
      description: 'Designed and deployed a multilingual legal chatbot, enhancing query resolution efficiency. Applied NLP techniques to improve legal query matching accuracy with dynamic database retrieval.',
      tech: ['NLP', 'Chatbot', 'Python', 'RAG'],
      link: 'https://github.com/AzizBS26/Chatbot-Juridique-Multilingue',
      icon: <HiScale className="w-10 h-10" />,
      dates: 'Jul 2025 - Aug 2025',
      company: 'Première Consulting'
    },
    {
      title: 'Data Analytics Intern - Attijari Bank',
      description: 'Built ETL pipelines using Talend, improving data quality and reducing errors. Created dashboards and reports in Power BI, enabling faster trend analysis and business insights.',
      tech: ['Talend', 'ETL', 'Power BI', 'SQL'],
      link: '#',
      icon: <BarChart3 className="w-10 h-10" />,
      dates: 'Jun 2024 - Aug 2024',
      company: 'Attijari Bank'
    }
  ],
  personal: [
    {
      title: 'Dog Breed Recommendation Chatbot',
      description: 'Intelligent web-based chatbot system that recommends dog breeds based on user preferences using NLP and machine learning. Features 195+ dog breeds, cosine similarity matching with 7 personality traits, real dog images from GitHub, ChatGPT-style interface, and full-screen image viewer.',
      tech: ['Python', 'Flask', 'NLP', 'Scikit-learn', 'pandas'],
      link: 'https://github.com/AzizBS26/Dog-Breed-Recommendation-Chatbot',
      icon: <PawPrint className="w-10 h-10" />,
      dates: '2025'
    }
  ]
}

export const EDUCATION = [
  {
    degree: 'Computer Science Engineering - Data Science Major',
    institution: 'ESPRIT School of Engineering',
    year: '2021 - Present',
    description: 'Specializing in software engineering, advanced databases, ML & DL, and AI & LLMs'
  }
]

export const CERTIFICATIONS: Array<{ name: string; issuer: string; date: string; image?: string; link?: string; icon?: React.ReactNode }> = [
  {
    name: 'AI Model Deployment on AWS',
    issuer: '365 Data Science',
    date: '2025',
    image: '/certifications/AI model Deployment on AWS.png',
    icon: <img src="/icons/365%20data%20science.png" alt="365 Data Science" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: '2025',
    image: '/certifications/aws certificate.png',
    icon: <FaAws className="w-6 h-6 text-orange-500" />
  },
  {
    name: 'Building Transformer-Based NLP Applications',
    issuer: 'NVIDIA Deep Learning Institute',
    date: '2025',
    image: '/certifications/Building Transformer-Based Natural Language Processing Applications.png',
    icon: <SiNvidia className="w-6 h-6 text-green-500" />
  },
  {
    name: 'Data Literacy Essentials',
    issuer: 'DataCamp',
    date: '2024',
    image: '/certifications/data literacy.png',
    icon: <img src="/icons/datacamp-svgrepo-com.svg" alt="DataCamp" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'Data Science Associate',
    issuer: 'DataCamp',
    date: '2025',
    image: '/certifications/datascience assoicate..png.jpg',
    icon: <img src="/icons/datacamp-svgrepo-com.svg" alt="DataCamp" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'Associate AI Engineer for Data Science Associate',
    issuer: 'DataCamp',
    date: '2025',
    image: '/certifications/AssociateAIEngineer.png',
    icon: <img src="/icons/datacamp-svgrepo-com.svg" alt="DataCamp" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'Developing LLM Applications with LangChain',
    issuer: 'DataCamp',
    date: '2025',
    image: '/certifications/developping llm application with langfchain.jpg',
    icon: <img src="/icons/datacamp-svgrepo-com.svg" alt="DataCamp" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'Fully Automated MLOps',
    issuer: '365 Data Science',
    date: '2025',
    image: '/certifications/Fully Automated MLops.png',
    icon: <img src="/icons/365%20data%20science.png" alt="365 Data Science" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA Deep Learning Institute',
    date: '2024',
    image: '/certifications/Fundamentals of Deep Learning.jpg',
    icon: <SiNvidia className="w-6 h-6 text-green-500" />
  },
  {
    name: 'GitHub Foundations',
    issuer: 'DataCamp',
    date: '2025',
    image: '/certifications/githyb foundation.png',
    icon: <img src="/icons/datacamp-svgrepo-com.svg" alt="DataCamp" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'Hedera Certification',
    issuer: 'Hedera',
    date: '2025',
    image: '/certifications/hedera.png',
    icon: <img src="/icons/hedera.png" alt="Hedera" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    image: '/certifications/introduction to modern IA.jpg',
    icon: <img src="/icons/cisco-svgrepo-com.svg" alt="Cisco" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'OpenCV Computer Vision',
    issuer: 'OpenCV Academy',
    date: '2025',
    image: '/certifications/opencv.png',
    icon: <SiOpencv className="w-6 h-6 text-blue-600" />
  },
  {
    name: 'Understanding Artificial Intelligence',
    issuer: 'DataCamp',
    date: '2022',
    image: '/certifications/Understanding Artificial Intelligence certificate.png',
    icon: <img src="/icons/datacamp-svgrepo-com.svg" alt="DataCamp" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'IEEE Mandate',
    issuer: 'IEEE ESPRIT SB',
    date: '2024',
    image: '/certifications/IEEE MONDAT.jpg',
    icon: <img src="/icons/ieee-icon.svg" alt="IEEE" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'IEEE Memberships',
    issuer: 'IEEE',
    date: '2025',
    image: '/certifications/IEEE Membership.jpg',
    icon: <img src="/icons/ieee-icon.svg" alt="IEEE" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'Arduino Certification',
    issuer: 'Arduino',
    date: '2022',
    image: '/certifications/Arduino.jpg',
    icon: <img src="/icons/arduino-svgrepo-com.svg" alt="Arduino" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'ICRA Attending',
    issuer: 'ICRA',
    date: '2025',
    image: '/certifications/ICRA ATTENDING.jpg',
    icon: <img src="/icons/ieee-icon.svg" alt="ICRA" className="w-6 h-6 opacity-90" />
  },
  {
    name: 'IDEA Certificate',
    issuer: 'IDEA',
    date: '2025',
    image: '/certifications/IDEA_Certificate.jpg',
    icon: <img src="/icons/ieee-icon.svg" alt="IDEA" className="w-6 h-6 opacity-90" />
  }
]

export const LANGUAGES = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Intermediate' },
  { name: 'English', level: 'Intermediate' }
]

export const ACTIVITIES: Array<{
  title: string
  org?: string
  role?: string
  date: string
  image?: string
  description?: string
  link?: string
  icon?: React.ReactNode
}> = [
  {
    title: 'Computer Society Tunisian Annual Meeting 1.0',
    org: 'Computer Society Tunisia',
    role: 'Sponsoring Manager',
    date: 'November 22-23, 2024',
    image: '/activities/Cstam.jpg',
    description: 'Served as Sponsoring Manager for the inaugural Computer Society Tunisian Annual Meeting, overseeing sponsorship partnerships and coordination for this major community event.'
  },
  {
    title: 'ESPRIT RAS ROBOTS 3.0',
    org: 'ESPRIT Robotics & Automation Society',
    role: 'Treasurer',
    date: 'May 1, 2025',
    image: '/activities/err.jpg',
    description: 'Managed financial operations and budgeting as Treasurer for ESPRIT RAS ROBOTS 3.0, a major robotic competition and event showcasing innovation in robotics and automation.'
  },
  {
    title: 'IEEE Robotics and Automation Society Chapter',
    org: 'IEEE RAS ESPRIT SB',
    role: 'Vice Chair',
    date: '2024-2025',
    image: '/activities/ras3.jpg',
    description: 'As Vice Chair of the IEEE Robotics and Automation Society Chapter, I supported coordination of chapter activities, led strategic planning, and organized technical workshops and competitions. I collaborated with the chair and executive team to engage members, foster collaboration, and ensure smooth execution of events promoting robotics education and innovation.'
  },
  {
    title: 'International Conference on Robotics and Automation (ICRA)',
    org: 'IEEE ICRA, Atlanta, GA',
    role: 'IDEAS Award Travel Grant Recipient',
    date: 'May 19-23, 2025',
    image: '/activities/icra.jpg',
    description: 'Selected as one of 6 recipients of the IDEAS award travel grant to participate in ICRA 2025 in Atlanta, Georgia. Engaged with the international robotics and automation community, presented research, and networked with leading experts in the field.'
  },
  {
    title: 'ESPRIT RAS ROBOTS 1.0',
    org: 'ESPRIT Robotics & Automation Society',
    role: 'Organizing Committee Member',
    date: 'March 2023',
    image: '/activities/rasrobots1.0.jpg',
    description: 'Served as an Organizing Committee member for the inaugural edition of ESPRIT RAS ROBOTS 1.0, helping launch this pioneering robotics competition and establishing the foundation for future editions of the event.'
  },
  {
    title: 'ESPRIT RAS ROBOTS 2.0',
    org: 'ESPRIT Robotics & Automation Society',
    role: 'Organizing Committee Member',
    date: 'February 2024',
    image: '/activities/rasrobots2.0.jpg',
    description: 'Continued as an Organizing Committee member for the second edition of ESPRIT RAS ROBOTS, overseeing logistics, participant coordination, and ensuring a successful event that further established the competition as a premier robotics showcase.'
  },
  {
    title: 'IAS Tunisian Annual Meeting 3.0',
    org: 'IEEE Industry Applications Society Tunisia',
    role: 'Tech Challenge Winner',
    date: 'October 2022',
    image: '/activities/IASTAM3.0.jpg',
    description: 'Participated in the IAS Tunisian Annual Meeting 3.0 and won 1st place in the tech challenge, demonstrating excellence in technical problem-solving and innovation.'
  }
]

