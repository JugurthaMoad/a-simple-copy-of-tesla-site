import React, { Component } from "react";
import Middle_section from "./Middle_section";
import { Button } from "./Util";
const Section_1 = () => {
  return (
    <div className="section_1_container">
      <Middle_section>
        <div>
          <p className="section_title">Model 3</p>
          <a className="section_link" href="#">
            Réservez un essai sans contact
          </a>
        </div>
        <div>
          <div className="section_buttons">
            <Button
              isActive={true}
              label={["CONFIGURATION", <br />, "PERSONNALISÉE"]}
            />
            <Button label="VÉHICULES DISPONIBLES" />
          </div>
          <a className="section_link" href="#">
            En savoir plus sur Tesla pour les entreprises
          </a>
        </div>
      </Middle_section>
    </div>
  );
};

export default Section_1;
