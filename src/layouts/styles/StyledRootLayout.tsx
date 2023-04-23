import styled from 'styled-components';

export const StyledRootLayout = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  max-width: 1024px;
  margin: 0 auto;
  min-height: 100vh;

  & > main,
  & > div {
    border-right: 1px solid ${props => props.theme.colors.stroke};
    @media (max-width: 1024px) {
      border-right: none;
    }
  }

  @media (max-width: 780px) {
    grid-template-columns: 80px 1fr;
  }

  @media (max-width: 370px) {
    grid-template-columns: 70px 1fr;
  }
`;
