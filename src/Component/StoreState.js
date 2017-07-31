import { createStore,combineReducers } from 'redux'
import React,{Component} from 'react'

const Payrollreducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            state += action.payload
            return state
            break
        case "SUBTRACT":
            state -= action.payload
            return state
            break
        default:
            return state
    }
}


const Redux=()=>{
    const store = createStore(Payrollreducer, 15000)
    store.subscribe(() => {
        console.log(store.getState())
    })
    store.dispatch({
        type: "SUBTRACT",
        payload: 500
    })

    store.dispatch({
        type:"ADD",
        payload:1000
    })
    return store.getState()
}

class StoreState extends Component{


    render(){
        const store =Redux()
        return(
            <h1>{store}</h1>
        )
    }
}

export default StoreState
