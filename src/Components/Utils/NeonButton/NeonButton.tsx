import React from "react";
import styles from "./styles.module.css"

interface props{
    text: String;
    href: String;
}
function NeonButton(props:props) {
  return (
      <a className={styles.btn} href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Neon Button
      </a>
  );
}

export default NeonButton;
