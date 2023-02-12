import React from "react";
import SectionTitle from "../../Utils/SectionTitle/SectionTitle";
import NonButtonCard from "../../Utils/NonButtonCard/NonButtonCard";
import about1 from "../../../assets/images/card-images/about1.webp";
import about2 from "../../../assets/images/card-images/about2.webp";
import about3 from "../../../assets/images/card-images/about3.webp";

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
