import React, { useState } from "react";

function ToggleElement() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div>
      <button id="OpenBtn" onClick={toggleVisibility}></button>
      {isVisible && <div id="PaperBox"></div>}
    </div>
  );
}

export default ToggleElement;