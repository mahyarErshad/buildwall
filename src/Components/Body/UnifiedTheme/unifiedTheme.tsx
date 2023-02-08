import React from "react";
import styles from "./styles.module.css";

interface props {
  title: string;
  description: string;
  image: string;
  className: string;
}

function unifiedTheme(props: props) {
  return (
    <section className={`${props.image} ${styles.wrapper} py-20 w-full flex-center flex-col gap-5 lg:min-h-[18.75rem] px-4 ${props.className}`}>
      <h2 className="mt-5 text-3xl font-bold text-secondary text-center"> {props.title} </h2>
      <h3 className="text-xl text-secondary text-center"> {props.description} </h3>
    </section>
  );
}

export default unifiedTheme;
