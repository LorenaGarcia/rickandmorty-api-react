import styled from "styled-components";

const ContainerGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export { ContainerGrid };
