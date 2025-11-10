import React, { useEffect } from "react";

const SoundManager = ({ clickSound, hoverSound, trigger }) => {
  useEffect(() => {
    if (trigger) {
      new Audio(clickSound).play();
    }
  }, [trigger, clickSound]);

  const playHover = () => {
    new Audio(hoverSound).play();
  };

  return (
    <div className="hidden">
      <button onMouseEnter={playHover}>sound</button>
    </div>
  );
};

export default SoundManager;
