import React, { useState, useEffect } from "react";
import { Container, Input, Button, TextResult } from "./Search.styles";

const Search = ({ onSearchChange, onSearchEmpty, error }) => {
  const [search, setSearch] = useState("");
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    if (search === "") {
      onSearchEmpty();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const OnclickSearch = (search) => {
    onSearchChange(search);
    setTextVisible(true);
  };

  return (
    <Container>
      <Input
        type="text"
        name="search"
        placeholder="Busca un personaje"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={() => OnclickSearch(search)}>Buscar</Button>

      {textVisible && search && !error && (
        <TextResult>
          Resultados para <strong>"{search}"</strong>
        </TextResult>
      )}

      {error && (
        <TextResult>
          <strong>"{error}" </strong> - Intenta de nuevo
        </TextResult>
      )}
    </Container>
  );
};

export { Search };
