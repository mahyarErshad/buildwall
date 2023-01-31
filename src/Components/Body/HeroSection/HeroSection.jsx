import React from "react";
import styles from "./styles.module.css";
import headerImage from "../../../assets/images/headerFrontImage.webp";

function HeroSection() {
  return (
    <section className={`${styles.wrapper} w-full h-full`}>
      <article className="mx-auto pt-20 flex-center flex-col gap-4">
        <h1 className="font-bold text-3xl">تم یکپارچه برای انواع مشاغل ساختمانی!</h1>
        <p className="text-xl">کسب و کار خود را با عملکرد باورنکردنی و رابط کاربری کارآمد تقویت کنید!</p>
        <img className="max-w-[73.125rem] mt-8" src={headerImage} alt="Hero Image" />
      </article>
    </section>
  );
}

export default HeroSection;
