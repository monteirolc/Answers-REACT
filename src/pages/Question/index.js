import React, { useState } from 'react';

import Button from '@mui/material/Button';

import { Container } from '../../styles/GlobalStyles';
import { Title, MyP, MyDiv, Line, QuestionContainer } from './styled';
import axios from '../../services/axios';

export default function Question() {
  const [questions, setQuestions] = useState([]);

  const urlLocal = window.location.href;
  const [, , , , nquest] = urlLocal.split('/');
  async function getData() {
    const response = await axios.get(`api.php?amount=${nquest}`);
    console.clear();
    setQuestions(response.data);
  }
  getData();
  return (
    <Container>
      <Title>
        <h1>
          Brain<small>test</small>
        </h1>
      </Title>
      <MyP>{`This is question 1 of ${nquest}`}</MyP>
      <Line />

      <QuestionContainer>
        <MyP>{questions.result[1]}</MyP>
      </QuestionContainer>
      <MyDiv>
        <Button variant="outlined" color="info">
          {' '}
          Send{' '}
        </Button>
      </MyDiv>
    </Container>
  );
}
