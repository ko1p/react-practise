import {combineReducers} from 'redux'
import quizeReducer from './quiz'
import createReducer from "./create";
import authReducer from "./auth";

export default combineReducers({
    quiz: quizeReducer,
    create: createReducer,
    auth: authReducer
})