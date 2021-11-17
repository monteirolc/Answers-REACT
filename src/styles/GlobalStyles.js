import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body{
  font-family: sans-serif;
  background: ${colors.primaryDarkColor};
  color:${colors.primaryColor};
}
html{
  font-size: 62.5%;
}
html, body, #root{
  height: 100%;
}

button{
  cursor: pointer;
  background: ${colors.primaryColor};
  border:none;
  color:${colors.ligthTextColor};
  padding: 1.0rem 1.7rem;
  border-radius: 0.5rem;
  font-weight: 70rem;
  margin-top: 2rem;
}

a{
  cursor: pointer;
  text-decoration: none;
  color: ${colors.primaryColor};
}

ul{
  list-style: none;
}

nav{
  color: white;
}

`;

export const Container = styled.section`
  max-width: 50rem;
  background: white;
  margin: 3rem auto;
  padding: 3rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 0 1rem rgba(0, 0, 0, 0.1);
`;
