import React from "react";
import PropTypes from "prop-types";
import { CharacterItem } from "../CharacterItem";
import { ContainerGrid } from "./CharactersList.styles";

const CharactersList = ({ characters }) => {
  return (
    <ContainerGrid>
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </ContainerGrid>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      status: PropTypes.string,
      origin: PropTypes.object,
    })
  ),
};

export { CharactersList };
