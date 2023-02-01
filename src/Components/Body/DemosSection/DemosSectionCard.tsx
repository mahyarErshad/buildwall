import React from "react";
import NeonButton from "../../Utils/NeonButton/NeonButton";

interface props {
  image: string;
  title: string;
}

function DemosSectionCard(props: props) {
  return (
    <figure className="flex-center flex-col gap-4">
      <img src={props.image} alt={props.title} />
      <h2 className="mb-4">{props.title}</h2>
      <NeonButton />
    </figure>
  );
}

export default DemosSectionCard;
