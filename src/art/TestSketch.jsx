import React from "react";
import Sketch from "react-p5";

const TestSketch = ({ parent }) => {
  const setup = (p) => {
    let w = document.getElementById(parent).offsetWidth;
    let h = document.getElementById(parent).offsetHeight;
    p.createCanvas(w, h).parent(parent);
  };

  const draw = (p) => {
    p.background(255, 130, 20);
    p.ellipse(100, 100, 100);
    p.ellipse(300, 100, 100);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default TestSketch;
