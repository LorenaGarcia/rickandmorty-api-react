import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { CharactersList } from "./CharactersList";

const characters = [
  {
    id: 11,
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
    status: "Dead",
    origin: { name: "Earth (C-137)" },
  },
  {
    id: 3,
    name: "Summer Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    status: "Alive",
    origin: { name: "Earth (Replacement Dimension)" },
  },
];

describe("Characters List", () => {
  it("renders", () => {
    render(
      <BrowserRouter>
        <CharactersList characters={characters} />
      </BrowserRouter>
    );
    expect(screen.getByText("Rick Sanchez")).toBeVisible();
    expect(screen.getByText("Dead")).toBeVisible();
    expect(screen.getByText("Earth (C-137)")).toBeVisible();
    expect(screen.getByText("Summer Smith")).toBeVisible();
    expect(screen.getByText("Alive")).toBeVisible();
    expect(screen.getByText("Earth (Replacement Dimension)")).toBeVisible();
  });
});
