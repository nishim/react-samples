import React from 'react';
import ReactDOM from 'react-dom';
import { Board } from './components/board';

ReactDOM.render(
  <Board size="3" />,
  document.getElementById('tic-tac-toe')
);
