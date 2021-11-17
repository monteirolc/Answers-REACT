import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
  font-size: 2rem;
  small {
    font-size: 12pt;
    margin-left: 20px;
    color: green;
  }
`;

export const Paragrafo = styled.p`
  color: black;
`;
