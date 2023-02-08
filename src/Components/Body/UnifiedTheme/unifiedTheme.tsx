import React from "react";
import styles from "./styles.module.css";

interface props {
  description: string;
  image: string;
  className?: string;
  dark?: boolean;
}

function unifiedTheme(props: props) {
  const textColor = props.dark ? "text-white" : "text-secondary";
  return (
    <section className={`${props.image} ${styles.wrapper} py-20 w-full flex-center flex-col gap-5 lg:min-h-[18.75rem] px-4 ${props.className}`}>
      <h2 className={`mt-5 text-3xl font-bold text-center ${textColor}`}> تم یکپارچه برای همه انواع مشاغل ساختمانی! </h2>
      <h3 className={`text-xl text-center ${textColor}`}> {props.description} </h3>
    </section>
  );
}

export default unifiedTheme;
