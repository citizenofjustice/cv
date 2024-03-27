import { ResumeData } from "@/types/ResumeData";
import { GitHubIcon, LinkedInIcon, TelegramIcon } from "@/components/icons";

export const RESUME_DATA: ResumeData = {
  name: "Krasnov Andrey",
  initials: "KA",
  location: "Cheboksary, Russia, MSK",
  locationLink: "https://www.google.com/maps/place/Cheboksary",
  about:
    "Full Stack Web Developer with a passion for user experience and interface design.",
  summary:
    "I am a Frontend Developer currently transitioning to a Full Stack. Have a 6‑year background in the IT industry. Proficient in English at the B2 level. I am particularly interested in remote work opportunities. My goal is to contribute to interesting projects where I can apply and enhance my skills.",
  avatarUrl: "https://avatars.githubusercontent.com/u/13840466?v=4",
  personalWebsiteUrl: "https://github.com/citizenofjustice",
  contact: {
    email: "a.krasnov.dev@gmail.com",
    tel: "+79373754170",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/citizenofjustice",
        icon: <GitHubIcon className="size-4" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adnrey-krasnov-5a1b68249/",
        icon: <LinkedInIcon className="size-4" />,
      },
      {
        name: "Telegram",
        url: "https://t.me/ThatCinemaAddict",
        icon: <TelegramIcon className="size-4" />,
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
        "Maintenance of internal software systems, interaction with software developers for fixing errors, technical support for users, software installation and configuration.",
    },
  ],
  skills: [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "Git",
    "React",
    "Redux/Redux-Toolkit/MobX",
    "React Router",
    "TanStack Query",
    "Tailwind",
    "VS Code",
    "ShadcnUI/MUI",
    "Node.js",
    "Express",
    "MySQL/MongoDB/Postgres",
    "Mongoose/Prisma",
    "Docker",
    "Nginx",
    "Firebase/Vercel",
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
};
