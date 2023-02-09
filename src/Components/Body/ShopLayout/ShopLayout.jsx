import React from "react";
import NonButtonCard from "../../Utils/NonButtonCard/NonButtonCard";

function ShopLayout() {
  const data = [1, 2];
  return (
    <section id="store-pages" className="w-full mt-20 flex-center flex-col">
      <h2 className="font-bold text-white text-3xl text-center mb-4">چیدمان شگفت انگیز فروشگاه روی میز!</h2>
      <p className="text-white text-center text-sm">فروش مقرون به صرفه و عاقلانه با گزینه های داخلی فروشگاه الکترونیکی!</p>
      <div className="max-w-[75rem] flex-center gap-6 flex-wrap mt-12">
        {data.map((item, index) => {
          return <NonButtonCard key={index} title="ساخت و ساز" image="https://ld-wp73.template-help.com/buildwall/landing/images/skin-1.png" />;
        })}
      </div>
    </section>
  );
}

export default ShopLayout;
