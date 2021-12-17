import React, { Component } from "react";
import Middle_section from "./Middle_section";
import { Button } from "./Util";
const Section_4 = () => {
  return (
    <div className="section_4_container">
      <Middle_section>
        <div>
          <p className="section_title">Model X</p>
        </div>
        <div>
          <div className="section_buttons">
            <Button
              isActive={true}
              label={["CONFIGURATION", <br />, "PERSONNALISÉE"]}
            />
            <Button label="EN SAVOIR PLUS" />
          </div>
          <a className="section_link" href="#">
            En savoir plus sur Tesla pour les entreprises
          </a>
        </div>
      </Middle_section>
    </div>
  );
};

export default Section_4;
