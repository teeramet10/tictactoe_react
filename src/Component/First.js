import React, { Component } from 'react';
import '../'

class Card extends Component{
  render(){
    return(
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


  constructor(props){
    super(props);
   this.state ={name:'',
      job:'',
      keyword:'',
      data:[
        {
           "name" :"yumi",
        "job" :"programmer"
        },
       {
        "name":"nami",
        "job" :"navigator"
       }
      ]
   }
   
  
  }

  componentDidMount(){
      this.timerID=setInterval(
        () =>this.tick(),1000
      );
       console.log("lifecycle","componentDidmount");
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
    console.log("lifecycle","componentWillUnmount");
  }

  tick(){
    this.setState({
      date:new Date()
    });
  }
  //ES6
  handleClick=()=>{
    alert("aa");
  }
  //ES5
  showAlert(){
    alert("aa");
  }

  UserList(users){
   
    const list  =users.map((user)=>
      <Card key={user.name} value={user.name} job={user.job} />
    );

    return  list;
  }

  // NumberList(props){
  //   const numbers=[1,2,3,4,5];
  //   const listItems=numbers.map((number)=>
  //     <ListItem key={number.toString()} value={number}/>
  //   );

  //   return <ul>{listItems}</ul>;
  // }

    handleChangeName=(e)=>{
      this.setState({name:e.target.value})
    }

    handleSearch=(e)=>{
      this.setState({keyword:e.target.value})
    
  
    }

    handleChangeJob=(e)=>{
      this.setState({job:e.target.value})
    }

    showAlertState=()=>{
      alert(this.state.name);
    }


    inputData=()=>{
      if(this.state.name !=='' && this.state.job!==''){
        this.state.data.push({
          "name": this.state.name,
          "job" :this.state.job
        });
      }
        this.state.name='';
        this.state.job='';
    }
   
    search= (a)=> {return a.name.indexOf(this.state.keyword)>=0}

  render() {
    
    // const random =Math.random();
    // let result;

    // if(random>0.5){
    //   result=(<h1>more than 0.5</h1>)
    // }else{
    //   result=(<h1>less than 0.5</h1>)
    // }
    const key =this.state.keyword;
    let data =this.state.data;
    if(key!=''){
      data =data.filter(this.search)
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
        <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
        <input type="text" value={this.state.job} onChange={this.handleChangeJob}/>
        <button onClick ={this.inputData}>Click </button>
        <input type="text" value={this.state.keyword} onChange={this.handleSearch}/>
  
        <p>
        {this.UserList(data)}
        
   
        </p>
      </div>
    );
  }
}

export default First;
