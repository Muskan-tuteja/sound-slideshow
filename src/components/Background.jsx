import React, { useState } from "react";

// 10 overlay colors for side images
const sideColors = [
  "bg-red-500/30",
  "bg-blue-500/30",
  "bg-green-500/30",
  "bg-yellow-500/30",
  "bg-purple-500/30",
  "bg-pink-500/30",
  "bg-indigo-500/30",
  "bg-orange-500/30",
  "bg-teal-500/30",
  "bg-gray-500/30",
];

const Background = ({ images, activeIndex }) => {
  const [colorIndex, setColorIndex] = useState(0);

  const prevIndex = (activeIndex - 1 + images.length) % images.length;
  const nextIndex = (activeIndex + 1) % images.length;

  // Cycle color index
  const handleMouseEnter = () => {
    setColorIndex((prev) => (prev + 1) % sideColors.length);
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden flex justify-center items-center">
      {images.map((img, index) => {
        let position = "center"; // default center
        if (index === prevIndex) position = "left";
        if (index === nextIndex) position = "right";

        return (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ease-in-out`}
            onMouseEnter={handleMouseEnter}
            style={{
              left:
                position === "left"
                  ? "5%" // left side
                  : position === "right"
                  ? "95%" // right side
                  : "50%", // center
              top: "50%",
              transform:
                position === "center"
                  ? "translate(-50%, -50%) scale(1)"
                  : "translate(-50%, -50%) scale(0.8)",
              width: position === "center" ? "60%" : "30%",
              filter: position === "center" ? "blur(0px)" : "blur(4px)",
              zIndex: position === "center" ? 10 : 5,
            }}
          >
            <img
              src={img}
              alt={`background-${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Side overlay color */}
            {position !== "center" && (
              <div
                className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
                  sideColors[colorIndex]
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Background;
