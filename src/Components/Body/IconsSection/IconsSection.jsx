import React from "react";
import styles from "./styles.module.css";
import icon1 from "../../../assets/images/icons/1.png";

function IconsSection() {
  return (
    <section className="py-20 flex-center flex-col w-full bg-white px-4 gap-4">
      <h2 className="text-center text-3xl font-bold text-secondary">مجموعه بزرگی از آیکونهای فونت شکل</h2>
      <p className="text-sm text-center text-secondary"> وب سایت خود را با هزاران عنصر جذاب که مخصوص این تم ایجاد شده اند، تجهیز کنید! این آیکون های فونت شکل به عنوان یک گیلاس روی شیرینی در وب سایت شما خواهند بود! </p>
      <div className="max-w-[75rem] flex-center gap-4 flex-wrap">
        <figure className={`w-[6.8rem] h-[6.8rem] border border-[#e9e9f0] flex-center bg-white hover:bg-primary transition-all duration-500 ${styles.card}`}>
          <img className="h-[4.375rem] w-[4.375rem] transition-all duration-150" src={icon1} alt="" />
        </figure>
      </div>
    </section>
  );
}

export default IconsSection;
