import React from "react";
import { render, screen } from "@testing-library/react";
import { CharacterDetail } from "./CharacterDetail";

const character = {
  name: "Rick Sanchez",
  image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
  species: "human",
  gender: "male",
  status: "dead",
  origin: { name: "Earth (C-137)" },
  location: { name: "Earth (Replacement Dimension)" },
};

describe("Character Detail", () => {
  it("renders Detail of Character", () => {
    render(<CharacterDetail character={character} />);
    expect(screen.getByText("Rick Sanchez")).toBeVisible();
    expect(screen.getByText("human")).toBeVisible();
    expect(screen.getByText("male")).toBeVisible();
    expect(screen.getByText("dead")).toBeVisible();
    expect(screen.getByText("Earth (C-137)")).toBeVisible();
    expect(screen.getByText("Earth (Replacement Dimension)")).toBeVisible();
  });
  it("renders error message when character doesn´t exist", () => {
    render(<CharacterDetail />);
    expect(screen.getByText("No data Found")).toBeVisible();
  });
});
