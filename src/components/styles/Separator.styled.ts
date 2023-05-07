import styled from 'styled-components';

export const StyledSeparator = styled.div`
  height: 1.2rem;
  background-color: ${props => props.theme.colors.separator};
  border-bottom: 1px solid ${props => props.theme.colors.stroke};
`;
