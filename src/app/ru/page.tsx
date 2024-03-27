import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data-rus";
import { CVPage } from "@/components/cv-page";
import { HeadersCV } from "@/types/HeadersCV";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

const headersRu: HeadersCV = {
  about: "Обо мне",
  work: "Опыт работы",
  education: "Образование",
  skills: "Навыки",
  projects: "Проекты",
};

export default function PageRuCV() {
  return <CVPage data={RESUME_DATA} headers={headersRu} lang="ru" />;
}
