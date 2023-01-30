import React from "react";

interface props {
  href: string;
  text: string;
}

function NavLink(props: props) {
  const { href, text } = props;
  return (
    <li>
      <a className="text-white font-bold transition-all duration-300" href={href}>
        {text}
      </a>
    </li>
  );
}

export default NavLink;
