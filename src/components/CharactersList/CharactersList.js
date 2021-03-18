import React from "react";
import { CharacterItem } from "../CharacterItem";
import { ContainerGrid } from "./CharactersList.styles";

const CharactersList = ({ characters }) => {
  const characterItems = characters.map((character) => {
    return <CharacterItem key={character.id} character={character} />;
  });

  return <ContainerGrid>{characterItems}</ContainerGrid>;
};

export { CharactersList };
