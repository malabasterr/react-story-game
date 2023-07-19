import React, { useState, useEffect } from "react";

function Timer() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 9999);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showMessage && <div>
        <p id="Finale">You did it! The cauldron stops bubbling and the floor stops shaking. You stuff the wand in your pocket and quickly head out of the door before anyone sees you.</p>
        <p id="End">You are no longer concerned about the rain and all you can think about is what else you can do with this wand...</p>
        <p id="TheEnd">The End!</p>
        </div>}
    </div>
  );
};

export default Timer;