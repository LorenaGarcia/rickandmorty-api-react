import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Input, Button, TextResult } from "./Search.styles";

const Search = ({ onSearchChange, onSearchEmpty, error }) => {
  const [queryText, setQueryText] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    if (queryText === "") {
      onSearchEmpty();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryText]);

  const onClickSearch = (e) => {
    e.preventDefault();
    setIsSearched(true);
    onSearchChange(queryText);
  };

  return (
    <Container>
      <form>
        <Input
          type="text"
          aria-label="name"
          name="search"
          placeholder="Busca un personaje"
          onChange={(e) => setQueryText(e.target.value)}
        />
        <Button type="submit" onClick={onClickSearch}>
          Buscar
        </Button>
      </form>
      {isSearched && !error && (
        <TextResult>
          Resultados para <strong>{queryText}</strong>
        </TextResult>
      )}

      {error && isSearched && (
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
