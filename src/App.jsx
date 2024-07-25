// App.js

import React from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { AnimatePresence } from "framer-motion";
import "locomotive-scroll/dist/locomotive-scroll.css";

import HeroSection from "./components/HeroSection";
import SecondrySection from "./components/SecondrySection";
import Models from "./components/Models";
import Card from "./components/Card";
import Partner from "./components/Partner";

const App = () => {
  const containerRef = React.useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 1,
        class: "is-reveal",
      }}
      // watch={[]}
      containerRef={containerRef}
    >
      <AnimatePresence>
        <div
          className="App bg-gray-100"
          data-scroll-container
          ref={containerRef}
        >
          <HeroSection />
          <SecondrySection />
          <Models />
          <Card />
          <Partner />
        </div>
      </AnimatePresence>
    </LocomotiveScrollProvider>
  );
};

export default App;
