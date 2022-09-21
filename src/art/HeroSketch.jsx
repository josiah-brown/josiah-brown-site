import React from "react";
import Sketch from "react-p5";

const HeroSketch = ({ parent }) => {
  const STEP = 0.005;
  const BG = 255;
  const STROKE = 0;

  let points;
  let t = 0;
  let timeStopped = false;
  let HRFactor = 0;
  let R, MAX_NOISE_R, GRID_WIDTH, w, h;

  const setup = (p) => {
    w = document.getElementById(parent).offsetWidth;
    h = document.getElementById(parent).offsetHeight;
    p.createCanvas(w, h, p.WEBGL).parent(parent);

    // Update variables that depend on view dimensions
    console.log(w);
    if (w * 2 < 800) {
      R = w / 5;
      MAX_NOISE_R = w / 2;
      GRID_WIDTH = 60;
    } else {
      R = w / 12;
      MAX_NOISE_R = w / 7;
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
    p.background(BG);
    p.stroke(STROKE);
    p.noFill();
    //p.orbitControl();
    drawPoints(points, p);
  };

  const mouseClicked = (e) => {
    // if (e.mouseY < 600 && e.mouseY > 200) {
    timeStopped = !timeStopped;
    // }
  };

  function drawPoints(pArray, p) {
    p.beginShape(p.POINTS);
    setHRFactor(t, p);
    pArray.forEach((point) => {
      let noiseV = createNoiseVector(point, p);
      p.vertex(point.x + noiseV.x, point.y + noiseV.y, point.z + noiseV.z);
    });
    p.endShape();
    t = !timeStopped ? t + STEP : t;
  }

  function setHRFactor(time, p) {
    //HRFactor = pow(sin(time), 63) * sin(time + 1.5) * sin(time - 1.2) * 8;
    HRFactor = p.sin(time / 2);
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
      mouseClicked={(e) => {
        mouseClicked(e);
      }}
    />
  );
};

export default HeroSketch;
