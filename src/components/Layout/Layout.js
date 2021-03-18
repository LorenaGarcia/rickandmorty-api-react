import React from "react";
import { Container, Header, Main } from "./Layout.styles";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>Rick and Morty</Header>
      <Main>{children}</Main>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export { Layout };
