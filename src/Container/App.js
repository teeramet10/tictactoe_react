import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import First from '../Component/First'
import Game from '../Component/TicTacToe'
import FilterableProductTable from '../Component/Test'
import Login from '../Component/Login'
import PageShipList from '../Component/ShipList'
import Table from '../Component/ShowData'
import StoreState from '../Component/StoreState'

import './App.css';
import '../'



function Main() {
  return (<Switch>
    <Route exact path="/" component={Login} />
    <Route path="/tictactoe" component={Game} />
    <Route path="/first" component={First} />
    <Route path="/test" component={FilterableProductTable} />
    <Route path="/showdata" component={Table} />
    <Route path ="/shiplist" component={PageShipList}/>
    <Route path="/redux" component ={StoreState}/>
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
            <li><Link className={styles} to="/showdata">ShowData</Link></li>
            <li><Link className={styles} to="/shiplist">ShipList</Link></li>
            <li><Link className={styles} to="/redux">StoreState</Link></li>
          </ul>
        </div>
        <div className="content">
          <Main />
        </div>
      </div>


    );
  }
}



export default App;
