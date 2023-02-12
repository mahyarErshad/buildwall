import React from "react";
import SectionTitle from "../../Utils/SectionTitle/SectionTitle";
import NonButtonCard from "../../Utils/NonButtonCard/NonButtonCard";
import listing from "../../../assets/images/card-images/listing.webp";
import grid from "../../../assets/images/card-images/grid.webp";

function BlogLayout() {
  const data = [
    {
      title: "فهرست کردن",
      image: listing,
      href: "https://ld-wp73.template-help.com/buildwall/landing/",
    },
    {
      title: "گرید",
      image: grid,
      href: "https://ld-wp73.template-help.com/buildwall/landing/",
    },
  ];
  return (
    <section id="blog-pages" className="w-full mt-20 flex-center flex-col">
      <SectionTitle number={4} title="طرح بندی زیبای وبلاگ!" description="اخبار و پست های وبلاگ خود را به روش های مختلف نشان دهید!" />
      <section className="max-w-[75rem] flex-center gap-6 flex-wrap">
        {data.map((item, index) => {
          return <NonButtonCard key={index} title={item.title} image={item.image} href={item.href} />;
        })}
      </section>
    </section>
  );
}

export default BlogLayout;
