import React, { Component } from 'react';
import { Route, Router, Link, HashRouter ,Switch} from 'react-router-dom'
// import {First,Game,FilterableProductTable,NotFound} from './Component'
import First from './First'
import Game from './TicTacToe'
import NotFound from './NotFound'
import FilterableProductTable from './Test'
import Login from './Login'

import logo from '../logo.svg';
import './App.css';
import '../'



function Main(){
   return (<Switch>
            <Route exact path="/" component={Login} />
            <Route path="/tictactoe" component={Game} />
            <Route path="/first" component={First} />
            <Route path="/test" component={FilterableProductTable} />
            <Route  component={NotFound} />
    </Switch>)
 }

class App extends Component {

  constructor(props) {
    super();
  }

  render() {

    const styles = 'link';
    return (

      <div className="App">
        <div className="Menu">
          <ul>
            <li><Link className={styles} Link to="/">Home</Link></li>
            <li><Link className={styles} to="/tictactoe">TicTacToe</Link></li>
            <li><Link className={styles} to="/first">First</Link></li>
            <li><Link className={styles} to="/test">Test</Link></li>
          </ul>
        </div>
        <div className="content">
          <Main/>
        </div>
      </div>


    );
  }
}

 

export default App;
