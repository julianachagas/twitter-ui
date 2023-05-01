import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.stroke};
  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    svg {
      color: ${props => props.theme.colors.accent};
    }
  }
`;
