import AppTypography from "@styles/components/appTypography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PrepRoom",
  description: "The go-to app for students seeking to ace their exams and excel in their studies! Whether you’re preparing for a test, quiz or a crucial exam",
};

export default function Home() {
  return (
    <div>
      <AppTypography>
        Home
      </AppTypography>
    </div>
  );
}
