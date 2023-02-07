import React from "react";

interface props {
  image: string;
  title: string;
  href?: string;
}

function NonButtonCard(props: props) {
  return (
    <a href={props.href || "#"} className="lg:w-[16.875rem] md:w-[45%] max-md:w-full flex-center flex-col gap-5">
      <img className="w-full" src={props.image} alt={props.title} />
      <h3 className="w-full text-center">{props.title}</h3>
    </a>
  );
}

export default NonButtonCard;
