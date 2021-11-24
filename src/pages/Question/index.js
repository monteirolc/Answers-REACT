import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Radio, RadioGroup } from '@mui/material';

import MyFormControlLabel from '../../config/MyFormRadioLabel';
import replaces from '../../config/replaces';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import { Container } from '../../styles/GlobalStyles';
import { Title, MyP, Line, QuestionContainer, InvLabel } from './styled';

export default function Question() {
  const urlLocal = window.location.href;
  const [, , , , nquest] = urlLocal.split('/');
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [correct, setCorrect] = useState(0);
  const answerF = [];
  const questionF = [];
  const correctF = [];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
      const response = await axios.get(`/api.php?amount=${nquest}`);
      setQuestions(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  function handleclick(question, correctQ, yours, classN, divL) {
    questionF.push(question);
    correctF.push(correctQ);
    const element = document.getElementById(classN);
    const elementT = document.getElementById(divL);
    if (correctQ === yours) {
      setCorrect(correct + 1);
    }
    elementT.style.visibility = 'visible';
    elementT.style.display = 'show';
    element.setAttribute('disabled', 'true');
  }

  function inputResp(question, n, type) {
    if (type === 'boolean') {
      const qtsn = [question.correct_answer, question.incorrect_answers[0]];
      return (
        <div>
          <RadioGroup onChange={(e) => answerF.push(e.target.value)}>
            <MyFormControlLabel
              value={qtsn[0]}
              label={qtsn[0]}
              control={<Radio />}
            />
            <MyFormControlLabel
              value={qtsn[1]}
              label={qtsn[1]}
              control={<Radio />}
            />
          </RadioGroup>
          <Button
            variant="contained"
            id={`radio${n}`}
            onClick={() =>
              handleclick(
                question.question,
                question.correct_answer,
                answerF[n],
                `radio${n}`,
                `show${n}`
              )
            }
          >
            Confirm
          </Button>
          <InvLabel id={`show${n}`}>
            Correct answer: {question.correct_answer}{' '}
          </InvLabel>
        </div>
      );
    }
    const qtsn = [
      question.correct_answer,
      question.incorrect_answers[0],
      question.incorrect_answers[1],
      question.incorrect_answers[2],
    ];

    return (
      <div>
        <RadioGroup
          onChange={(e) => {
            answerF.push(e.target.value);
          }}
        >
          <MyFormControlLabel
            value={qtsn[0]}
            label={qtsn[0]}
            control={<Radio />}
          />
          <MyFormControlLabel
            value={qtsn[1]}
            label={qtsn[1]}
            control={<Radio />}
          />
          <MyFormControlLabel
            value={qtsn[2]}
            label={qtsn[2]}
            control={<Radio />}
          />
          <MyFormControlLabel
            value={qtsn[3]}
            label={qtsn[3]}
            control={<Radio />}
          />
        </RadioGroup>
        <Button
          variant="contained"
          id={`radio${n}`}
          onClick={() =>
            handleclick(
              question.question,
              question.correct_answer,
              answerF[n],
              `radio${n}`,
              `show${n}`
            )
          }
        >
          Confirm
        </Button>
        <InvLabel id={`show${n}`}>
          {' '}
          Correct answer: {question.correct_answer}{' '}
        </InvLabel>
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
                <p>{inputResp(question, n, question.type)}</p>
              </div>
            ))
          : null}
      </QuestionContainer>
      <Line />
      <Button
        variant="outlined"
        color="secondary"
        href={`/results/${nquest}/${correct}`}
      >
        Finish
      </Button>
      <MyP>{`Correct questions: ${correct} of ${nquest}`}</MyP>
    </Container>
  );
}
