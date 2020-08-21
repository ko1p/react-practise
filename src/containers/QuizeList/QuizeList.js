import React from 'react'
import classes from './QuizeList.module.css'
import { NavLink } from 'react-router-dom'

export default class QuizList extends React.Component {

    renderQuizes = () => {
        return(
            [1, 2, 3].map((quiz, index) => {
                return(
                <li key={index}>
                    <NavLink to={'/quiz/' + quiz}>Тест {quiz}</NavLink>
                </li>
                )
            })
        )
    }

    render() {
        return(
            <div className={classes.QuizList}>
                <div>
                    <h1>Список текстов</h1>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        )
    }
}