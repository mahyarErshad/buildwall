import React from "react";
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
    </main>
  );
}

export default MainBody;
