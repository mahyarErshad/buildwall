import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface props {
  text: string;
}

function BuiltWithElementor(props: props) {
  return (
    <li className="flex-center gap-3">
      <FontAwesomeIcon fill="#ffe618" className="w-6 h-6" icon={faCheck} />
      <span className="text-sm">{props.text}</span>
    </li>
  );
}

export default BuiltWithElementor;
