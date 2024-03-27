import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data-eng";
import { CVPage } from "@/components/cv-page";
import { HeadersCV } from "@/types/HeadersCV";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

const headers: HeadersCV = {
  about: "About",
  work: "Work Experience",
  education: "Education",
  skills: "Skills",
  projects: "Projects",
};

export default function PageEnCV() {
  return <CVPage data={RESUME_DATA} headers={headers} lang="en" />;
}
