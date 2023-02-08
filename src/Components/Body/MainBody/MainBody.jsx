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

function MainBody() {
  return (
    <main className="relative max-md:pb-8 md:pb-12">
      <ScrollToTop smooth top={500} className="rounded-[50%] bg-primary transition-all duration-300 fill-secondary hover:fill-primary hover:bg-secondary outline outline-1 outline-secondary hover:outline-primary" component={<FontAwesomeIcon className="fill-inherit" icon={faArrowUp} />} />
      <HeroSection />
      <DemosSection />
      <ElementorAndPlugins />
      <RaiseToNewLevel />
      <CustomPages />
      <BlogLayout />
      <ShopLayout />
      <UnifiedTheme />
      <FullyEditable title="هدر و فوتر کاملاً قابل ویرایش" description="ایجاد هدر و فوتر با استفاده از رابط کاربری واضح و ساده!" />
    </main>
  );
}

export default MainBody;
