import React, { Component } from "react";
import ScrollAnimation from "./ScrollAnimation";
import Section_1 from "./Section_1";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";
import Section_4 from "./Section_4";
import Section_5 from "./Section_5";
import Section_6 from "./Section_6";
import NavBar from "./NavBar";
const Global_section = () => {
  return (
    <div className="global_section">
      <NavBar />
      <ScrollAnimation>
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5 />
        <Section_6 />
      </ScrollAnimation>
    </div>
  );
};

export default Global_section;
