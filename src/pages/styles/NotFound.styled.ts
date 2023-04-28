import styled from 'styled-components';

export const StyledNotFound = styled.div`
  text-align: center;
  padding-block: 7rem 2rem;

  h1 {
    font-size: 8rem;
  }

  p {
    text-transform: uppercase;
    font-size: 1.8rem;
  }

  a {
    margin-top: 3rem;
    color: inherit;
    display: inline-block;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.main};
    border: none;
    cursor: pointer;
    font-weight: 500;
    border-radius: 500px;
    transition: 0.2s ease-in-out;
    padding: 1rem 2.4rem;
    font-size: 1.6rem;
  }
`;
