import React from "react";
import { render, screen } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Layout", () => {
  it("renders Layout", () => {
    render(
      <Layout>
        <>Content Characters</>
      </Layout>
    );
    expect(screen.getByText("Rick and Morty")).toBeVisible();
    expect(screen.getByText("Content Characters")).toBeVisible();
  });
});
