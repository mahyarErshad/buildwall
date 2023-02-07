import React from "react";

interface props {
  image: string;
  title: string;
  href: string;
}

function NonButtonCard(props: props) {
  return (
    <figure>
      <a>
        <img src="" alt="" />
        <h3></h3>
      </a>
    </figure>
  );
}

export default NonButtonCard;
