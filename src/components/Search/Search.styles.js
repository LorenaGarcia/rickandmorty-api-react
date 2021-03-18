import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 5rem;
  position: sticky;
  top: 0;
  padding: 1rem;
  background-color: #ffffff;

  @media (max-width: 480px) {
    position: unset;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 25%;
  height: 2.5rem;
  border-radius: 8px;
  border: 1px solid #d1d1d1;
  margin-right: 1rem;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  padding-left: 1rem;

  :focus {
    outline: none;
    border: 1px solid #585858;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding-left: 0;
    margin-bottom: 1rem;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    width: 40%;
  }
`;

const Button = styled.button`
  width: 10%;
  height: 2.6rem;
  border-radius: 8px;
  border: none;
  margin-right: 1rem;
  background-color: #08a0b0;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    width: 20%;
  }

  :focus {
    outline: none;
  }
`;

const TextResult = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;

export { Container, Input, Button, TextResult };
