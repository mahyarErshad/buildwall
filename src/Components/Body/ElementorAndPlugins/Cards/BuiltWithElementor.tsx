import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface props {
  text: string;
}

function BuiltWithElementor(props: props) {
  return (
    <li className="flex-center gap-3">
      <FontAwesomeIcon className="text-primary" icon={faCheck} />
      <span>{props.text}</span>
    </li>
  );
}

export default BuiltWithElementor;
