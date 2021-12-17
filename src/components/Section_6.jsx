import React, { Component } from "react";
import Middle_section from "./Middle_section";
import { Button } from "./Util";
const Section_6 = () => {
  return (
    <div className="section_6_container">
      <Middle_section>
        <div>
          <p className="section_title">Accessoires</p>
        </div>
        <div>
          <div className="section_buttons">
            <Button isActive={true} label="EN SAVOIR PLUS" />
          </div>
        </div>
      </Middle_section>
    </div>
  );
};

export default Section_6;
