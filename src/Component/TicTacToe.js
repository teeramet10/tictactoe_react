import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as action from '../action/game.action'
import '../';

function checkTicTacToe(value) {
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
    let check = false;
    console.log(value);
    for (var i = 0; i < lines.length; i++) {
        if ((value[lines[i][0]] === 'x' && value[lines[i][1]] === 'x' && value[lines[i][2]] === 'x') ||
            (value[lines[i][0]] === 'o' && value[lines[i][1]] === 'o' && value[lines[i][2]] === 'o')) {
            check = true

        }
    }
    // console.log(check? "true" :"false");
    return check;
}
class Game extends Component {

    constructor(props) {
        super(props)
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(i) {
        const actions = this.props.action
        const game = this.props.game
        const value = game.value.slice();

        if (!game.winner) {
            if (value[i] == null) {
                if (game.turn) {
                    value[i] = 'x'
                    actions.changeGameValue(value)
                    actions.nextTurn(false)

                } else {
                    value[i] = 'o'
                    // this.setState({ value: value, turn: true })
                    actions.changeGameValue(value)
                    actions.nextTurn(true)
                }
            }
        }

        if (checkTicTacToe(value)) {
            actions.isWinner(true)

        }

    }

    newGame = () => {
        const actions = this.props.action
        actions.changeGameValue(Array(9).fill(null))
        actions.isWinner(false)
        actions.nextTurn(false)
    }

    render() {
        const game =this.props.game
        return (
            <div>
                <Board changeValue={this.changeValue} value={game.value} />
                <div className="stateGame">
                    <a href="#" onClick={this.newGame}>Newgame</a>
                    <p>{!game.winner ? game.turn ? 'Turn X' : 'Turn O' : !game.turn ? 'X Win' : 'O Win'}</p>
                </div>
            </div>
        )
    }
}

class Board extends Component {
    constructor(props) {
        super(props);

    }

    renderSquare(value) {
        return (<Square v={value} value={this.props.value[value]}
            eventChangeValue={() => this.props.changeValue(value)} />)
    }

    render() {

        const board = []
        let value = 0;

        for (var index = 0; index < 3; index++) {
            board.push(
                <div className="displayboard">
                    {this.renderSquare(value++)}
                    {this.renderSquare(value++)}
                    {this.renderSquare(value++)}
                </div>
            );
        }

        return (

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


const mapStateToProps = (state, ownProps) => {
    return {
        game: state.game
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        action: bindActionCreators(action, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);