import React from "react";
import NeonButton from "../../Utils/NeonButton/NeonButton";

interface props {
  image: string;
  title: string;
}

function DemosSectionCard(props: props) {
  return (
    <figure className="flex-center flex-col gap-4">
      <img src="https://ld-wp73.template-help.com/buildwall/landing/images/skin-1.png" alt="test" />
      <h2 className="mb-4">ساخت و ساز</h2>
      <NeonButton />
    </figure>
  );
}

export default DemosSectionCard;
