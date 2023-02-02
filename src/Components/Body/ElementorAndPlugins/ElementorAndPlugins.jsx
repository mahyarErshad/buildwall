import React from "react";
import BuiltWithElementor from "./Cards/BuiltWithElementor";

function ElementorAndPlugins() {
  return (
    <section className="w-full mt-20 flex-center flex-col">
      <div className="flex-center flex-col w-full">
        <h2 className="text-3xl font-bold mb-8">ساخته شده توسط المنتور</h2>
        <ul>
          <BuiltWithElementor text="محتوا را بدون مهارت کد زدن اضافه کنید" />
        </ul>
      </div>
    </section>
  );
}

export default ElementorAndPlugins;
