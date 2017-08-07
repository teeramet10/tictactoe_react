import * as types from '../constant/game.const'


const initailState = {
    value: Array(9).fill(null),
    winner: false,
    turn: true
}


const GameReducer = (state = initailState, action) => {
    switch (action.type) {
        case types.CHANGEGAMEVALUE: {
            state = {
                ...state,
                value:action.payload.value
            }
            return state
        }

        case types.ISWINNER: {
            state = {
                ...state,
                winner:action.payload.status
            }
            return state
        }

        case types.NEXTTURN: {
            state = {
                ...state,
                turn:action.payload.status
            }
            return state
        }

        default:
            return state
    }
}


export default GameReducer