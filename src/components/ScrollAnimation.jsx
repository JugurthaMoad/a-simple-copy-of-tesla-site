import React, { Component, useEffect, useRef, useState } from "react";

const ScrollAnimation = ({ children }) => {
  const elementRef = useRef(null);
  const [mode, setMode] = useState(false);
  const options = {
    threshold: 0.25,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting === true) {
        console.log("entry = ", entry);
        entry.target.childNodes[0].classList.remove(
          "hide_middle_section_container"
        );
        if (entry.target.nextSibling != null) {
          entry.target.nextSibling.childNodes[0].classList.add(
            "hide_middle_section_container"
          );
        }
        if (entry.target.previousSibling != null) {
          entry.target.previousSibling.childNodes[0].classList.add(
            "hide_middle_section_container"
          );
        }
        window.scrollTo(0, entry.target.offsetTop);
      } else {
        entry.target.childNodes[0].classList.add(
          "hide_middle_section_container"
        );
      }
    });
  }, options);
  useEffect(() => {
    const { childNodes } = elementRef.current;
    childNodes.forEach((child) => observer.observe(child));
  });
  return (
    <div className="scroll_animation_container" ref={elementRef}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
