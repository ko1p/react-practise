import {CREATE_QUIZ_QUESTION, RESET_QUIZE_CREATION} from "../actions/actionTypes";

const initialState = {
    quiz: []
}

export default function createReducer(state = initialState, action) {
    switch(action.type) {
        case CREATE_QUIZ_QUESTION: {
            return {
                ...state, quiz: [...state.quiz, action.item]
            }
        }
        case RESET_QUIZE_CREATION: {
            return {
                ...state, quiz: []
            }
        }
        default: {
            return state
        }
    }
}