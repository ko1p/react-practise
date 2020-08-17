import React from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuize/ActiveQuize'

class Quiz extends React.Component {

    state = {
        quiz: []
    }

    render() {
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz />
                </div>
            </div>
        )
    }
}

export default Quiz