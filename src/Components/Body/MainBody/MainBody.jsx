import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import BlogLayout from "../BlogLayout/BlogLayout";
import CustomPages from "../CustomPages/CustomPages";
import DemosSection from "../DemosSection/DemosSection";
import ElementorAndPlugins from "../ElementorAndPlugins/ElementorAndPlugins";
import FullyEditable from "../FullyEditable/FullyEditable";
import HeroSection from "../HeroSection/HeroSection";
import RaiseToNewLevel from "../RaiseToNewLevel/RaiseToNewLevel";
import ShopLayout from "../ShopLayout/ShopLayout";
import UnifiedTheme from "../UnifiedTheme/unifiedTheme";
import fullyEditable from "../../../assets/images/fullyEditable.webp";
import support from "../../../assets/images/support.webp";
import IconsSection from "../IconsSection/IconsSection";

function MainBody() {
  return (
    <main className="relative">
      <ScrollToTop smooth top={500} component={<FontAwesomeIcon className="fill-inherit" icon={faArrowUp} />} />
      <HeroSection />
      <DemosSection />
      <ElementorAndPlugins />
      <RaiseToNewLevel />
      <CustomPages />
      <BlogLayout />
      <ShopLayout />
      <UnifiedTheme description="فروش مقرون به صرفه و عاقلانه با گزینه های فروشگاه الکترونیکی داخلی!" image="unifiedTheme" className="mt-20" />
      <FullyEditable title="هدر و فوتر کاملاً قابل ویرایش" description="ایجاد هدر و فوتر با استفاده از رابط کاربری واضح و ساده!" image={fullyEditable} />
      <IconsSection />
      <FullyEditable title="پشتیبانی 24/7 و مستندات دقیق" description="تمام نگرانی ها را به تیم پشتیبانی دانا بسپارید! و اگر سؤالی وجود دارد، می توانید پاسخ را در اسناد منحصر به فرد بسیار دقیق بیابید." image={support} />
      <UnifiedTheme description="کسب و کار خود را با عملکرد باورنکردنی و رابط کاربری کارآمد تقویت کنید!" image="unifiedTheme2" dark />
    </main>
  );
}

export default MainBody;
