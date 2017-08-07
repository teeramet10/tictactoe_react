import * as types from '../constant/login.const'

const initialState = {
    user: '',
    pass: '',
    isShowing:false

}
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGETEXT: {

            state = {...state,
                [action.payload.name]: action.payload.text,
            }
            return state

        }
        case types.CHANGESTATUS: {
            state = {
                ...state,
                isShowing: action.payload.status
            }
            return state
        }
        default: return state

    }
}

export default LoginReducer