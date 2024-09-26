import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CustomLink from "../buttons/CustomLink";
import { GuideSteps } from "@/app/constants";

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

export default Guide;
