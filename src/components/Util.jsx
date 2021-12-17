import React, { Component } from "react";
export const Button = ({ isActive = false, label }) => {
  return (
    <span name={label} className={isActive ? "button active" : "button"}>
      {label}
    </span>
  );
};

export const ChangeScrollMode = () => {
  let style = getComputedStyle(document.body);
  const mode1 = "smooth";
  const mode2 = "auto";
  window.addEventListener("mousedown", (e) => {
    console.log("Mouse");
  });
  console.log(style.getPropertyValue("--scrollMode"));

  //element.style.setProperty("--ma-variable", varJS + 4);
};
