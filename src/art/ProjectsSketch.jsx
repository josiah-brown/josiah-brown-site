import React from "react";
import Sketch from "react-p5";
import { themes } from "../data/themeSetup.js";

const ProjectsSketch = ({ parent }) => {
  let BG = 255;
  let STROKE = "rgba(0, 0, 0, 0.1)";
  let LAYERS = 50;
  let MAX_R;
  let STEP = 0.005,
    STEP2 = 0.001;
  let w, h;
  let a = 0,
    a2 = 0;

  const setup = (p) => {
    w = document.getElementById(parent).offsetWidth;
    h = document.getElementById(parent).offsetHeight;
    MAX_R = w > h ? h : w;
    p.createCanvas(w, h, p.WEBGL).parent(parent);
    p.frameRate(30);
    p.rectMode(p.CENTER);
    p.strokeWeight(3);
    updateColors();
  };

  const draw = (p) => {
    updateColors();
    p.background(BG);
    p.stroke(STROKE);
    p.rotateZ(a);
    for (let i = 0; i < LAYERS; i++) {
      let r = MAX_R - (MAX_R / LAYERS) * i;
      p.rect(0, 0, r * 2, r * 2);
    }
    p.rotateZ(-a - a2);
    p.translate(-1, 10, 0);
    for (let i = 0; i < LAYERS; i++) {
      let r = MAX_R - (MAX_R / LAYERS) * i;
      p.rect(0, 0, r * 2, r * 2);
    }
    a = a + STEP;
    a2 = a2 + STEP2;
  };

  const updateColors = () => {
    const dark = window.document.documentElement.classList.contains("dark");
    if (dark && BG === themes.dark.bg) {
      return;
    }
    if (!dark && BG !== themes.dark.bg) {
      return;
    }
    if (dark) {
      BG = themes.dark.bg;
      STROKE = themes.dark.main;
    } else {
      BG = themes.light.bg;
      STROKE = themes.light.main;
    }
  };

  const windowResized = (p) => {
    w = document.getElementById(parent).offsetWidth;
    h = document.getElementById(parent).offsetHeight;
    p.resizeCanvas(w, h);
  };
  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default ProjectsSketch;
