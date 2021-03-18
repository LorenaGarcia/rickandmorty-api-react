import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  a:link {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 65%;
  border-radius: 20px;
  -webkit-box-shadow: 3px 3px 10px #afc7ce;
  -moz-box-shadow: 3px 3px 10px #afc7ce;
  box-shadow: 3px 3px 10px #afc7ce;
`;

const Name = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  margin-top: 0.5rem;
`;

const Description = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  margin: 0;
  margin-top: 0.5rem;
`;

export { Container, Image, Name, Description };
