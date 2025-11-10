import React from "react";

const LeftMenu = ({ items, activeIndex, setActive,onHover }) => {
  return (
    <div className="flex flex-col gap-4 text-black text-2xl font-bold">
      {items.map((item, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
           onMouseEnter={onHover}
          className={`text-left transition-all duration-300 ${
            i === activeIndex
              ? "text-white"
              : "text-black hover:text-white"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default LeftMenu;
