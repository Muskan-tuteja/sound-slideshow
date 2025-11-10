import React from "react";
import CenterContent from "./CenterContent";

const ScrollSection = ({ activeText }) => {
  return (
    <section className="h-screen flex justify-center items-center">
      <CenterContent text={activeText} />
    </section>
  );
};

export default ScrollSection;
