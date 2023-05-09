import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 2.4rem 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.stroke};
  img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    @media (max-width: 780px) {
      width: 4.8rem;
      height: 4.8rem;
    }
  }

  .visually-hidden {
    position: absolute;
    clip: rect(0 0 0 0);
    border: 0;
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
  }

  & > div {
    display: flex;
    gap: 1.2rem;
    margin-bottom: 1rem;
    align-items: center;
  }

  textarea {
    flex: 1;
    border: none;
    font: inherit;
    font-size: 2rem;
    resize: none;
    font-weight: 500;
    background-color: transparent;
    color: ${props => props.theme.colors.secondary};
    margin-top: 2rem;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${props => props.theme.colors.placeholder};
    }
  }

  button {
    margin-left: auto;
    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
`;
