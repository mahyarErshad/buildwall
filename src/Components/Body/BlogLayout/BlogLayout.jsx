import React from "react";
import SectionTitle from "../../Utils/SectionTitle/SectionTitle";
import NonButtonCard from "../../Utils/NonButtonCard/NonButtonCard";
import listing from "../../../assets/images/card-images/listing.webp";
import grid from "../../../assets/images/card-images/grid.webp";
import masonry from "../../../assets/images/card-images/masonry.webp";
import postSingle from "../../../assets/images/card-images/postSingle.webp";

function BlogLayout() {
  const data = [
    {
      title: "فهرست",
      image: listing,
      href: "https://dana-team.com/products/buildwall/",
    },
    {
      title: "گرید",
      image: grid,
      href: "https://dana-team.com/products/buildwall/",
    },
    {
      title: "ماسونری",
      image: masonry,
      href: "https://dana-team.com/products/buildwall/",
    },
    {
      title: "پست تکی",
      image: postSingle,
      href: "https://dana-team.com/products/buildwall/",
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
