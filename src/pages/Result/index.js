import React from 'react';
import Fab from '@material-ui/core/Fab';
import { Home } from '@mui/icons-material';

import { Container } from '../../styles/GlobalStyles';
import { MyP, MySpan, Title, Center, Line, Bigger } from './styled';

export default function Result() {
  const questionSto = JSON.parse(localStorage.getItem('myQuestionsAndAnswers'));
  const correctSto = JSON.parse(localStorage.getItem('myCorrectAnswers'));
  const answerSto = JSON.parse(localStorage.getItem('questionsRequired'));

  function showQuestions(value, item) {
    if (item === 0) {
      return (
        <Bigger>
          Question: <MySpan>{`${value}`}</MySpan>
        </Bigger>
      );
    }
    if (item === 1) {
      return (
        <Bigger>
          Correct: <MySpan>{`${value}`}</MySpan>
        </Bigger>
      );
    }
    return (
      <div>
        <Bigger>
          Your Answer: <MySpan>{`${value}`}</MySpan>
        </Bigger>
        <Line />
      </div>
    );
  }

  return (
    <Container>
      <Title>
        <h1>
          Brain<small>test</small>
        </h1>
      </Title>
      <Line />
      <Bigger>YOUR RESULTS</Bigger>
      <MyP>{`Answered questions: ${answerSto}`}</MyP>
      <MyP>{`Correctly Answered: ${correctSto}`}</MyP>
      <Line />
      <MyP>
        {questionSto
          ? questionSto.map((valor) =>
              valor.map((nval, n) => showQuestions(nval, n))
            )
          : null}
      </MyP>
      <Center>
        <Fab aria-label="home" size="large" color="primary" href="/">
          <Home fontSize="large" />
        </Fab>
      </Center>
    </Container>
  );
}
