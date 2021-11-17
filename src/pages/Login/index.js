import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as example from '../../store/modules/example/actions';

export default function getLogin() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(example.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title isRed={false}>
        <h1>
          Login <small>Oie</small>
        </h1>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
