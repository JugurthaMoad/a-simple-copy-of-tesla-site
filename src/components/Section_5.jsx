import React, { Component } from "react";
import Middle_section from "./Middle_section";
import { Button } from "./Util";
const Section_5 = () => {
  return (
    <div className="section_5_container">
      <Middle_section>
        <div>
          <p className="section_title">
            Systèmes d'énergie solaire et Powerwalls
          </p>
        </div>
        <div>
          <div className="section_buttons">
            <Button isActive={true} label="COMMANDER MAINTENENT" />
          </div>
        </div>
      </Middle_section>
    </div>
  );
};

export default Section_5;
