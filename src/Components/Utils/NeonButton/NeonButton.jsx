import React from "react";
import styles from "./styles.module.css"

function NeonButton() {
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
