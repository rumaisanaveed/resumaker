import Faqs from "./components/home/Faqs";
import Guide from "./components/home/Guide";
import Hero from "./components/home/Hero";
import MainLayout from "./layouts/MainLayout";

export const metadata = {
  title: "Home - ResuMaker",
  description:
    "Create professional resumes effortlessly with our easy-to-use, single-template resume generator.",
};

// live preview of the info
// edit and delete

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
