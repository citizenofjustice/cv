import { GitHubIcon, LinkedInIcon, TelegramIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Krasnov Andrey",
  initials: "KA",
  location: "Cheboksary, Russia, MSK",
  locationLink: "https://www.google.com/maps/place/Cheboksary",
  about:
    "Full Stack Developer capable of handling all aspects of development, from designing user interfaces to creating and managing databases.",
  summary:
    "I am a Frontend React Developer currently transitioning to a Full Stack. I have a 6-year background in the IT industry. During this time, I provided internal software support, worked as a system administrator, and gained some commercial freelance experience in web development. I spent the last two years closely working with React, honing my skills and deepening my understanding of the library. As a team player and a fast learner, I am always eager to collaborate and grow. I am committed to further developing my skills and collaborating on interesting projects. I have proficiency in English at the B2 level.",
  avatarUrl: "https://avatars.githubusercontent.com/u/13840466?v=4",
  personalWebsiteUrl: "https://github.com/citizenofjustice",
  contact: {
    email: "a.krasnov.dev@gmail.com",
    tel: "+79373754170",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/citizenofjustice",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adnrey-krasnov-5a1b68249/",
        icon: LinkedInIcon,
      },
      {
        name: "Telegram",
        url: "https://t.me/ThatCinemaAddict",
        icon: TelegramIcon,
      },
    ],
  },
  education: [
    {
      school: "Chuvash State University",
      degree: "Bachelor's Degree in Software Engineering",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Freelancer",
      link: "",
      badges: ["Remote"],
      title: "Fullstack developer",
      start: "2022",
      end: "2024",
      description:
        "Developed fullstack applications with jwt authentication, responsive layout, third-party APIs integrations. Designed and implemented server-side logic using Node.js, Express.js and other backend technologies. Managed data storage solutions with SQL or NoSQL databases like MySQL, MongoDB, Postgres. Configured and managed Linux-based server on VPS for application deployment. Worked on improving Core Web Vitals of web application. Worked on website with legacy code rewriting some of its old logic.",
    },
    {
      company: "Association of Builders of Chuvashia",
      link: "https://npsch.ru",
      badges: ["Hybrid", "Part time"],
      title: "System administrator",
      start: "2023",
      end: "2024",
      description:
        "System maintenance, user support, backup and recovery, network management, hardware setup, software installation and configuration, maintenance and development on association website, printing equipment maintenance.",
    },
    {
      company: "Federal Treasury Administration of Chuvash Republic",
      link: "https://chuvashia.roskazna.gov.ru",
      badges: ["Office"],
      title: "IT specialist in Department of Information Systems",
      start: "2018",
      end: "2022",
      description:
        "Maintenance of internal software systems, interaction with software developers for fixing errors, technical support for users",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux/Redux-Toolkit/MobX",
    "React Router",
    "Tailwind",
    "Git",
    "Node.js",
    "Express",
    "Mongoose/Prisma",
    "MySQL/MongoDB/Postgres",
    "Firebase/Vercel",
    "Nginx",
  ],
  projects: [
    {
      title: "StayInTouch",
      techStack: [
        "Side Project",
        "Javascript",
        "React",
        "Redux",
        "Material UI",
        "Node.js",
        "MongoDB",
        "Mongoose",
      ],
      description: "Social network for you and your friends",
      link: {
        label: "StayInTouch",
        href: "https://social-network-frontend.vercel.app",
      },
    },
    {
      title: "OceanGoods",
      techStack: [
        "TypeScript",
        "React",
        "Zod",
        "MobX",
        "Shadcn UI",
        "Tailwind",
        "Node.js",
        "Postgres",
        "Prisma",
        "Telegraf",
      ],
      description: "Online store selling fish products",
      link: {
        label: "ocean-goods.ru",
        href: "https://ocean-goods.ru",
      },
    },
    {
      title: "RosAutoProkat",
      techStack: [
        "Yii2 Framework",
        "PHP",
        "MySQL",
        "JavaScript",
        "JQuery",
        "YandexMaps API",
      ],
      description: "Convenient car rental service",
      link: {
        label: "rosautoprokat.ru",
        href: "https://rosautoprokat.ru",
      },
    },
  ],
} as const;
