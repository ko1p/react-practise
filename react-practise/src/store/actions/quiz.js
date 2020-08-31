import axios from '../../axios/axios-quize'
import {
    FETCH_QUIZES_START, 
    FETCH_QUIZES_SUCCESS, 
    FETCH_QUIZES_ERROR, 
    FETCH_QUIZ_SUCCESS, 
    FINISH_QUIZ,
    QUIZE_NEXT_QUESTION,
    RETRY_QUIZ
} from '../actions/actionTypes'

export function fetchQuizes() {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const response = await axios.get('/quizes.json')

            const quizes = [];
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })
            dispatch(fetchQuizesSuccess(quizes))
        } catch (e) {
            dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchQuiz(quizeId) {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const response = await axios.get(`/quizes/${quizeId}.json`)
            const quiz = response.data
      
            dispatch(fetchQuizSuccess(quiz))
          } catch (error) {
            dispatch(fetchQuizesError(error))
          }
    }
}

export function fetchQuizesStart() {
    return {
        type: FETCH_QUIZES_START 
    }
}

export function fetchQuizesSuccess(quizes) {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }
}

export function fetchQuizSuccess(quiz) {
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz
    }
}

export function fetchQuizesError(e) {
    return {
        type: FETCH_QUIZES_ERROR,
        error: e
    }
}

export function quizeAnswerClick(answerId) {    
    return (dispatch, getState) => {
        const state = getState().quiz

        if (state.answerState) {
            const key = Object.keys(state.answerState)[0]
            if (state.answerState[key] === 'success') {
              return
            }
          }
      
          const question = state.quiz[state.activeQuestion]
          const results = state.results
      
          if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
              results[question.id] = 'success'
            }

            dispatch(quizeSetState({[answerId]: 'success'}, results))      
      
            const timeout = window.setTimeout(() => {
              if (isQuizFinished(state)) {
                  dispatch(finishQuiz())

                // this.setState({
                //   isFinished: true
                // })
              } else {
                  dispatch(quizNextQuestion(state.activeQuestion + 1))

                // this.setState({
                //   activeQuestion: this.state.activeQuestion + 1,
                //   answerState: null
                // })
              }
              window.clearTimeout(timeout)
            }, 1000)
          } else {
            results[question.id] = 'error'

            dispatch(quizeSetState({[answerId]: 'error'}, results))      
          }
    }    
}

export function quizeSetState(answerState, results) {
    return {
        type: 'QUIZ_SET_STATE',
        answerState, results
    }
}

export function finishQuiz() {
    return {
        type: FINISH_QUIZ
    }
}

export function quizNextQuestion(activeQuestion) {
    return {
        type: QUIZE_NEXT_QUESTION,
        activeQuestion
    } 
}

function isQuizFinished(state) {
    return state.activeQuestion + 1 === state.quiz.length    
}

export function retryQuiz() {
    return {
        type: RETRY_QUIZ
    }    
}