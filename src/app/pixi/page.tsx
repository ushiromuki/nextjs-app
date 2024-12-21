import { Stage, Container, Sprite, Text } from "@pixi/react";
import { useMemo } from "react";
import { BlurFilter } from "pixi.js";

const PixiPage = () => {
  const blurFilter = useMemo(() => new BlurFilter(), []);

  return (
    <Stage width={800} height={600}>
      <Container filters={[blurFilter]}>
        <Sprite
          image="https://pixijs.io/examples/examples/assets/bg_scene_rotate.jpg"
          x={400}
          y={300}
          anchor={0.5}
        />
        <Text text="Pixi.js" x={400} y={300} anchor={0.5} />
      </Container>
    </Stage>
  );
};

export default function Page() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <PixiPage />
    </div>
  );
}
