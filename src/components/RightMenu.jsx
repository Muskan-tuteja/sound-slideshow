import React from "react";

const RightMenu = ({ items, activeIndex, onHover, onClick }) => {
  return (
    <div className="flex flex-col gap-4 text-right text-white text-2xl font-bold cursor-pointer m-4">
      {items.map((item, i) => (
        <p
          key={i}
           onClick={() => onClick(i)} // 🔊 click sound
          onMouseEnter={onHover} //
          className={`transition-colors ${
            i === activeIndex ? "text-white" : "text-gray-900 hover:text-white"
          }`}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default RightMenu;
