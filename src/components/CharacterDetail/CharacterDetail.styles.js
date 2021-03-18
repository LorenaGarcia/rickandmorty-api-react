import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const ContainerFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Name = styled.p`
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-weight: bold;
`;

const Image = styled.img`
  width: 40%;
  min-width: 280px;
  margin-right: 1rem;

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 0;
  }
`;

const Card = styled.div`
  width: 40%;
  min-width: 280px;
  background-color: #08a0b0;
  border-radius: 10px;
  padding: 1rem;
  -webkit-box-shadow: 3px 3px 10px #afc7ce;
  -moz-box-shadow: 3px 3px 10px #afc7ce;
  box-shadow: 3px 3px 10px #afc7ce;
  color: #ffffff;
  text-align: left;
  font-family: "Shadows Into Light", cursive;
  font-size: 18px;

  @media (max-width: 480px) {
    width: 90%;
    margin-top: 2rem;
  }
`;

const Arrow = styled.a`
  width: 100%;
  background-color: #ffffff;
  color: #08a0b0;
  text-align: left;
  font-family: "Shadows Into Light", cursive;
  font-size: 40px;
  text-decoration: none;
`;

export { Container, Name, Image, Card, ContainerFlex, Arrow };
