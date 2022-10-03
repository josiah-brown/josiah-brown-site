import React from "react";
import Sketch from "react-p5";
import { themes } from "../data/themeSetup.js";

const HeroSketch = ({ parent }) => {
  const STEP = 0.005;

  let points;
  let t = 0;
  let HRFactor = 0;
  let BG = 255;
  let STROKE = 0;
  let R, MAX_NOISE_R, GRID_WIDTH, w, h;

  const setup = (p) => {
    w = document.getElementById(parent).offsetWidth;
    h = document.getElementById(parent).offsetHeight;
    p.createCanvas(w, h, p.WEBGL).parent(parent);
    p.frameRate(30);
    updateColors();

    // Update variables that depend on view dimensions
    if (w < 500) {
      R = w / 6;
      MAX_NOISE_R = w / 2;
      GRID_WIDTH = 60;
    } else if (w < 800) {
      R = w / 6;
      MAX_NOISE_R = w / 3;
      GRID_WIDTH = 80;
    } else if (w < 1200) {
      R = w / 10;
      MAX_NOISE_R = w / 3;
      GRID_WIDTH = 80;
    } else {
      R = w / 12;
      MAX_NOISE_R = w / 5;
      GRID_WIDTH = 120;
    }

    points = new Array(GRID_WIDTH * GRID_WIDTH).fill();

    // Fill the points array with 3D vectors
    points.forEach(
      (_, i) =>
        (points[i] = window.p5.Vector.fromAngles(
          ((i % GRID_WIDTH) / GRID_WIDTH) * p.PI,
          (i / GRID_WIDTH / GRID_WIDTH) * p.TWO_PI,
          R
        ))
    );
  };

  const draw = (p) => {
    updateColors();
    p.background(BG);
    p.stroke(STROKE);
    drawPoints(points, p);
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

  const mouseClicked = (p) => {};

  const windowResized = (p) => {
    w = document.getElementById(parent).offsetWidth;
    h = document.getElementById(parent).offsetHeight;
    p.resizeCanvas(w, h);
  };

  function drawPoints(pArray, p) {
    p.beginShape(p.POINTS);
    setHRFactor(t, p);
    pArray.forEach((point) => {
      let noiseV = createNoiseVector(point, p);
      p.vertex(point.x + noiseV.x, point.y + noiseV.y, point.z + noiseV.z);
    });
    p.endShape();

    t = t + 1.7 * STEP;
  }

  function setHRFactor(time, p) {
    HRFactor = p.sin(time);
  }

  function createNoiseVector(point, p) {
    let newNoise = p.noise(
      point.x / R + 1,
      point.y / R + 1,
      point.z / R + 1 + t
    );
    let adjustHRFactor = p.map(HRFactor, -1, 1, -1, 1);
    let adjustNoise = p.map(
      newNoise,
      0,
      1,
      -MAX_NOISE_R * adjustHRFactor,
      MAX_NOISE_R * adjustHRFactor
    );
    return p.createVector(
      point.x + (point.x / R) * adjustNoise,
      point.y + (point.y / R) * adjustNoise,
      point.z + (point.z / R) * adjustNoise
    );
  }

  return (
    <Sketch
      setup={setup}
      draw={draw}
      windowResized={windowResized}
      mouseClicked={mouseClicked}
    />
  );
};

export default HeroSketch;
