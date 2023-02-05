import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function RaiseToNewLevelCard({ icon, title, description, image, reverse }) {
  const direction = reverse ? "flex-row-reverse" : "";
  return (
    <article className={`flex-center w-full gap-8 flex-wrap mt-4 ${direction} mb-6`}>
      <div className="flex-center flex-col max-md:w-full md:w-[35%]">
        <FontAwesomeIcon className="w-10 h-10" fill="#ffe618" icon={icon} />
        <h4 className="text-[1.375rem] font-bold mt-4 mb-6">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
      <img className="max-md:w-full md:w-[60%] max-w-[41.875rem]" src={image} alt={title} />
    </article>
  );
}

export default RaiseToNewLevelCard;
