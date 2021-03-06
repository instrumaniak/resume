export const headerData = {
  name: 'Raziur Rahman',
  tagLine: 'React / JavaScript developer',
  links: [
    '+880 167 226 3414',
    'raziur.eee@gmail.com',
    'Dhaka, Bangladesh',
    ' ',
    'https://instrumaniak.github.io',
    'https://github.com/instrumaniak',
  ],
}

export const techSkillsData = [
  {
    category: 'Frontend',
    skills: [
      'HTML5/CSS3',
      'Modern JS/ES6+',
      'TypeScript',
      'React/React Router/Redux',
      'GraphQL',
    ],
  },
  {
    category: 'Backend',
    skills: ['Node.js/Express/NestJS', 'MongoDB/PostgreSQL'],
  },
  {
    category: 'Mobile',
    skills: ['React Native'],
  },
  {
    category: 'Others',
    skills: ['Git', 'Linux/Ubuntu', 'AWS(EC2/S3)/Heroku'],
  },
]

export const educationData = [
  {
    degree: `Electrical and Electronic Engineering`,
    school: `Ahsanullah University of Science and Technology, Dhaka, Bangladesh`,
    duration: `BSc | 2009`,
  },
]

export const experienceData = [
  {
    company: 'Nascenia Ltd.',
    location: 'Dhaka, Bangladesh',

    positions: [
      {
        title: 'Software Engineer',
        date: 'August, 2019 - Present',
        details: [
          `Working on an E-Commerce project frontend based on Saleor (TypeScript/React/GraphQL/Django/Keycloak)`,
          `Built complex single page web application frontend (fuel tax calculations, reports, data visualization & others). Overall Tech stack: TypeScript, React with hooks, Redux, React Router, Material UI, React Final Form, React-PDF, React-Intl.`,
        ],
      },
    ],
  },
  {
    company: 'HiFi Digital Ltd.',
    location: 'Dhaka, Bangladesh',

    positions: [
      {
        title: 'Software Engineer',
        date: 'Jully, 2018 - Jully, 2019',
        details: [
          `Ported the React/Redux frontend of their blog site to NextJS/React for full server side rendering with caching support in the Express/Node.js & improved SEO. Deployed it to AWS EC2.`,
          `Worked on some of their client's projects using these tech: React, Redux, React Native, Express, Node.js`,
        ],
      },
      {
        title: 'Apprentice Software Engineer',
        date: 'April - June, 2018',
        details: [
          `Ported their blog site (https://hifipublic.com) front end which was in Angular to React/Redux. Implemented dynamic meta data rendering from server side using Express/Node.js which was required for social media sharing.`,
        ],
      },
    ],
  },
]

export const projectsData = [
  {
    title: 'Personal website/Blog',
    url: 'https://github.com/instrumaniak/instrumaniak.github.io',
    tech: 'Gatsby.js, Node.js, React, GraphQL',
    details: [
      'A static blog site that uses markdown files for posts & hosted on github pages.',
    ],
  },
  {
    title: 'Local Library',
    url: 'https://github.com/instrumaniak/local-library',
    tech: 'React, Express, Mongoose, MongoDB',
    details: ['A book management web app.'],
  },
  {
    title: 'Calendar',
    url: 'https://github.com/instrumaniak/calendar',
    tech: 'TypeScript, React, Redux, NestJS, TypeORM & PostgreSQL',
    details: ['A calendar web app for managing events.'],
  },
  {
    title: 'WikiSearch',
    url: 'https://github.com/instrumaniak/wikiSearch',
    tech: 'React Native, React Navigation.',
    details: [`A mobile app to search Wikipedia using it's public search API.`],
  },
]
