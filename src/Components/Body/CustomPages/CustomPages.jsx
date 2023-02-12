import React from "react";
import SectionTitle from "../../Utils/SectionTitle/SectionTitle";
import NonButtonCard from "../../Utils/NonButtonCard/NonButtonCard";
import about1 from "../../../assets/images/card-images/about1.webp";
import about2 from "../../../assets/images/card-images/about2.webp";
import about3 from "../../../assets/images/card-images/about3.webp";
import service1 from "../../../assets/images/card-images/service1.webp";
import service2 from "../../../assets/images/card-images/service2.webp";
import service3 from "../../../assets/images/card-images/service3.webp";
import serviceSingle1 from "../../../assets/images/card-images/serviceSingle1.webp";
import serviceSingle2 from "../../../assets/images/card-images/serviceSingle2.webp";
import serviceSingle3 from "../../../assets/images/card-images/serviceSingle3.webp";
import projects1 from "../../../assets/images/card-images/projects1.webp";
import projects2 from "../../../assets/images/card-images/projects2.webp";
import projects3 from "../../../assets/images/card-images/projects3.webp";
import projectSingle1 from "../../../assets/images/card-images/projectSingle1.webp";

function CustomPages() {
  const data = [
    {
      title: "معرفی 1",
      image: about1,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/about/",
    },
    {
      title: "معرفی 2",
      image: about2,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/about-v2/",
    },
    {
      title: "معرفی 3",
      image: about3,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/about-us-v3/",
    },
    {
      title: "خدمات 1",
      image: service1,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/services/",
    },
    {
      title: "خدمات 2",
      image: service2,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/services-v2/",
    },
    {
      title: "خدمات 3",
      image: service3,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/services-v3/",
    },
    {
      title: "خدمات تکی 1",
      image: serviceSingle1,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/services/construction-consultation/",
    },
    {
      title: "خدمات تکی 2",
      image: serviceSingle2,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/services/house-renovation/",
    },
    {
      title: "خدمات تکی 3",
      image: serviceSingle3,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/services/architecture-building/",
    },
    {
      title: "پروژه 1",
      image: projects1,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/projects-v1/",
    },
    {
      title: "پروژه 2",
      image: projects2,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/projects-v2/",
    },
    {
      title: "پروژه 3",
      image: projects3,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/projects-v3/",
    },
    {
      title: "پروژه تکی 1",
      image: projectSingle1,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/projects-v1/single-project-v1/",
    },
  ];
  return (
    <section id="custom-pages" className="w-full mt-20 flex-center flex-col">
      <SectionTitle number={30} title="صفحه سفارشی" description="عملکرد و تنوع غنی بیلدوال را کاوش کنید" />
      <section className="max-w-[75rem] flex-center gap-6 flex-wrap">
        {data.map((item, index) => {
          return <NonButtonCard key={index} title={item.title} image={item.image} href={item.href} />;
        })}
      </section>
    </section>
  );
}

export default CustomPages;
