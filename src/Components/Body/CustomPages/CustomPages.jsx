import React from "react";
import SectionTitle from "../../Utils/SectionTitle/SectionTitle";
import NonButtonCard from "../../Utils/NonButtonCard/NonButtonCard";

function CustomPages() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <section className="w-full mt-20 flex-center flex-col">
      <SectionTitle number={30} title="صفحه سفارشی" description="عملکرد و تنوع غنی بیلدوال را کاوش کنید" />
      <section className="max-w-[75rem] flex-center gap-6 flex-wrap">
        {data.map((item, index) => {
          return <NonButtonCard key={index} title="ساخت و ساز" image="https://ld-wp73.template-help.com/buildwall/landing/images/skin-1.png" />;
        })}
      </section>
    </section>
  );
}

export default CustomPages;
