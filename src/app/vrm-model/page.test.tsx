import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Page from "./page";
import { describe, vi, it, expect } from "vitest";

vi.mock("@react-three/fiber", () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock("@react-three/drei", () => ({
  OrbitControls: () => <div>OrbitControls</div>,
}));

vi.mock("three/examples/jsm/loaders/GLTFLoader.js", () => ({
  GLTFLoader: vi.fn().mockImplementation(() => ({
    load: vi.fn((url, onLoad,) => {
      onLoad({ userData: { vrm: { scene: "mockScene" } } });
    }),
    register: vi.fn(),
    crossOrigin: "",
  })),
}));

vi.mock("@pixiv/three-vrm", () => ({
  VRM: vi.fn(),
  VRMLoaderPlugin: vi.fn(),
}));

describe("Page component", () => {
  it("renders without crashing", () => {
    render(<Page />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders VRMModel component", async () => {
    render(<Page />);
    expect(await screen.findByText("mockScene")).toBeInTheDocument();
  });

  it("renders OrbitControls component", () => {
    render(<Page />);
    expect(screen.getByText("OrbitControls")).toBeInTheDocument();
  });
});