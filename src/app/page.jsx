import MainLayout from "./layouts/MainLayout";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Home - ResuMaker",
  description:
    "Create professional resumes effortlessly with our easy-to-use, single-template resume generator.",
};

const Hero = dynamic(() => import("./components/home/Hero"), { ssr: false });
const Guide = dynamic(() => import("./components/home/Guide"), { ssr: false });
const Faqs = dynamic(() => import("./components/home/Faqs"), { ssr: false });

export default function Home() {
  return (
    <MainLayout>
      <main className="bg-white w-full">
        <Hero />
        <Guide />
        <Faqs />
      </main>
    </MainLayout>
  );
}
