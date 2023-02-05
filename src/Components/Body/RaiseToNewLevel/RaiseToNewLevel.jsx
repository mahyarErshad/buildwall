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
      <article className="flex-center w-full gap-8 flex-wrap">
        <img className="w-[65%] max-w-[41.875rem]" src={showCaseServices} alt="show case services" />
        <div className="flex-center flex-col w-[30%]">
          <FontAwesomeIcon className="w-10 h-10" fill="#ffe618" icon={faScrewdriverWrench} />
        </div>
      </article>
    </section>
  );
}

export default RaiseToNewLevel;
