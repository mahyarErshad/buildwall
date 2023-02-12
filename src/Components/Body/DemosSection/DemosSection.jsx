import React from "react";
import DemoSectionCard from "./DemosSectionCard";
import SectionTitle from "../../Utils/SectionTitle/SectionTitle";
import image1 from "../../../assets/images/card-images/skin1.webp";
import image2 from "../../../assets/images/card-images/skin2.webp";
import image3 from "../../../assets/images/card-images/skin3.webp";

function DemosSection() {
  const data = [
    {
      title: "ساخت و ساز",
      image: image1,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/",
    },
    {
      title: "باغبانی و منظره",
      image: image2,
      href: "https://ld-wp73.template-help.com/buildwall/v2/gardening/",
    },
    {
      title: "استودیو معماری و طراحی داخلی مدرن",
      image: image3,
      href: "https://ld-wp73.template-help.com/buildwall/v2/architecture-2/",
    },
  ];
  return (
    <section id="demos" className="max-md:mt-40 max-lg:mt-52 lg:mt-[17rem] w-full flex-center flex-col">
      <SectionTitle number="3" title="دموی شگفت انگیز در انتظار شماست!" description="پوسته های منحصر به فرد را برای چندین موضوع ساخت و ساز در این یک موضوع پیدا کنید!" />
      <section className="w-full flex-center gap-6 flex-wrap">
        {data.map((item, index) => {
          return <DemoSectionCard key={index} title={item.title} image={item.image} href={item.href} />;
        })}
      </section>
    </section>
  );
}

export default DemosSection;
