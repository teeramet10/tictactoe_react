import * as types from '../constant/test.const'

const initialState = {
    filter : '',
    inStock:false

}
const TestReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTERTEXT: {

            state = {...state,
                filter: action.payload.text,
            }
            return state

        }
        case types.INSTOCK: {
            state = {
                ...state,
                inStock: action.payload.status
            }
            return state
        }
        default: return state

    }
}

export default TestReducer