import React from 'react'
import classes from './ActiveQuize.module.css'

const ActiveQuiz = (props) => {
    return(
        <div className={classes.ActiveQuize}>
            <p className={classes.Question}>
                <span>
                    <strong>2.</strong>&nbsp;
                    Как дела?
                </span>
                <small>
                    4 из 12
                </small>
            </p>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )
}

export default ActiveQuiz