import { faScrewdriverWrench, faBuilding, faCartShopping, faCheckToSlot, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import showCaseServices from "../../../assets/images/showCaseServices.webp";
import masterYourProject from "../../../assets/images/masterYourProject.webp";
import sellWithWoocommerce from "../../../assets/images/sellWithWoocommerce.webp";
import RaiseToNewLevelCard from "./RaiseToNewLevelCard";
import RaiseToNewLevelBottomCard from "./RaiseToNewLevelBottomCard";

function RaiseToNewLevel() {
  return (
    <section className="max-w-[75rem] flex-center flex-col mt-10 mx-auto px-2 gap-4">
      <article className="flex-center flex-col gap-4 max-w-[48.125rem]">
        <h2 className="font-bold text-3xl">ارتقا به سطح بالاتر</h2>
        <h3 className="text-[1.375rem] text-center">کاوش و پیاده سازی فرصت های بی پایان!</h3>
        <p className="text-center text-sm">این تم دارای هر چیزی است که ممکن است برای اجرای آنلاین مشاغل ساختمانی خود به آن نیاز داشته باشید. این تم همه چیز را برای ارائه عملکرد قدرتمند و رابط کاربری واضح به شما ارائه میکند.</p>
      </article>
      <RaiseToNewLevelCard title="خدمات ویترینی" description="خدمات خود را به جذاب ترین شکل نمایش دهید و اطلاعات کاملی در مورد آنچه شرکت شما انجام می دهد به بازدیدکنندگان خود ارائه دهید. طراحی جذاب خدمات هیچ کس را بی تفاوت نمی گذارد!" icon={faScrewdriverWrench} image={showCaseServices} />
      <RaiseToNewLevelCard reverse title="به پروژه های خود مسلط شوید" description="بیلدوال به پروژه های پیشرفته مجهز شده است، پروژه های شما را به نمایش می گذارد و نقاط قوت شرکت ساخت و ساز شما را نشان می دهد. شما می توانید طرح بندی پروژه ها را با توجه به خواسته های خود انتخاب کنید." icon={faBuilding} image={masterYourProject} />
      <RaiseToNewLevelCard title="فروش موثر با ووکامرس" description="هیچ چیز ساده تر از فروش آنلاین با بسته ووکامرس بیلدوال نیست! کالاهای خود را اضافه کنید، دسته بندی های خود را ایجاد کنید و سود را با فروشگاه الکترونیکی یکپارچه به حداکثر برسانید!" icon={faCartShopping} image={sellWithWoocommerce} />
      <div className="w-full py-12 flex justify-between items-center flex-wrap">
        <RaiseToNewLevelBottomCard title="لیست قیمت ها" description="این گزینه درجه یک امکان ایجاد و سفارشی کردن لیست قیمت ها را بدون دردسر فراهم می کند. شما قادر خواهید بود به راحتی و بدون نگرانی لیست قیمت های خود را تنظیم و تغییراتی ایجاد کنید!" icon={faCheckToSlot} />
        <RaiseToNewLevelBottomCard title="توصیفات را به نمایش بگذارید" description="این گزینه درجه یک امکان ایجاد و سفارشی کردن لیست قیمت ها را بدون دردسر فراهم می کند. شما قادر خواهید بود به راحتی و بدون نگرانی لیست قیمت های خود را تنظیم و تغییراتی ایجاد کنید!" icon={faThumbsUp} />
        <RaiseToNewLevelBottomCard title="اعضای تیم را معرفی کنید" description="با بیلدوال می‌توانید اطلاعات دقیق و جذابی را در مورد کارمندان به بازدیدکنندگان خود ارائه دهید و کارهایی که انجام می‌دهند و مهارت‌ها، تجربه و قدرت آنها را برجسته کنید." icon={faUser} />
      </div>
    </section>
  );
}

export default RaiseToNewLevel;
