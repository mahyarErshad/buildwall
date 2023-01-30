import React from "react";

interface props {
  href: string;
  text: string;
}

function NavLink(props: props) {
  const { href, text } = props;
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  );
}

export default NavLink;
