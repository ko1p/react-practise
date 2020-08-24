import React from 'react'
import classes from './QuizeList.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

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

    componentDidMount() {
        axios.get('https://reat-quiz-ab324.firebaseio.com/quiz.json')
            .then((res) => console.log(res))
        // fetch('https://reat-quiz-ab324.firebaseio.com/quiz.json')
        //     .then((res) => console.log(res))
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