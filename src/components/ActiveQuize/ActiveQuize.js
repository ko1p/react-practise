import React from 'react'
import classes from './ActiveQuize.module.css'
import AnswerList from './AnswersList/AnswersList'
import AnswersList from './AnswersList/AnswersList'


const ActiveQuiz = (props) => {
    return(
        <div className={classes.ActiveQuize}>
            <p className={classes.Question}>
                <span>
                    <strong>{ props.answerNumber }.</strong>&nbsp;
                    { props.question }
                </span>
                <small>
                    { props.answerNumber } из { props.quizLength }
                </small>
            </p>

            <AnswersList 
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}
            />
        </div>
    )
}

export default ActiveQuiz