import {combineReducers} from 'redux'
import quizeReducer from './quiz'
import createReducer from "./create";

export default combineReducers({
    quiz: quizeReducer,
    create: createReducer
})