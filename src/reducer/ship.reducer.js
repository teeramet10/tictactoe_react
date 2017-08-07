import * as types from '../constant/ship.const'

const initialState = {
    items: [],
    offset: 1,
    totalrecord: 1,
    filter: {
        shipname: '',
        shipregisterno: '',
        shipownername: ''
    }
}

const ShipReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTERTEXTSHIP: {

            state = {
                ...state,
                filter: action.payload.text,
            }
            return state

        }
        case types.SETITEM: {
            state = {
                ...state,
                items: action.payload.data
            }
            return state
        }

        case types.SETRECORD: {
            state = {
                ...state,
                totalrecord: action.payload.value
            }
            return state
        }

        case types.CHANGEOFFSET: {
            state = {
                ...state,
                offset: action.payload.value
            }
            return state
        }


        default: return state

    }
}

export default ShipReducer