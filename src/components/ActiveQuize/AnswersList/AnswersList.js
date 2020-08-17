import React from 'react'
import classes from './AnswersList.module.css'
import AnswersItem from './AnswerItem/AnswerItem'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = (props) => {
    return(
        <ul className={classes.AnswersList}>
            { props.answers.map((answer, index) => {
                return(
                    <AnswerItem 
                    key={index}
                    answer={answer}
                    />
                )
            }) }
        </ul>
    )
}

export default AnswersList