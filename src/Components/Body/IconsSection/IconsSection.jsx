import React from "react";
import styles from "./styles.module.css";
import icon1 from "../../../assets/images/icons/1.png";
import icon2 from "../../../assets/images/icons/2.png";
import icon3 from "../../../assets/images/icons/3.png";
import icon4 from "../../../assets/images/icons/4.png";
import icon5 from "../../../assets/images/icons/5.png";
import icon6 from "../../../assets/images/icons/6.png";
import icon7 from "../../../assets/images/icons/7.png";
import icon8 from "../../../assets/images/icons/8.png";
import icon9 from "../../../assets/images/icons/9.png";
import icon10 from "../../../assets/images/icons/10.png";
import icon11 from "../../../assets/images/icons/11.png";
import icon12 from "../../../assets/images/icons/12.png";
import icon13 from "../../../assets/images/icons/13.png";
import icon14 from "../../../assets/images/icons/14.png";
import icon15 from "../../../assets/images/icons/15.png";
import icon16 from "../../../assets/images/icons/16.png";
import icon17 from "../../../assets/images/icons/17.png";
import icon18 from "../../../assets/images/icons/18.png";
import icon19 from "../../../assets/images/icons/19.png";
import icon20 from "../../../assets/images/icons/20.png";

function IconsSection() {
  const data = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19, icon20];
  return (
    <section className="py-20 flex-center flex-col w-full bg-white px-4 gap-4">
      <h2 className="text-center text-3xl font-bold text-secondary">مجموعه بزرگی از آیکونهای فونت شکل</h2>
      <p className="text-sm text-center text-secondary"> وب سایت خود را با هزاران عنصر جذاب که مخصوص این تم ایجاد شده اند، تجهیز کنید! این آیکون های فونت شکل به عنوان یک گیلاس روی شیرینی در وب سایت شما خواهند بود! </p>
      <div className="max-w-[75rem] flex-center gap-2 flex-wrap">
        {data.map((item, index) => {
          return (
            <figure key={index} className={`w-[6.8rem] h-[6.8rem] border border-[#e9e9f0] flex-center bg-white hover:bg-primary transition-all duration-300 ${styles.card}`}>
              <img className="h-[4.375rem] w-[4.375rem] transition-all duration-150" src={item} alt="Theme icon" />;
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export default IconsSection;
