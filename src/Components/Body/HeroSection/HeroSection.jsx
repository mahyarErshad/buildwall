import React from "react";
import styles from "./styles.module.css";
import headerImage from "../../../assets/images/headerFrontImage.webp";
import NeonButton from "../../Utils/NeonButton/NeonButton";

function HeroSection() {
  return (
    <section className={`${styles.wrapper} w-full h-full`}>
      <article className="mx-auto pt-20 flex-center flex-col gap-4">
        <h1 className="font-bold text-secondary text-3xl">تم یکپارچه برای انواع مشاغل ساختمانی!</h1>
        <p className="text-xl text-secondary">کسب و کار خود را با عملکرد باورنکردنی و رابط کاربری کارآمد تقویت کنید!</p>
        <img className="w-full max-w-[73.125rem] mt-8" src={headerImage} alt="Hero Image" />
      </article>
      <NeonButton href="https://dana-team.com/products/buildwall/" target="_blank" className="max-sm:mt-28 max-md:mt-24 md:mt-8" text="مشاهده دموها" />
    </section>
  );
}

export default HeroSection;
