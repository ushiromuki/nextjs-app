"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { VRMLoader } from "three/examples/jsm/loaders/VRMLoader";

export default function VRMModelPage() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    const loader = new VRMLoader();
    loader.load(
      "/models/Vroid_sample_v1_unity.vrm",
      (vrm) => {
        scene.add(vrm.scene);
      },
      (progress) => {
        console.log(`Loading model... ${(progress.loaded / progress.total) * 100}%`);
      },
      (error) => {
        console.error(error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
}