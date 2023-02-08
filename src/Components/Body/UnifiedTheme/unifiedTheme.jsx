import React from "react";
import styles from "./styles.module.css";

function unifiedTheme() {
  return (
    <section className={`${styles.wrapper} py-20 w-full flex-center flex-col gap-5 lg:min-h-[18.75rem] mt-20`}>
      <h2 className="mt-5 text-3xl font-bold text-secondary">تم یکپارچه برای همه انواع مشاغل ساختمانی!</h2>
      <h3 className="text-xl text-secondary">فروش مقرون به صرفه و عاقلانه با گزینه های فروشگاه الکترونیکی داخلی!</h3>
    </section>
  );
}

export default unifiedTheme;
