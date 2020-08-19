import React from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuize/ActiveQuize'
import FinnishedQuiz from '../../components/FinnishedQuiz/FinnishedQuiz'

class Quiz extends React.Component {

    state = {
        results: {},
        activeQuestion: 0,
        isFinnished: false,
        answerState: null,
        quiz: [
            {
                question: 'Какого цвета небо?',
                id: 1,
                rightAnswerId: 2,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Зеленый', id: 4}
                ]
            },
            {
                question: 'В каком году основали Санкт-Петербург?',
                id: 2,
                rightAnswerId: 3,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1705', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4}
                ]
            }      
        ]
    }

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results
  
        if (question.rightAnswerId === answerId) {

            if (!results[question.id]) {
                results[question.id] = 'success'

            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizeFinnished()) {
                    this.setState({isFinnished: true})
                } else {
                    this.setState({activeQuestion: this.state.activeQuestion + 1})
                }
                this.setState({
                    answerState: null
                })
                window.clearTimeout(timeout)
            }, 1000)
            
        } else {
            results[question.id] = 'error'
            this.setState({ 
                answerState: {[answerId]: 'error'},
                results
            })
        }

    }

    isQuizeFinnished = () => {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinnished: false,
            results: {}
        })
    }

    render() {
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinnished 
                        ? <FinnishedQuiz 
                        results={this.state.results}
                        quize={this.state.quiz}
                        onRetry={this.retryHandler}
                        />
                        : <ActiveQuiz 
                        question={this.state.quiz[this.state.activeQuestion].question}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                    }                    
                </div>
            </div>
        )
    }
}

export default Quiz