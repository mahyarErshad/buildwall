import React from "react";
import BlogLayout from "../BlogLayout/BlogLayout";
import CustomPages from "../CustomPages/CustomPages";
import DemosSection from "../DemosSection/DemosSection";
import ElementorAndPlugins from "../ElementorAndPlugins/ElementorAndPlugins";
import HeroSection from "../HeroSection/HeroSection";
import RaiseToNewLevel from "../RaiseToNewLevel/RaiseToNewLevel";

function MainBody() {
  return (
    <main className="relative max-md:pb-8 md:pb-12">
      <HeroSection />
      <DemosSection />
      <ElementorAndPlugins />
      <RaiseToNewLevel />
      <CustomPages />
      <BlogLayout />
    </main>
  );
}

export default MainBody;
