import React from "react";

interface props {
  title: string;
  description: string;
  image: string;
}

function FullyEditable(props: props) {
  return (
    <section className="py-20 flex-center flex-col w-full bg-white px-4 gap-4">
      <h2 className="text-center text-3xl font-bold text-secondary">{props.title}</h2>
      <p className="text-sm text-center text-secondary"> {props.description} </p>
      <img src={props.image} alt="Fully Editable" />
    </section>
  );
}

export default FullyEditable;
