import React from 'react';
// import Button from '@mui/material/Button';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

import Done from '@mui/icons-material/Done';

import { Container } from '../../styles/GlobalStyles';
import { Title, MyP } from './styled';

export default function Home() {
  const [questions, setQuestions] = React.useState('');

  const handleChange = (event) => {
    setQuestions(event.target.value);
  };

  return (
    <Container>
      <Title>
        <h1>
          Brain<small>test</small>
        </h1>
      </Title>
      <MyP>Select how many questions you want answer</MyP>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="questions-label">Number of questions</InputLabel>
        <Select
          labelId="questions-label"
          id="questions-selected"
          value={questions}
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>15</MenuItem>
          <MenuItem value={12}>20</MenuItem>
          <MenuItem value={13}>25</MenuItem>
        </Select>
      </FormControl>
      <div />
      <Button
        endIcon={<Done />}
        variant="contained"
        color="info"
        size="large"
        href={`/confirmation/${questions}`}
      >
        {' '}
        Confirm{' '}
      </Button>
    </Container>
  );
}
