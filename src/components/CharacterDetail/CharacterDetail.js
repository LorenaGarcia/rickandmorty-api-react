import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  ContainerFlex,
  Name,
  Image,
  Card,
  Arrow,
} from "./CharacterDetail.styles";

const CharacterDetail = ({ character }) => {
  if (!character) {
    return <>No data Found</>;
  }
  return (
    <>
      <Arrow href="/"> &#8592; Regresar</Arrow>
      <Container>
        <Name>{character.name && character.name}</Name>
        <ContainerFlex>
          <Image src={character.image} alt={character.id} />
          <Card>
            <p>
              <strong>Especie:</strong> {character.species && character.species}
            </p>
            <p>
              <strong>Género:</strong> {character.gender && character.gender}
            </p>
            <p>
              <strong>Estatus:</strong> {character.status && character.status}
            </p>
            <p>
              <strong>Origen: </strong>
              {character.origin && character.origin.name}
            </p>
            <p>
              <strong>Localización: </strong>
              {character.location && character.location.name}
            </p>
          </Card>
        </ContainerFlex>
      </Container>
    </>
  );
};

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    status: PropTypes.string,
    origin: PropTypes.object,
    location: PropTypes.object,
  }),
};

export { CharacterDetail };
