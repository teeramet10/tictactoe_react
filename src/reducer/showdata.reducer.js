import * as types from '../constant/showdata.const'

const initialState = {
    student: []

}
const StudentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SETSTUDENT: {

            state = {
                ...state,
                student: action.payload.data,
            }
            return state

        }

        default: return state

    }
}

export default StudentReducer