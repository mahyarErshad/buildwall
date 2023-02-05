import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import showCaseServices from "../../../assets/images/showCaseServices.webp";

function RaiseToNewLevel() {
  return (
    <section className="max-w-[75rem] flex-center flex-col mt-10 mx-auto px-2 gap-4">
      <article className="flex-center flex-col gap-4 max-w-[48.125rem]">
        <h2 className="font-bold text-3xl">ارتقا به سطح بالاتر</h2>
        <h3 className="text-[1.375rem] text-center">کاوش و پیاده سازی فرصت های بی پایان!</h3>
        <p className="text-center text-sm">این تم دارای هر چیزی است که ممکن است برای اجرای آنلاین مشاغل ساختمانی خود به آن نیاز داشته باشید. این تم همه چیز را برای ارائه عملکرد قدرتمند و رابط کاربری واضح به شما ارائه میکند.</p>
      </article>
      <article className="flex-center w-full gap-8 flex-wrap mt-4">
        <div className="flex-center flex-col max-md:w-full md:w-[35%]">
          <FontAwesomeIcon className="w-10 h-10" fill="#ffe618" icon={faScrewdriverWrench} />
          <h4 className="text-[1.375rem] font-bold mt-4 mb-6">خدمات ویترینی</h4>
          <p className="text-sm">خدمات خود را به جذاب ترین شکل نمایش دهید و اطلاعات کاملی در مورد آنچه شرکت شما انجام می دهد به بازدیدکنندگان خود ارائه دهید. طراحی جذاب خدمات هیچ کس را بی تفاوت نمی گذارد!</p>
        </div>
        <img className="max-md:w-full md:w-[60%] max-w-[41.875rem]" src={showCaseServices} alt="show case services" />
      </article>
    </section>
  );
}

export default RaiseToNewLevel;
