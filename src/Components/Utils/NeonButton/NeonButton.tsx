import React from "react";
import styles from "./styles.module.css";

interface props {
  text: string;
  href?: string;
  className?: string;
  target?: "_blank";
}
function NeonButton(props: props) {
  return (
    <a target={props.target || ""} className={`${styles.btn} ${props.className} max-md:bg-primary md:bg-transparent max-md:text-customBlack shadow-xl md:text-white`} href={props.href || "#"}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.text}
    </a>
  );
}

export default NeonButton;
