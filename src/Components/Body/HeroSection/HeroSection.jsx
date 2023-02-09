import React from "react";
import styles from "./styles.module.css";
import headerImage from "../../../assets/images/headerFrontImage.webp";
import NeonButton from "../../Utils/NeonButton/NeonButton";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section id="home" className={`${styles.wrapper} w-full h-full`}>
      <article className="mx-auto pt-20 flex-center flex-col gap-4">
        <TypeAnimation className="font-bold text-secondary text-3xl max-sm:h-20 sm:h-auto" sequence={["قالب شرکتی ساختمانی بیلدوال", 3000, "قالب یکپارچه برای انواع سایت های شرکتی!", 3000, , "قالب یکپارچه برای انواع مشاغل ساختمانی!", 3000]} speed={50} deletionSpeed={80} wrapper="h1" repeat={Infinity} />
        <p className="text-xl text-secondary">کسب و کار خود را با عملکرد باورنکردنی و رابط کاربری کارآمد متحول کنید!</p>
        <img className="w-full max-w-[73.125rem] mt-8" src={headerImage} alt="Hero Image" />
      </article>
      <NeonButton href="https://dana-team.com/products/buildwall/" target="_blank" className="max-sm:mt-24 max-md:mt-16 md:mt-8" />
    </section>
  );
}

export default HeroSection;
