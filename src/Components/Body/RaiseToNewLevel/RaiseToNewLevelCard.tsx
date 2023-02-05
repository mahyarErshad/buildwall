import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function RaiseToNewLevelCard() {
  return (
    <article className="flex-center w-full gap-8 flex-wrap mt-4">
      <div className="flex-center flex-col max-md:w-full md:w-[35%]">
        <FontAwesomeIcon className="w-10 h-10" fill="#ffe618" icon={faScrewdriverWrench} />
        <h4 className="text-[1.375rem] font-bold mt-4 mb-6">خدمات ویترینی</h4>
        <p className="text-sm">خدمات خود را به جذاب ترین شکل نمایش دهید و اطلاعات کاملی در مورد آنچه شرکت شما انجام می دهد به بازدیدکنندگان خود ارائه دهید. طراحی جذاب خدمات هیچ کس را بی تفاوت نمی گذارد!</p>
      </div>
      <img className="max-md:w-full md:w-[60%] max-w-[41.875rem]" src={showCaseServices} alt="show case services" />
    </article>
  );
}

export default RaiseToNewLevelCard;
