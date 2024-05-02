import { GitHubIcon, LinkedInIcon, TelegramIcon } from "@/components/icons";
import { ResumeData } from "@/types/ResumeData";

export const RESUME_DATA: ResumeData = {
  name: "Краснов Андрей",
  initials: "КА",
  location: "Белград, Сербия, CEST",
  locationLink: "https://www.google.com/maps/place/Belgrade",
  about:
    "Full Stack веб разработчик с фокусом на дизайне интерфейсов и пользовтельском опыте.",
  summary:
    "Я Frontend разработчик, в процессе перехода на Full Stack. У меня 6-летний опыт работы в IT-индустрии. Владею английским языком на уровне B2. Меня особенно интересуют возможности удаленной работы. Моя цель - работать над интересными проектами в команде, где я могу применять и улучшать свои навыки разработчика.",
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
        url: "https://www.linkedin.com/in/andrey-krasnov-5a1b68249/",
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
      school: "Чувашский Государственный Университет",
      degree: "Бакалавр - Программная инженерия",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Фрилансер",
      link: "",
      badges: ["Удаленка"],
      title: "Fullstack разработчик",
      start: "2022",
      end: "2024",
      description:
        "Разрабатывал Full Stack приложения с jwt аутентификацией, адаптивной версткой, интеграцией сторонних API. Проектировал и реализовывал серверную логику используя Node.js, Express.js, SQL/NoSQL базы данных и другие инструменты. Настраивал Linux сервер на VPS для развертывания на нем приложения. Работал над улучшением показателей Core Web Vitals. Участвовал в переработке легаси кода для соответсвия новому дизайну веб-сайта.",
    },
    {
      company: "Ассоциация «СО «Строители Чувашии»",
      link: "https://npsch.ru",
      badges: ["Гибрид", "Неполный день"],
      title: "Системный администратор",
      start: "2023",
      end: "2024",
      description:
        "Обслуживание персональных компьютеров, поддержка пользователей, резервное копирование и восстановление, управление сетью, настройка оборудования, установка и настройка программного обеспечения, поддержка и доработка веб-сайта ассоциации, обслуживание печатного оборудования.",
    },
    {
      company: "Управление Федерального казначейства по ЧР",
      link: "https://chuvashia.roskazna.gov.ru",
      badges: ["Офис"],
      title: "Главный специалист-эксперт отдела информационных систем",
      start: "2018",
      end: "2022",
      description:
        "Сопровождение информационных систем, анализ ошибок и взаимодействие с разработчиками информационных систем для их устранения, техподдержка пользователей информационных систем, установка и настройка программных продуктов.",
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
        "Личный проект",
        "Javascript",
        "React",
        "Redux",
        "Material UI",
        "Node.js",
        "MongoDB",
        "Mongoose",
      ],
      description: "Социальная сеть для вас и ваших друзей",
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
      description: "Онлайн-магазин по продаже рыбной продукции",
      link: {
        label: "ocean-goods.ru",
        href: "https://ocean-goods.ru",
      },
    },
    {
      title: "РосАвтоПрокат",
      techStack: [
        "Yii2 Framework",
        "PHP",
        "MySQL",
        "JavaScript",
        "JQuery",
        "YandexMaps API",
      ],
      description: "Удобный сервис проката легковых автомобилей",
      link: {
        label: "rosautoprokat.ru",
        href: "https://rosautoprokat.ru",
      },
    },
    {
      title: "InternetLab лендинг",
      techStack: ["TypeScript", "React", "Sass"],
      description:
        "Лендинг созданный по макету в Figma (для тестового задания)",
      link: {
        label: "Internetlab лендинг",
        href: "https://citizenofjustice.github.io/internetlab-test/",
      },
    },
    {
      title: "PlaneTicketsApp",
      techStack: ["TypeScript", "React", "Tailwind", "Vite", "MobX"],
      description:
        "Билеты на самолет с калькулятором валют (для тестового задания)",
      link: {
        label: "IdeaPlatform landing",
        href: "https://citizenofjustice.github.io/idea-platform/",
      },
    },
  ],
};
