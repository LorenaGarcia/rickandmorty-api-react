import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main";

  @media (max-width: 480px) {
    grid-template-rows: 1fr;
  }
`;

const Header = styled.div`
  grid-area: header;
  text-align: center;
  font-family: "Shadows Into Light", cursive;
  font-size: 80px;
  font-weight: bold;
  color: #08a0b0;
`;

const Main = styled.div`
  grid-area: main;
  padding: 3rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export { Container, Header, Main };
