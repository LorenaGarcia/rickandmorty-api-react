import React from "react";
import PropTypes from "prop-types";
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

CharacterItem.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string,
    origin: PropTypes.object,
  }),
};

export { CharacterItem };
