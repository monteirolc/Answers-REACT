import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Home from '../pages/Initial';
import Confirm from '../pages/Confirm';
import Question from '../pages/Question';
import Result from '../pages/Result';

export default function getElements() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/confirmation/:questions" component={Confirm} />
      <MyRoute exact path="/questions/:questions" component={Question} />
      <MyRoute exact path="/results" component={Result} />
    </Switch>
  );
}
