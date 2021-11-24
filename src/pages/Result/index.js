import React from 'react';
import Fab from '@material-ui/core/Fab';
import { Home } from '@mui/icons-material';

import { Container } from '../../styles/GlobalStyles';
import { MyP, Title, Center, Line, Bigger } from './styled';

export default function Result() {
  const urlLocal = window.location.href;
  const [, , , , nmbQuestions, nmbCorrect] = urlLocal.split('/');
  return (
    <Container>
      <Title>
        <h1>
          Brain<small>test</small>
        </h1>
      </Title>
      <Line />
      <Bigger>YOUR RESULTS</Bigger>
      <MyP>{`Answered questions: ${nmbQuestions}`}</MyP>
      <MyP>{`Correctly Answered: ${nmbCorrect}`}</MyP>
      <Line />

      <Center>
        <Fab aria-label="home" size="large" color="primary" href="/">
          <Home fontSize="large" />
        </Fab>
      </Center>
    </Container>
  );
}
