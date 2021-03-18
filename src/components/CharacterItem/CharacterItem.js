import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, Name, Description } from "./CharacterItem.styles";

const CharacterItem = ({ character }) => {
  return (
    <Container>
      <Link to={`/character/${character.id}`}>
        <Image alt={character.id} src={character.image} />
        <div>
          <Name>{character.name}</Name>
          <Description>
            <strong>Origen:</strong> {character.origin.name}
          </Description>
          <Description>
            <strong>Satatus:</strong> {character.status}
          </Description>
        </div>
      </Link>
    </Container>
  );
};

export { CharacterItem };
