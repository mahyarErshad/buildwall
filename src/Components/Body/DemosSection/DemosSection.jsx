import React from "react";
import DemoSectionCard from "./DemosSectionCard";

function DemosSection() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <section id="demos" className="max-md:mt-40 max-lg:mt-52 lg:mt-[17rem] w-full flex-center flex-col">
      <div className="flex-center max-md:flex-col gap-4 px-4 mb-12">
        <h3 className="flex-center text-primary text-[5rem]">32</h3>
        <div className="flex max-md:items-center md:items-start justify-center flex-col gap-4">
          <h2 className="font-bold text-white text-3xl">دموی شگفت انگیز در انتظار شما هستند!</h2>
          <h3 className="text-white text-sm">پوسته های منحصر به فرد را برای چندین موضوع ساخت و ساز در این یک موضوع پیدا کنید!</h3>
        </div>
      </div>
      <section className="w-full flex-center gap-6 flex-wrap">
        {data.map((item, index) => {
          return <DemoSectionCard key={index} title="ساخت و ساز" image="https://ld-wp73.template-help.com/buildwall/landing/images/skin-1.png" />;
        })}
      </section>
    </section>
  );
}

export default DemosSection;
