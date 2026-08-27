import type {
  HeaderData,
  TechSkillCategory,
  EducationItem,
  ExperienceItem,
  ProjectItem,
} from './types'

export const headerData: HeaderData = {
  name: 'Raziur Rahman',
  tagLine: 'Sr. Software Engineer',
  links: ['+880 167 226 3414', 'contact@raziur.com', 'Dhaka, Bangladesh'],
  socialLinks: [
    'https://raziur.com',
    'https://www.linkedin.com/in/raziur',
    'https://github.com/instrumaniak',
  ],
}

export const summaryText: string = `Senior Software Engineer with _8+ years_ building *production systems* in *Node.js, TypeScript & React*. Specialized in microservice architecture, event-driven systems and real-time applications across e-commerce, food delivery and other domains. Experienced with full-stack development, automated testing and cloud deployment with a strong **backend** focus.`

export const techSkillsData: TechSkillCategory[] = [
  {
    category: '',
    skills: [
      'Node.js',
      'JavaScript/TypeScript',
      'Express/NestJS',
      'React/React Native',
      'Jest/Supertest',
      'PostgreSQL/MySQL',
      'Redis/MongoDB',
      'Kafka/gRPC',
      'AWS(EC2, S3)',
      'Docker',
      'Git',
      'Linux/Ubuntu',
      'C/C++',
    ],
  },
]

export const educationData: EducationItem[] = [
  {
    degree: `BSc | EEE`,
    school: `Ahsanullah University of Science and Technology, Dhaka, Bangladesh`,
    duration: `2009`,
  },
  {
    degree: `HSC | Science`,
    school: `St. Joseph College, Dhaka, Bangladesh`,
    duration: `2004`,
  },
  {
    degree: `SSC | Science`,
    school: `Rifles Public School, Dhaka, Bangladesh`,
    duration: `2002`,
  },
]

export const experienceTitle: string = 'Work Experience (8 Years+)'

export const experienceData: ExperienceItem[] = [
  {
    company: 'TechnoNext Ltd.',
    location: 'Dhaka, Bangladesh',
    totalDuration: '3 years, 1 month',
    positions: [
      {
        title: 'Sr. Software Engineer',
        date: 'April, 2023 - April, 2026',
        details: [
          `Projects of *US-Bangla Group*: Multi-vendor e-commerce (_Cartup_), food delivery (_Foodi_). Using micro-service architecture, developed Rest APIs, integrated 3rd party payment service APIs, real-time chat & notification system.`,
          `Tech: Node.js, JavaScript/Typescript, Express, socket.io, React Native, Kafka, gRPC, Redis, Mongodb, PostgreSQL, Elastic Stack`,
        ],
      },
    ],
  },
  {
    company: 'Silicon Orchard Ltd.',
    location: 'Dhaka, Bangladesh',
    totalDuration: '1 year, 8 months',
    positions: [
      {
        title: 'Software Engineer',
        date: 'September, 2021 - April, 2023',
        details: [
          `Projects: crypto lottery, product catalog CMS, crypto wallet app`,
          `Tech: Node.js, Express, Sequelize, MySQL, React, React Native(Expo)`,
        ],
      },
    ],
  },
  {
    company: 'Nascenia Ltd.',
    location: 'Dhaka, Bangladesh',
    totalDuration: '1 year, 11 months',
    positions: [
      {
        title: 'Software Engineer',
        date: 'August, 2019 - June, 2021',
        details: [
          `Worked on an E-Commerce project based on Saleor (TypeScript/React/GraphQL/Python/Django/Keycloak/PostgreSQL)`,
          `Built complex single page web application frontend (fuel tax calculations, reports, data visualization & others). Overall Tech stack: TypeScript, React, Redux, React Router, Material UI, React Final Form, React-PDF, React-Intl, Docker, Rails`,
          `Mentored junior engineers and interns.`,
        ],
      },
    ],
  },
  {
    company: 'HiFi Digital Ltd.',
    location: 'Dhaka, Bangladesh',
    totalDuration: '1 year, 4 months',
    positions: [
      {
        title: 'Software Engineer',
        date: 'July, 2018 - July, 2019',
        details: [
          `Migrated _HiFi Public_ website frontend from React/Redux to Next.js, adding SSR and caching via Express/Node.js, improving SEO. Deployed to AWS EC2.`,
          `Delivered client projects using React, Redux, React Native, Express and Node.js.`,
        ],
      },
      {
        title: 'Apprentice Software Engineer',
        date: 'April - June, 2018',
        details: [
          `Ported _HiFi Public_ website frontend from Angular to React/Redux.`,
        ],
      },
    ],
  },
]

export const projectsData: ProjectItem[] = [
  {
    title: 'Local Library',
    url: 'https://github.com/instrumaniak/local-library',
    tech: 'React, Express, Mongoose, MongoDB',
    details: ['A book management web app.'],
  },
]
