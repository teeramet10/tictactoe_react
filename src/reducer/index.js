
import {combineReducers} from 'redux'
import LoginReducer from './login.reducer'
import StudentReducer from './showdata.reducer'
import TestReducer from './test.reducer'
import ShipReducer from './ship.reducer'
import FirstReducer from './first.reducer'
import GameReducer from './game.reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer =combineReducers({
    login:LoginReducer,
    showdata:StudentReducer,
    test:TestReducer,
    ship:ShipReducer,
    first:FirstReducer,
    game:GameReducer,
    form:formReducer
})

export default rootReducer
