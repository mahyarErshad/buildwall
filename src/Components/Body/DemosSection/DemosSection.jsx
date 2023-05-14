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
      href: "https://dana-team.com/products/buildwall/",
    },
  ];
  return (
    <section id="demos" className="max-md:mt-40 max-lg:mt-52 lg:mt-[17rem] w-full flex-center flex-col">
      <SectionTitle title="این دموی شگفت انگیز در انتظار شماست!" description="تمام ویژگی هایی که برای یک قالب ساخت و ساز انتظار دارید" />
      <section className="w-full flex-center gap-6 flex-wrap">
        {data.map((item, index) => {
          return <DemoSectionCard key={index} title={item.title} image={item.image} href={item.href} />;
        })}
      </section>
    </section>
  );
}

export default DemosSection;
