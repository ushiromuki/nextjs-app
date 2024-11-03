import type p5 from "p5";

export const circleSketch = {
  name: "Moving Circle",
  sketch: (p: p5) => {
    p.setup = () => {
      p.createCanvas(400, 400);
    };

    p.draw = () => {
      p.background(220);
      p.fill(255, 0, 0);
      p.noStroke();
      p.circle(p.mouseX, p.mouseY, 50);
    };
  },
};

export const rectangleSketch = {
  name: "Rotating Rectangle",
  sketch: (p: p5) => {
    p.setup = () => {
      p.createCanvas(400, 400);
      p.rectMode(p.CENTER);
    };

    p.draw = () => {
      p.background(200);
      p.translate(p.width / 2, p.height / 2);
      p.rotate(p.frameCount * 0.02);
      p.fill(0, 255, 0);
      p.rect(0, 0, 100, 100);
    };
  },
};

export const waveSketch = {
  name: "Wave Pattern",
  sketch: (p: p5) => {
    p.setup = () => {
      p.createCanvas(400, 400);
    };

    p.draw = () => {
      p.background(0);
      p.stroke(255);
      p.noFill();
      p.beginShape();
      for (let x = 0; x < p.width; x += 10) {
        const y = p.height / 2 + p.sin(x * 0.01 + p.frameCount * 0.05) * 100;
        p.vertex(x, y);
      }
      p.endShape();
    };
  },
};

export const sketches = [circleSketch, rectangleSketch, waveSketch];
