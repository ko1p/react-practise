import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import { fetchQuiz, quizeAnswerClick, retryQuiz } from '../../store/actions/quiz'
import Loader from '../../components/UI/Loader/Loader'
import {connect} from 'react-redux'

class Quiz extends Component {

  componentDidMount () {
    this.props.fetchQuiz(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.retryQuiz()
  }

  render() {
    return (
      
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {
            this.props.loading || !this.props.quiz
            ? <Loader />
            : this.props.isFinished
              ? <FinishedQuiz
                  results={this.props.results}
                  quiz={this.props.quiz}
                  onRetry={this.props.retryQuiz}
                />
              : <ActiveQuiz
                answers={this.props.quiz[this.props.activeQuestion].answers}
                question={this.props.quiz[this.props.activeQuestion].question}
                onAnswerClick={this.props.quizeAnswerClick}
                quizLength={this.props.quiz.length}
                answerNumber={this.props.activeQuestion + 1}
                state={this.props.answerState}
              />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.quiz.results,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading
  }
}

const mapsDispatchToProps = (dispatch) => {
  return {
    fetchQuiz: (id) => dispatch(fetchQuiz(id)),
    quizeAnswerClick: (answerId) => dispatch(quizeAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz())
  }
}

export default connect(mapStateToProps, mapsDispatchToProps)(Quiz)