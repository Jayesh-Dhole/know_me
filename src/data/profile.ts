// All site content lives here. Edit this file to update the portfolio.

// Site base path (e.g. "/Portfolio/") so file links work on GitHub Pages.
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export const profile = {
  name: 'Jayesh Dhole',
  role: 'Programmer Analyst',
  company: 'Cognizant',
  title: 'Full-stack Java developer',
  // Hero one-liner. Words wrapped in *asterisks* are highlighted.
  headline: 'Turning coffee into *clean Java* and ideas into *real products*.',
  stack: ['Java', 'Spring Boot', 'Angular'],
  location: 'Pune, India',
  lead: 'I build scalable, secure full-stack applications, from Spring Boot microservices and REST APIs to clean, responsive Angular and React interfaces.',
  photo: `${base}images/profile.png`,
  resume: `${base}Jayesh_Dhole_Resume.pdf`,
  email: 'jayeshdhole95@gmail.com',
  socials: {
    github: 'https://github.com/Jayesh-Dhole',
    linkedin: 'https://www.linkedin.com/in/jayeshdhole',
    credly: 'https://www.credly.com/users/jayesh-prashant-dhole',
  },
};

export const about = {
  paragraphs: [
    "I'm a full-stack Java software engineer at Cognizant, working on enterprise applications for clients in insurance and banking. I own features end to end: designing RESTful APIs and microservices in Spring Boot, building responsive front ends in Angular and React, and taking them through integration, code review, and release.",
    'I care about object-oriented design, clean and maintainable code, and reliable CI/CD delivery. I hold AWS and Anthropic Claude certifications, and I enjoy exploring how cloud and AI can make everyday software smarter.',
  ],
  facts: [
    { label: 'currently', value: 'Programmer Analyst, Cognizant' },
    { label: 'based in', value: 'Pune, India' },
    { label: 'experience', value: '2+ years, since July 2024' },
    { label: 'domains', value: 'Insurance · Banking · E-commerce' },
  ],
};

export const skills = [
  {
    group: 'BACKEND',
    items: ['Java (Core & Advanced)', 'Spring Boot', 'Spring & Hibernate', 'RESTful APIs', 'Microservices', 'JDBC · ESQL', 'Multithreading', 'Design patterns'],
  },
  {
    group: 'FRONTEND',
    items: ['Angular', 'React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 · CSS3', 'Responsive design'],
  },
  {
    group: 'DATA & TESTING',
    items: ['MySQL', 'PostgreSQL', 'SQL', 'JUnit', 'Test-driven development', 'Postman'],
  },
  {
    group: 'CLOUD & DEVOPS',
    items: ['AWS', 'Azure AI', 'Git · GitHub', 'Maven', 'CI/CD pipelines', 'Agile / Scrum · JIRA'],
  },
];

export const experience = [
  {
    role: 'Programmer Analyst',
    company: 'Cognizant Technology Solutions',
    period: 'Jul 2025 — Present',
    location: 'Pune, India',
    points: [
      'Build and maintain scalable full-stack applications with Java, Spring Boot, and Angular, including RESTful APIs and Maven builds for enterprise clients.',
      'Own features end to end, turning requirements into secure, maintainable code through development, integration, and code review.',
      'Integrate front end and back end with JSON data exchange and SQL database operations across the SDLC.',
      'Contribute to CI/CD-driven delivery with Git, upholding code quality and release readiness.',
    ],
  },
  {
    role: 'Trainee Software Engineer',
    company: 'Eidiko Systems Integrators Pvt. Ltd.',
    period: 'Jul 2024 — Jul 2025',
    location: 'Hyderabad, India',
    points: [
      'Designed and developed enterprise backend services with Core Java, Spring Boot, REST, and JDBC, tuning performance with multithreading and design patterns.',
      'Integrated applications with databases, third-party APIs, and external services for secure, reliable data flow.',
      'Investigated and resolved defects with the engineering team, validating fixes before production deployment.',
    ],
  },
];

export const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    school: 'Sipna College of Engineering and Technology, Amravati',
    period: '2021 — 2024',
    score: 'CGPA 8.5 / 10',
  },
  {
    degree: 'Diploma in Computer Engineering',
    school: 'Dr. Panjabrao Deshmukh Polytechnic College, Amravati',
    period: '2018 — 2021',
    score: '92%',
  },
];

export const projects = [
  {
    name: 'AIG insurance platform',
    context: 'Client project · Cognizant',
    description: 'Responsive, customer-facing interfaces in React and TypeScript, integrated with Spring Boot services for secure data flow and a scalable, maintainable architecture.',
    tags: ['react', 'typescript', 'java', 'spring boot', 'rest'],
  },
  {
    name: 'Full-stack e-commerce application',
    context: 'Angular + Java',
    description: 'An end-to-end store with an Angular front end, Spring Boot back end, MySQL persistence, layered architecture, CORS support, and JUnit tests.',
    tags: ['angular', 'spring boot', 'hibernate', 'mysql', 'junit'],
    link: 'https://github.com/Jayesh-Dhole/Fullstack_E_Comm_Project',
  },
  {
    name: 'Karnataka Bank Ltd.',
    context: 'UAT and production support · Eidiko',
    description: 'REST APIs in Java and Spring Boot for a live banking platform, with SSL configuration, API access management, eKYC integration, and production troubleshooting.',
    tags: ['java', 'spring boot', 'rest', 'ssl', 'ekyc'],
  },
  {
    name: 'Amazon clone',
    context: 'Front-end project',
    description: 'A responsive e-commerce clone built with JavaScript, HTML5, CSS3, and Tailwind CSS.',
    tags: ['javascript', 'html5', 'css3', 'tailwind'],
    link: 'https://github.com/Jayesh-Dhole/Html_Css_Js_Project',
  },
];

// Certifications that aren't on Credly (Credly badges are fetched automatically).
export const otherCertifications = [
  {
    name: 'Microsoft Certified: Azure AI Cloud Developer Associate',
    issuer: 'Microsoft',
    link: 'https://learn.microsoft.com/en-us/users/jayeshdhole-9308/credentials/3e3eebcfc8190adf',
  },
  {
    name: 'Java Concepts',
    issuer: 'Infosys Springboard',
    link: 'https://drive.google.com/file/d/1vehCV8o86XGUEbMVFMMGnGlWqP-VR-5d/view?usp=sharing',
  },
];
