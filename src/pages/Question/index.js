import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Radio, RadioGroup } from '@mui/material';
import MyFormControlLabel from '../../config/MyFormRadioLabel';

import axios from '../../services/axios';
import Loading from '../../components/Loading';
import { Container } from '../../styles/GlobalStyles';
import { Title, MyP, Line, QuestionContainer } from './styled';

export default function Question() {
  const urlLocal = window.location.href;
  const [, , , , nquest] = urlLocal.split('/');
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
      const response = await axios.get(`/api.php?amount=${nquest}`);
      setQuestions(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  function replaces(newString) {
    return newString
      .replaceAll(`&quot;`, `"`)
      .replaceAll(`&#034;`, `"`)
      .replaceAll(`&#039;`, `'`)
      .replaceAll(`&lsquo;`, `'`)
      .replaceAll(`&rsquo;`, `'`)
      .replaceAll(`&Uuml;`, `Ü`)
      .replaceAll(`&uuml;`, `ü`);
  }

  function inputResp(question, n) {
    const qtsn = [
      question.correct_answer,
      question.incorrect_answers[0],
      question.incorrect_answers[1],
      question.incorrect_answers[2],
    ];

    return (
      <div>
        <RadioGroup>
          <MyFormControlLabel
            disabled={disable}
            value={qtsn[0]}
            label={qtsn[0]}
            control={<Radio />}
          />
          <MyFormControlLabel
            disabled={disable}
            value={qtsn[1]}
            label={qtsn[1]}
            control={<Radio />}
          />
          <MyFormControlLabel
            disabled={disable}
            value={qtsn[2]}
            label={qtsn[2]}
            control={<Radio />}
          />
          <MyFormControlLabel
            disabled={disable}
            value={qtsn[3]}
            label={qtsn[3]}
            control={<Radio />}
          />
        </RadioGroup>
        <Button variant="contained">Confirm</Button>
      </div>
    );
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>
        <h1>
          Brain<small>test</small>
        </h1>
      </Title>
      <MyP>{`Answer all ${nquest} questions`}</MyP>
      <Line />
      <QuestionContainer>
        {questions
          ? questions.map((question, n) => (
              <div>
                <span>{question.category}</span>
                <h3>{replaces(question.question)}</h3>
                <p>{inputResp(question, n)}</p>
              </div>
            ))
          : null}
      </QuestionContainer>
    </Container>
  );
}
