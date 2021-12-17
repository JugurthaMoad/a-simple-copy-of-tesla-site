import { useEffect } from "react";
import Global_section from "./components/Global_section.jsx";
import { ChangeScrollMode } from "./components/Util";
function App() {
  const changeMode = () => {
    let style = getComputedStyle(document.body);
    const mode1 = "smooth";
    const mode2 = "auto";
    window.addEventListener("mousedown", () => {
      document.body.style.setProperty("--scrollMode", mode2);
    });
    document.body.style.setProperty("--scrollMode", mode1);
  };
  useEffect(() => {
    changeMode();
  });
  return (
    <div>
      <Global_section />
    </div>
  );
}

export default App;
