import styled from 'styled-components';

export const StyledTweet = styled.div`
  display: flex;
  gap: 1.2rem;
  padding: 2.4rem 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.stroke};

  img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  & > div {
    flex: 1;
  }

  p {
    margin-block: 0.8rem 2rem;
    line-height: 1.5;
  }

  span:not(.user) {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.textLight};
  }

  .user {
    font-weight: 700;
    margin-right: 0.4rem;
  }

  .stats {
    display: flex;
    max-width: 25rem;
    justify-content: space-between;
    & > button {
      border: none;
      background: transparent;
      font-size: 1.4rem;
      color: ${props => props.theme.colors.textLight};
      font-weight: 500;
      cursor: pointer;
      font-weight: 400;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      min-width: 6rem;
      &:hover {
        color: ${props => props.theme.colors.accent};
      }
    }
  }

  @media (max-width: 780px) {
    img {
      width: 4.8rem;
      height: 4.8rem;
    }
  }

  @media (max-width: 450px) {
    padding: 1.6rem 1.2rem;
    .stats button {
      gap: 0.5rem;
    }
  }
`;
