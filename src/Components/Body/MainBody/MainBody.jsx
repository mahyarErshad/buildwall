import React from "react";
import DemosSection from "../DemosSection/DemosSection";
import ElementorAndPlugins from "../ElementorAndPlugins/ElementorAndPlugins";
import HeroSection from "../HeroSection/HeroSection";

function MainBody() {
  return (
    <main className="relative max-md:pb-8 md:pb-12">
      <HeroSection />
      <DemosSection />
      <ElementorAndPlugins />
    </main>
  );
}

export default MainBody;
