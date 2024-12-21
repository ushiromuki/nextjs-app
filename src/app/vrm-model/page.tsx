"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { VRM,VRMLoaderPlugin } from "@pixiv/three-vrm";

function VRMModel() {
  const [vrm, setVrm] = useState<VRM | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();

    // VRM Loader Plugin
    loader.register((parser) => {
      return new VRMLoaderPlugin(parser)
    });

    // クロスオリジン対応
    loader.crossOrigin = "anonymous";

    loader.load(
      "/models/Vroid_sample_v1_unity.vrm",
      (gltf) => {
        const vrm = gltf.userData.vrm;

        setVrm(vrm);

        // deal with vrm features
        console.log(vrm);
      },
      (progress) => {
        console.log(
          "Loading model...",
          (progress.loaded / progress.total) * 100,
          "%"
        );
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return vrm ? <primitive object={vrm.scene} /> : null;
}

export default function Page() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <Suspense fallback={<h1>Loading...</h1>}>
          <VRMModel />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}