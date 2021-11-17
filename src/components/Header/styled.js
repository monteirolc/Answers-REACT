import styled from 'styled-components';
import { primaryColor, ligthTextColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${ligthTextColor};
    margin: 0 1rem 0;
    font-weight: bold;
  }
`;
