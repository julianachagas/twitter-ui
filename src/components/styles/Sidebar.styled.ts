import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  border-left: 1px solid ${props => props.theme.colors.stroke};
  border-right: 1px solid ${props => props.theme.colors.stroke};
  padding: 2.4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ul svg {
    font-size: 3.2rem;
  }

  li + li {
    margin-top: 3.2rem;
  }

  a {
    font-weight: 500;
    font-size: 2rem;
    color: ${props => props.theme.colors.textHighlight};
    display: flex;
    align-items: center;
    gap: 2rem;
    transition: 0.2s ease-in-out;
    &.active {
      svg > path {
        fill: currentColor;
      }
    }
    &:hover,
    &.active {
      color: ${props => props.theme.colors.accent};
    }
  }

  button {
    width: 100%;
    padding: 1.6rem;
    font-size: 2rem;
    svg {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    border-left: none;
  }

  @media (max-width: 780px) {
    padding-inline: 0;

    img {
      margin: 0 auto;
    }
    li span {
      display: none;
    }

    a {
      justify-content: center;
    }

    button {
      border-radius: 50%;
      width: 5.6rem;
      height: 5.6rem;
      margin: 0 auto;
      svg {
        display: block;
        font-size: 2.4rem;
      }
      span {
        display: none;
      }
    }
  }
`;
