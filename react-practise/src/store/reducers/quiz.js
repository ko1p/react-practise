// import { fetchQuizes } from '../actions/quiz'
import {
    FETCH_QUIZES_START, 
    FETCH_QUIZES_SUCCESS, 
    FETCH_QUIZES_ERROR, 
    FETCH_QUIZ_SUCCESS,
    QUIZ_SET_STATE,
    FINISH_QUIZ,
    QUIZE_NEXT_QUESTION,
    RETRY_QUIZ
} from '../actions/actionTypes'

const initialState = {
    quizes: [],
    loading: false,
    error: null,
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: null
}

const quizeReducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_QUIZES_START: 
            return {
                ...state, loading: true
            }
        case FETCH_QUIZES_SUCCESS: 
            return {
                ...state, loading: false, quizes: action.quizes
            }
        case FETCH_QUIZES_ERROR: 
            return {
                ...state, loading: false, error: action.error
            }
        case FETCH_QUIZ_SUCCESS: {
            return {
                ...state, loading: false, quiz: action.quiz
            }
        }
        case QUIZ_SET_STATE: {
            return {
                ...state, answerState: action.answerState, results: action.results
            }
        }
        case FINISH_QUIZ: {
            return {
                ...state, isFinished: true
            }
        }
        case QUIZE_NEXT_QUESTION: {
            return {
                ...state, activeQuestion: action.activeQuestion, answerState: null
            }
        }
        case RETRY_QUIZ: {
            return {
                ...state,
                activeQuestion: 0,
                answerState: null,
                isFinished: false,
                results: {}
            }
        }
        default: {
            return state
        }
    }

}

export default quizeReducer