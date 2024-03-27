export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: Social[];
  };
  education: Education[];
  work: Work[];
  skills: string[];
  projects: Project[];
}

interface Social {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
}

interface Work {
  company: string;
  link: string;
  badges: string[];
  title: string;
  start: string;
  end: string;
  description: string;
}

interface Project {
  title: string;
  techStack: string[];
  description: string;
  link: {
    label: string;
    href: string;
  };
}
