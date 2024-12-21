"use client";

import { Container, Stage, Graphics, InteractionEvents } from "@pixi/react";
import { useRef, useState, useMemo, useCallback } from "react";
import { BlurFilter } from "pixi.js";

const drawRectangle = (g) => {
  g.clear();
  g.beginFill(0x0000ff); // 青色
  g.drawRect(50, 50, 150, 100); // x, y, 幅, 高さ
  g.endFill();
};
const drawCircle = (g) => {
  g.clear();
  g.beginFill(0x00ff00); // 緑色
  g.drawCircle(100, 100, 50); // x, y, 半径
  g.endFill();
};

const drawLine = (g) => {
  g.clear();
  g.lineStyle(4, 0x000000); // 太さ、色
  g.moveTo(50, 50);
  g.lineTo(200, 200);
};

export default function Page() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Stage width={800} height={600} options={{ backgroundColor: 0x1099bb }}>
        <Container>
          <Graphics
            draw={drawRectangle}
            interactive={true}
            pointerdown={(e) => {
              console.log("pointerdown", e);
            }}
            pointerup={(e) => {
              console.log("pointerup", e);
            }}
          />
          <Graphics
            draw={drawCircle}
            interactive={true}
            pointerdown={(e) => {
              console.log("pointerdown", e);
            }}
            pointerup={(e) => {
              console.log("pointerup", e);
            }}
          />
          <Graphics
            draw={drawLine}
            interactive={true}
            pointerdown={(e) => {
              console.log("pointerdown", e);
            }}
            pointerup={(e) => {
              console.log("pointerup", e);
            }}
          />
        </Container>
      </Stage>
    </div>
  );
}
