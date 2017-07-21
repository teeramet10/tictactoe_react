import React, { Component } from 'react';
import './App.css';
import './';

function checkTicTacToe(value){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let check=false;
    console.log(value);
    for (var i= 0; i < lines.length; i++) {
        if((value[lines[i][0]]=='x' && value[lines[i][1]]=='x' && value[lines[i][2]]=='x')||
            (value[lines[i][0]]=='o' && value[lines[i][1]]=='o' && value[lines[i][2]]=='o')){
            check =true
            
        }
    }
    // console.log(check? "true" :"false");
    return check;
}
class Game extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            value: Array(9).fill(null),
            winner:false,
            turn:true
            
        }

        this.changeValue=this.changeValue.bind(this);
    }

    changeValue(i){
        const value = this.state.value.slice();
        
        if(!this.state.winner){
            if(value[i]==null){
                if(this.state.turn){
                    value[i]='x'
                    this.setState({value:value ,turn: false })
                    
                }else{
                     value[i]='o'
                     this.setState({value:value ,turn: true })
                 }
            }
        }

        if(checkTicTacToe(value)){
            this.state.winner = true;
    
        }
        
    }

    newGame=()=>{
        this.setState({ value: Array(9).fill(null),turn:true,winner:false})
    }

    render() {
    
        return (
            <div>
             <Board changeValue={this.changeValue} value={this.state.value} />
                <div className="stateGame">
                    <a href="#" onClick={this.newGame}>Newgame</a>
                    <p>{!this.state.winner ? this.state.turn ? 'Turn X':'Turn O' : !this.state.turn?'X Win':'O Win' }</p>
                </div>
            </div>
        )
    }
}

class Board extends Component{
    constructor(props){
        super(props);
       
    }
    
    renderSquare(value){
        return (<Square  v={value} value={this.props.value[value]}
            eventChangeValue={()=>this.props.changeValue(value)}/>)
    }

    render(){

        const board=[]
        let value=0;
   
            for (var index = 0; index < 3; index++) {
                board.push(
                <div className="displayboard">
                    {this.renderSquare(value++)}
                    {this.renderSquare(value++)}
                    {this.renderSquare(value++)}
                </div>
                );  
            }   

        return(
      
            <div className="board">
             {board}
            </div>

        )
    }
}

class Square extends Component {
    render() {
  
        return (
            <button className="square" onClick={this.props.eventChangeValue}>{this.props.value}</button>
        )
    }
}


export default Game;