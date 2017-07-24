import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, Link, HashRouter, BrowserRouter,Switch } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'
import './Component/index.css'
import Login from './Component/Login'
import App from './Component/App'
import First from './Component/First'
import Game from './Component/TicTacToe'
import NotFound from './Component/NotFound'
import FilterableProductTable from './Component/Test'
// import {First,Game,FilterableProductTable,NotFound} from './Component'
import registerServiceWorker from './registerServiceWorker';

const Root = () =>
    <BrowserRouter>
       <App/>
    </BrowserRouter>


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
