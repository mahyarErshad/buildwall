import React from "react";
import NeonButton from "../../Utils/NeonButton/NeonButton";

interface props {
  image: string;
  title: string;
  href: string;
}

function DemosSectionCard(props: props) {
  return (
    <figure data-aos="zoom-in" className="flex-center flex-col gap-4 max-md:mb-8 md:mb-4 max-md:w-full md:w-[40%] lg:w-1/4">
      <img src={props.image} alt={props.title} />
      <h2 className="mb-4">{props.title}</h2>
      <NeonButton href={props.href} target="_blank" />
    </figure>
  );
}

export default DemosSectionCard;
