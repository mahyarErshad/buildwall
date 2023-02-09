import React from "react";
import SectionTitle from "../../Utils/SectionTitle/SectionTitle";
import NonButtonCard from "../../Utils/NonButtonCard/NonButtonCard";

function BlogLayout() {
  const data = [1, 2, 3, 4];
  return (
    <section id="blog-pages" className="w-full mt-20 flex-center flex-col">
      <SectionTitle number={4} title="طرح بندی زیبای وبلاگ!" description="اخبار و پست های وبلاگ خود را به روش های مختلف نشان دهید!" />
      <section className="max-w-[75rem] flex-center gap-6 flex-wrap">
        {data.map((item, index) => {
          return <NonButtonCard key={index} title="ساخت و ساز" image="https://ld-wp73.template-help.com/buildwall/landing/images/skin-1.png" />;
        })}
      </section>
    </section>
  );
}

export default BlogLayout;
