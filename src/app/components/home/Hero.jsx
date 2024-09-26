import CustomLink from "../buttons/CustomLink";

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

export default Hero;
