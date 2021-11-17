import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Cancel from '@mui/icons-material/Cancel';
import PlayArrow from '@mui/icons-material/PlayArrow';

import { Container } from '../../styles/GlobalStyles';
import { Title, MyP, MyDiv } from './styled';

export default function Question() {
  const urlLocal = window.location.href;
  const [, , , , questions] = urlLocal.split('/');
  return (
    <Container>
      <Title>
        <h1>
          Brain<small>test</small>
        </h1>
      </Title>
      <MyP>{`You selected ${questions} questions to answer!`}</MyP>
      <MyP> Do you wish to continue?</MyP>
      <MyDiv>
        <ButtonGroup disableElevation variant="contained">
          <Button endIcon={<PlayArrow />} color="info">
            {' '}
            Start{' '}
          </Button>
          <Button endIcon={<Cancel />} color="error" href="/">
            {' '}
            Cancel{' '}
          </Button>
        </ButtonGroup>
      </MyDiv>
    </Container>
  );
}
