import React from "react";
import BuiltWithElementor from "./Cards/BuiltWithElementor";

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
    </section>
  );
}

export default ElementorAndPlugins;
