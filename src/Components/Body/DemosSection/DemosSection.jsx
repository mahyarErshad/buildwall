import React from "react";
import DemoSectionCard from "./DemosSectionCard";
import SectionTitle from "../../Utils/SectionTitle/SectionTitle";

function DemosSection() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <section id="demos" className="max-md:mt-40 max-lg:mt-52 lg:mt-[17rem] w-full flex-center flex-col">
      <SectionTitle number="32" title="دموی شگفت انگیز در انتظار شما هستند!" description="پوسته های منحصر به فرد را برای چندین موضوع ساخت و ساز در این یک موضوع پیدا کنید!" />
      <section className="w-full flex-center gap-6 flex-wrap">
        {data.map((item, index) => {
          return <DemoSectionCard key={index} title="ساخت و ساز" image="https://ld-wp73.template-help.com/buildwall/landing/images/skin-1.png" />;
        })}
      </section>
    </section>
  );
}

export default DemosSection;
