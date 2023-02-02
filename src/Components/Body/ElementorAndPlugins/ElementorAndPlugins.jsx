import React from "react";
import BuiltWithElementor from "./Cards/BuiltWithElementor";
import ElementorAndPluginsBanner from "../../../assets/images/ElementorAndPluginsBanner.webp";

function ElementorAndPlugins() {
  return (
    <section className="w-full mt-20 flex-center flex-col">
      <div className="flex-center flex-col w-full gap-8">
        <h2 className="text-3xl font-bold">ساخته شده توسط المنتور</h2>
        <ul className="flex justify-center items-start flex-col gap-2">
          <BuiltWithElementor text="محتوا را بدون مهارت کد زدن اضافه کنید" />
          <BuiltWithElementor text="در چشم به هم زدنی استایل ها را عوض کنید" />
          <BuiltWithElementor text="بیش از 50 ویجت اضافی" />
        </ul>
      </div>
      <img className="max-lg:w-3/4 lg:w-2/4 mt-12" src={ElementorAndPluginsBanner} alt="banner" />
    </section>
  );
}

export default ElementorAndPlugins;
