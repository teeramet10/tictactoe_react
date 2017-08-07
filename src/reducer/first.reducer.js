import * as types from '../constant/first.const'

const initialState = {

    name: '',
    job: '',
    keyword: '',
    data: [
        {
            "name": "yumi",
            "job": "programmer"
        },
        {
            "name": "nami",
            "job": "navigator"
        }
    ]

}

const FirstReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGENAME: {
            state = {
                ...state,
                name: action.payload.name
            }
            return state
        }

        case types.CHANGEJOB: {
            state = {
                ...state,
                job: action.payload.job
            }
            return state
        }
        case types.ONSEARCH: {
            state = {
                ...state,
                keyword: action.payload.text
            }
            return state
        }
        default :return state


    }
}

export default FirstReducer