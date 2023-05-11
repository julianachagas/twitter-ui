import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.accent};
  color: #fff;
  border: none;
  display: block;
  cursor: pointer;
  font-weight: 700;
  border-radius: 500px;
  transition: 0.2s ease-in-out;
  padding: 1rem 2.4rem;
  font-size: 1.6rem;
  font-family: inherit;
  &:hover:not(:disabled) {
    filter: brightness(0.9);
  }
`;
