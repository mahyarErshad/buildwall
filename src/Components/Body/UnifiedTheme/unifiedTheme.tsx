import React from "react";
import styles from "./styles.module.css";

interface props {
  title: string;
  description: string;
  image: string;
}

function unifiedTheme(props) {
  return (
    <section className={`${styles.wrapper} py-20 w-full flex-center flex-col gap-5 lg:min-h-[18.75rem] mt-20 px-4`}>
      <h2 className="mt-5 text-3xl font-bold text-secondary text-center">تم یکپارچه برای همه انواع مشاغل ساختمانی!</h2>
      <h3 className="text-xl text-secondary text-center">فروش مقرون به صرفه و عاقلانه با گزینه های فروشگاه الکترونیکی داخلی!</h3>
    </section>
  );
}

export default unifiedTheme;
