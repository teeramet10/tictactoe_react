import * as types from '../constant/game.const'
export const changeGameValue = (value) => ({
    type: types.CHANGEGAMEVALUE,
    payload: {
        value
    }
})

export const isWinner = (status) => ({
    type: types.ISWINNER,
    payload: {
        status
    }
})

export const nextTurn = (status) => ({
    type: types.NEXTTURN,
    payload: {
        status
    }
})