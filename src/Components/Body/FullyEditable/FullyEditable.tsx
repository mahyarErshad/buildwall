import React from "react";
import fullyEditable from "../../../assets/images/fullyEditable.webp";

function FullyEditable() {
  return (
    <section className="py-20 flex-center flex-col w-full bg-white px-4 gap-4">
      <h2 className="text-center text-3xl font-bold text-secondary">هدر و فوتر کاملاً قابل ویرایش</h2>
      <p className="text-sm text-center text-secondary">ایجاد هدر و فوتر با استفاده از رابط کاربری واضح و ساده!</p>
      <img src={fullyEditable} alt="Fully Editable" />
    </section>
  );
}

export default FullyEditable;
