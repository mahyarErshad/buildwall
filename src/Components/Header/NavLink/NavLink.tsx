import React from "react";
import styles from "./styles.module.css";

interface props {
  href: string;
  text: string;
}

function NavLink(props: props) {
  const { href, text } = props;
  return (
    <li className={`${styles.wrapper} cursor-pointer h-full`}>
      <a className="text-white font-semibold transition-all duration-300" href={href}>
        {text}
      </a>
    </li>
  );
}

export default NavLink;
