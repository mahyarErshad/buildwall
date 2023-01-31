import React from "react";
import styles from "./styles.module.css";

interface props {
  text: string;
  href?: string;
}
function NeonButton(props: props) {
  return (
    <a className={styles.btn} href={props.href || "#"}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.text}
    </a>
  );
}

export default NeonButton;
