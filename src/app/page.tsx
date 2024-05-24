import AppTypography from "@styles/components/appTypography";
import { Metadata } from "next";
import Hero from "./home components/hero/hero";
import Topics from "./home components/topics";
import Personalize from "./home components/personalize/personalize";
import Study from "./home components/study/study";
import Experience from "./home components/experience/expeience";

export const metadata: Metadata = {
  title: "PrepRoom",
  description: "The go-to app for students seeking to ace their exams and excel in their studies! Whether you’re preparing for a test, quiz or a crucial exam",
};

export default function Home() {
  return (
    <div className="flex flex-col w-fit gap-[70px] items-center">
      <Hero />
      <Topics />
      <Personalize />
      <Study />
      <Experience />
    </div>
  );
}
