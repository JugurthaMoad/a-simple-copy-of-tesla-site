import React, { Component } from "react";
const Middle_section = ({ children }) => {
  return (
    <div className="middle_section_container hide_middle_section_container">
      <div className="middle_section_top">{children ? children[0] : null}</div>
      <div className="middle_section_bottom">
        {children ? children[1] : null}
      </div>
    </div>
  );
};

export default Middle_section;
