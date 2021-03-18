import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Input, Button, TextResult } from "./Search.styles";

const Search = ({ onSearchChange, onSearchEmpty, error }) => {
  const [queryText, setQueryText] = useState("");

  useEffect(() => {
    if (queryText === "") {
      onSearchEmpty();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryText]);

  const onClickSearch = (search) => {
    onSearchChange(search);
  };

  return (
    <Container>
      <Input
        type="text"
        aria-label="name"
        name="search"
        placeholder="Busca un personaje"
        onChange={(e) => setQueryText(e.target.value)}
      />
      <Button onClick={() => onClickSearch(queryText)}>Buscar</Button>

      {queryText && !error && (
        <TextResult>
          Resultados para <strong>{queryText}</strong>
        </TextResult>
      )}

      {error && queryText && (
        <TextResult>{error} - Intenta de nuevo</TextResult>
      )}
    </Container>
  );
};

Search.propTypes = {
  onSearchChange: PropTypes.func,
  onSearchEmpty: PropTypes.func,
  error: PropTypes.string,
};

export { Search };
