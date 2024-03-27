import { Card } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import { RESUME_DATA } from "@/data/resume-data-eng";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | Full Stack Developer`,
  description: "Choose the CV language",
};

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-lg">Choose the CV language</h1>
      <div className="flex gap-10">
        <Card className="border py-4">
          <Link className="w-full p-4" href="en">
            English
          </Link>
        </Card>
        <Card className="border py-4">
          <Link className="p-4" href="ru">
            Русский
          </Link>
        </Card>
      </div>
    </div>
  );
}
