import React from "react";
import styles from "./styles.module.css";

function HeroSection() {
  return (
    <section className={`${styles.wrapper} w-full h-full`}>
      <article className="relative bottom-[28.125rem] mx-auto flex-center flex-col gap-4">
        <h1 className="font-bold text-3xl">تم یکپارچه برای انواع مشاغل ساختمانی!</h1>
        <p className="text-xl">کسب و کار خود را با عملکرد باورنکردنی و رابط کاربری کارآمد تقویت کنید!</p>
      </article>
    </section>
  );
}

export default HeroSection;
