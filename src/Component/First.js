import React, { Component } from 'react';
import '../'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as action from '../action/first.action'

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <h5>{this.props.job}</h5>
      </div>

    );
  }
}

class First extends Component {

  // constructor(props){
  //     super(props);
  //     this.state={date:new Date()};
  // }


  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
    console.log("lifecycle", "componentDidmount");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("lifecycle", "componentWillUnmount");
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  //ES6
  handleClick = () => {
    alert("aa");
  }
  //ES5
  showAlert() {
    alert("aa");
  }

  UserList(users) {

    const list = users.map((user) =>
      <Card key={user.name} value={user.name} job={user.job} />
    );

    return list;
  }

  // NumberList(props){
  //   const numbers=[1,2,3,4,5];
  //   const listItems=numbers.map((number)=>
  //     <ListItem key={number.toString()} value={number}/>
  //   );

  //   return <ul>{listItems}</ul>;
  // }

  handleChangeName = (e) => {
    // this.setState({ name: e.target.value })
    this.props.action.changeName(e.target.value)
  }

  handleSearch = (e) => {
    // this.setState({ keyword: e.target.value })
    this.props.action.onSearch(e.target.value)
  }

  handleChangeJob = (e) => {
    // this.setState({ job: e.target.value })
    this.props.action.changeJob(e.target.value)
  }

  showAlertState = () => {
    alert(this.state.name);
  }


  inputData = () => {
    if (this.props.first.name !== '' && this.props.first.job !== '') {
      this.props.first.data.push({
        "name": this.props.first.name,
        "job": this.props.first.job
      });
    }
    this.props.action.changeName('')
    this.props.action.changeJob('')

  }

  search = (a) => { return a.name.indexOf(this.props.first.keyword) >= 0 }

  render() {

    // const random =Math.random();
    // let result;

    // if(random>0.5){
    //   result=(<h1>more than 0.5</h1>)
    // }else{
    //   result=(<h1>less than 0.5</h1>)
    // }
    const first =this.props.first
    const key = first.keyword;
    let data = first.data;
    if (key != '') {
      data = data.filter(this.search)
    }


    return (

      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     {this.state.date.toLocaleTimeString()}
      //   </p>
      //   {
      //     random>0.5 ? (<h1>more than 0.5</h1>) :(<h1>less than 0.5</h1>) 
      //   }
      //   <button onClick={this.showAlert}>Click</button>


      <div className="App">
        <input type="text" value={first.name} onChange={this.handleChangeName} />
        <input type="text" value={first.job} onChange={this.handleChangeJob} />
        <button onClick={this.inputData}>Click </button>
        <input type="text" value={first.keyword} onChange={this.handleSearch} />

        <p>
          {this.UserList(data)}


        </p>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    first: state.first
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action:bindActionCreators(action,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(First);
