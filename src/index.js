import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import TicTacToe from './TicTacToe';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TicTacToe />, document.getElementById('root'));
registerServiceWorker();
