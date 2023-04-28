import { Link } from 'react-router-dom';
import { StyledNotFound } from './styles/NotFound.styled';

export const NotFound = () => {
  return (
    <StyledNotFound>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Back to Home</Link>
    </StyledNotFound>
  );
};
