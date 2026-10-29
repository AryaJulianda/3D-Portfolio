import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  next,
  php,
  laravel,
  codeigniter,
  postgre,
  bbn,
  pijarcamp,
  recipe,
  ankasa,
  peworld,
  threejs,
  discord,
} from "../assets";

// ==========================================
// ABOUT ME
// ==========================================

export const about =
  "I'm a Mid-Level Fullstack Developer experienced in building web applications, backend services, and enterprise systems across banking, loyalty, and business operations. I translate business requirements into technical solutions, design application workflows and API integrations, and collaborate with cross-functional teams. Currently serving as Technical Lead for the Maybank Promo & Referral Code project, I coordinate development tasks while contributing hands-on to Rust backend development. Proficient in PHP (Symfony, Laravel), Rust, Go, JavaScript, React, and relational databases, with a focus on maintainable, reliable, and business-aligned solutions.";

// ==========================================
// NAVIGATION
// ==========================================

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// ==========================================
// SERVICES
// ==========================================

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Fullstack Developer",
    icon: creator,
  },
];

// ==========================================
// TECHNOLOGIES
// ==========================================

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "CodeIgniter",
    icon: codeigniter,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
];

// ==========================================
// PROFESSIONAL EXPERIENCE
// ==========================================

const experiences = [
  {
    title: "Mid-Level Fullstack Developer",
    company_name: "PT Alpabit Digital Inovasi",
    icon: bbn,
    iconBg: "#fff",
    date: "Oct 2025 - Present",
    points: [
      "Project: Maybank Promo & Referral Code | Technical Lead (Project Role)",
      "Lead technical design, translate business requirements into system solutions, coordinate development tasks, and contribute hands-on to Rust backend development.",
      "Developed a Sales Management Platform using Laravel for the backend and React.js for the frontend.",
    ],
  },
  {
    title: "Junior Backend Developer",
    company_name: "PT Alpabit Digital Inovasi",
    icon: bbn,
    iconBg: "#fff",
    date: "Dec 2024 - Oct 2025",
    points: [
      "Developed and maintained backend services for the OCBC loyalty platform using Symfony PHP and related technologies.",
      "Developed backend microservices for a POS system using Golang.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "PT Bukit Baja Nusantara",
    icon: bbn,
    iconBg: "#fff",
    date: "Nov 2023 - Nov 2024",
    points: [
      "Developed and maintained a company profile website and customer portal using CodeIgniter.",
      "Built a Computerized Maintenance Management System (CMMS) using Laravel.",
      "Developed ERP system modules using CodeIgniter and related technologies.",
    ],
  },
  {
    title: "Fullstack Web & Mobile Developer Bootcamp",
    company_name: "Pijar Camp",
    icon: pijarcamp,
    iconBg: "#fff",
    date: "Jul 2023 - Oct 2023",
    points: [
      "Built four web projects in three months using JavaScript, Node.js, Express.js, and React.js.",
      "Developed mobile applications using React Native.",
      "Designed and worked with PostgreSQL databases.",
      "Practiced teamwork, communication, and problem-solving in a collaborative environment.",
    ],
  },
];

// ==========================================
// TESTIMONIALS
// ==========================================

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// ==========================================
// PROJECTS
// ==========================================

const projects = [
  {
    name: "Maybank Promo & Referral Code",
    description:
      "Serve as Technical Lead (project role), translating banking campaign requirements into technical designs, application workflows, and API solutions. Coordinate development tasks while contributing hands-on to backend implementation using Rust.",
    tags: [
      {
        name: "rust",
        color: "blue-text-gradient",
      },
      {
        name: "backend",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "technical-leadership",
        color: "orange-text-gradient",
      },
    ],
  },
  {
    name: "Sales Management Platform",
    description:
      "Developed a fullstack sales management platform using Laravel for backend functionality and React.js for the frontend.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Banking Loyalty Platform",
    description:
      "Developed and maintained backend services for a banking loyalty system, focusing on system reliability, API integration, and third-party service connectivity using Symfony, PHP, PostgreSQL, Magento, and Docker.",
    tags: [
      {
        name: "symfony",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
      {
        name: "magento",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "orange-text-gradient",
      },
    ],
  },
  {
    name: "POS Backend Service",
    description:
      "Developed backend microservices for a Point of Sales (POS) system using Golang, supporting business operations through API-based services and database integrations.",
    tags: [
      {
        name: "golang",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "orange-text-gradient",
      },
    ],
  },
  {
    name: "CMMS (Computerized Maintenance Management System)",
    description:
      "Developed a Computerized Maintenance Management System (CMMS) for industrial operations to track equipment maintenance, scheduling, and operational data using Laravel, PHP, and MySQL.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
  },
  {
    name: "ERP System",
    description:
      "Developed an Enterprise Resource Planning (ERP) system to manage core business processes such as inventory, procurement, and human resources. Built using CodeIgniter with modular architecture and MySQL database integration.",
    tags: [
      {
        name: "codeigniter",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
  },
  {
    name: "Company Profile & Customer Portal",
    description:
      "Developed a company profile and customer portal web application to improve client accessibility and streamline internal communication using CodeIgniter and responsive UI design.",
    tags: [
      {
        name: "codeigniter",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
  },
  {
    name: "Bootcamp Projects",
    description:
      "Built multiple fullstack web and mobile applications during bootcamp training using React.js, Next.js, Node.js, Express.js, and React Native. Focused on teamwork, database integration, and RESTful API development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
    ],
  },
];

// ==========================================
// EXPORTS
// ==========================================

export { services, technologies, experiences, testimonials, projects };
