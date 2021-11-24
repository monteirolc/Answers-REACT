import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Radio, RadioGroup } from '@mui/material';

import MyFormControlLabel from '../../config/MyFormRadioLabel';
import replaces from '../../config/replaces';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import { Container } from '../../styles/GlobalStyles';
import {
  Title,
  MyP,
  Line,
  QuestionContainer,
  InvLabel,
  Center,
} from './styled';

const storageData = [];
export default function Question() {
  const urlLocal = window.location.href;
  const [, , , , nquest] = urlLocal.split('/');
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [sAnswer, setSAnswer] = useState();
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get(`/api.php?amount=${nquest}`);
      setQuestions(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  function saveData() {
    localStorage.setItem('myQuestionsAndAnswers', JSON.stringify(temp));
    localStorage.setItem('myCorrectAnswers', JSON.stringify(correct));
    localStorage.setItem('questionsRequired', JSON.stringify(nquest));
  }

  function handleclick(question, correctQ, answerQ, classN, divL) {
    const sendStorage = new Array(0);
    sendStorage.push(question);
    sendStorage.push(correctQ);
    sendStorage.push(answerQ);
    const element = document.getElementById(classN);
    const elementT = document.getElementById(divL);
    if (correctQ === answerQ) {
      setCorrect(correct + 1);
    }
    elementT.style.visibility = 'visible';
    elementT.style.display = 'show';
    element.setAttribute('disabled', 'true');
    storageData.push(sendStorage);
    setTemp(storageData);
  }

  function inputAlternatives(question, n, type) {
    const qtsn = [question.correct_answer, question.incorrect_answers[0]];
    if (type !== 'boolean') {
      qtsn.push(question.incorrect_answers[1]);
      qtsn.push(question.incorrect_answers[2]);
    }

    return (
      <div>
        <RadioGroup
          onChange={(e) => {
            setSAnswer(e.target.value);
          }}
        >
          {qtsn
            ? qtsn.map((valuesS) => (
                <MyFormControlLabel
                  value={valuesS}
                  label={valuesS}
                  control={<Radio />}
                />
              ))
            : null}
        </RadioGroup>
        <Button
          variant="contained"
          id={`radio${n}`}
          onClick={() =>
            handleclick(
              question.question,
              question.correct_answer,
              sAnswer,
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
                <p>{inputAlternatives(question, n, question.type)}</p>
              </div>
            ))
          : null}
      </QuestionContainer>
      <Line />
      <Center>
        <Button
          variant="outlined"
          color="secondary"
          href="/results"
          onClick={() => saveData()}
        >
          Finish
        </Button>
      </Center>
      <MyP>{`Correct questions: ${correct} of ${nquest}`}</MyP>
    </Container>
  );
}
