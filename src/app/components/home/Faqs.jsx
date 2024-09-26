import { AccordionItems } from "@/app/constants";
import { Collapse } from "antd";

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

export default Faqs;
