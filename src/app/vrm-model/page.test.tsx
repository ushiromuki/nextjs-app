import React from "react";
import { render } from "@testing-library/react";
import Page from "./page";

jest.mock("@react-three/fiber", () => ({
  ...jest.requireActual("@react-three/fiber"),
  Canvas: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

test("VRMモデルページがレンダリングされる", () => {
  const { getByText } = render(<Page />);
  expect(getByText((content, element) => element.tagName.toLowerCase() === 'div')).toBeInTheDocument();
});