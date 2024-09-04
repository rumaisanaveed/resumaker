import { Collapse } from "antd";
import CustomLink from "./components/buttons/CustomLink";
import { AccordionItems, GuideSteps } from "./constants";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import MainLayout from "./layouts/MainLayout";

export const metadata = {
  title: "Home - ResuMaker",
  description:
    "Create professional resumes effortlessly with our easy-to-use, single-template resume generator.",
};

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

const Hero = () => {
  return (
    <section
      style={{ height: "calc(100vh - 4.5rem)" }}
      className="w-full px-6 md:px-0 max-w-md md:max-w-7xl flex flex-col items-center justify-center mx-auto"
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="font-bold text-2xl md:text-5xl text-black max-w-md md:max-w-2xl mx-auto leading-snug">
          Create Your Perfect Resume
          <span className="text-custom-purple"> with ResuMaker</span>
        </h1>
        <h2 className="text-sm md:text-lg">
          Effortlessly build professional resumes that make an impact
        </h2>
        <div className="flex items-center gap-4 mt-3">
          <CustomLink
            href="/create-resume"
            className="bg-custom-purple hover:bg-white hover:text-custom-purple hover:border-custom-purple hover:border text-white font-light px-5 py-3"
          >
            Get started
          </CustomLink>
          <CustomLink className="border-black border px-5 py-3 hover:bg-black hover:text-white">
            Learn More
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

const Guide = () => {
  return (
    <section className="max-w-7xl mx-auto pt-0 py-12 md:py-12 mb-10 md:mb-0">
      <h1 className="text-black text-center max-w-md px-10 md:px-0 md:max-w-4xl mx-auto font-bold text-2xl md:text-5xl leading-snug">
        Create <span className="text-custom-purple">Stunning Resumes</span> in
        Just a Few Simple Steps
      </h1>
      <div className="md:mt-24 mt-12 grid grid-cols-1 md:grid-cols-3 place-items-center gap-8 px-6">
        {GuideSteps.map((step) => (
          <div
            className="flex flex-col items-center justify-center gap-4 text-center"
            key={step.id}
          >
            <div
              style={{
                fontSize: "40px",
              }}
              className="text-custom-purple"
            >
              {step.icon}
            </div>
            <h1 className="text-black font-semibold text-xl">{step.title}</h1>
            <p className="text-custom-gray font-light">{step.description}</p>
            <CustomLink
              className="flex items-center gap-2"
              href="/create-resume"
            >
              <p className="text-custom-purple font-medium text-xl">
                {step.callToActionText}
              </p>
              <MdOutlineKeyboardArrowRight
                style={{
                  fontSize: "30px",
                }}
                className="text-custom-purple"
              />
            </CustomLink>
          </div>
        ))}
      </div>
    </section>
  );
};

const Faqs = () => {
  return (
    <section className="max-w-5xl mx-auto text-center py-20">
      <h1 className="text-black text-5xl font-bold">FAQs</h1>
      <p className="text-custom-gray font-light pt-5 max-w-lg mx-auto px-4 md:px-0">
        Find answers to common questions about the app, including how it works
        and available themes.
      </p>
      <div className="mt-12 w-full px-12">
        <Collapse
          rootClassName="rm-faq-accordion"
          className="flex flex-col gap-5 font-poppins w-full"
          accordion
          defaultActiveKey={["1"]}
          ghost
          items={AccordionItems}
        ></Collapse>
      </div>
    </section>
  );
};
