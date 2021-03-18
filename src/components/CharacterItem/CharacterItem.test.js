import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { CharacterItem } from "./CharacterItem";

const character = {
  id: 11,
  name: "Rick Sanchez",
  image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
  status: "dead",
  origin: { name: "Earth (C-137)" },
};

describe("Character Item", () => {
  it("renders card with character information", () => {
    render(
      <BrowserRouter>
        <CharacterItem character={character} />
      </BrowserRouter>
    );
    expect(screen.getByText("Rick Sanchez")).toBeVisible();
    expect(screen.getByText("dead")).toBeVisible();
    expect(screen.getByText("Earth (C-137)")).toBeVisible();
  });
});
