import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function RaiseToNewLevelBottomCard({ title, description, icon }) {
  return (
    <article className="max-md:w-full md:max-w-[23.125rem] md:w-[30%] flex justify-start items-center flex-col gap-5">
      <FontAwesomeIcon icon={icon} className="w-10 h-10" fill="#ffe618" />
      <h3 className="text-[1.375rem] font-bold">{title}</h3>
      <p className="text-sm text-center min-h-[5rem]">{description}</p>
    </article>
  );
}

export default RaiseToNewLevelBottomCard;
