import React from "react";

interface props {
  image: string;
  title: string;
  href?: string;
}

function NonButtonCard(props: props) {
  return (
    <a data-aos="zoom-in" href={props.href || "#"} className="lg:w-[16.875rem] NonButtonCard md:w-[45%] max-md:w-full max-w-[25rem] flex-center flex-col gap-5 transition-all duration-300 hover:-translate-y-2 hover:text-primary">
      <img className="w-full transition-all duration-300" src={props.image} alt={props.title} />
      <h3 className="w-full text-center text-inherit">{props.title}</h3>
    </a>
  );
}

export default NonButtonCard;
