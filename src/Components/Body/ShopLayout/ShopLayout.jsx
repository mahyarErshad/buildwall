import React from "react";
import NonButtonCard from "../../Utils/NonButtonCard/NonButtonCard";
import listingShop from "../../../assets/images/card-images/listingShop.webp";
import productSingle from "../../../assets/images/card-images/productSingle.webp";

function ShopLayout() {
  const data = [
    {
      title: "کلکسیون",
      image: listingShop,
      href: "https://dana-team.com/products/buildwall/",
    },
    {
      title: "محصول تکی",
      image: productSingle,
      href: "https://dana-team.com/products/buildwall/",
    },
  ];
  return (
    <section id="store-pages" className="w-full mt-20 flex-center flex-col">
      <h2 className="font-bold text-white text-3xl text-center mb-4">چیدمان فروشگاهی هیجان انگیز!</h2>
      <p className="text-white text-center text-sm">فروش مقرون به صرفه و عاقلانه با گزینه های داخلی فروشگاه الکترونیکی!</p>
      <div className="max-w-[75rem] flex-center gap-6 flex-wrap mt-12">
        {data.map((item, index) => {
          return <NonButtonCard key={index} title={item.title} image={item.image} href={item.href} />;
        })}
      </div>
    </section>
  );
}

export default ShopLayout;
