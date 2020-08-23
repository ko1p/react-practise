import React from 'react'
import classes from './QuizCreator.module.css'
import Button from '../../components/UI/Button/Button'

export default class QuizCreator extends React.Component {

    onSubmitHandler(event) {
        event.preventDefault()
    }

    onSubmitHandler = () => {

    }

    createQuizeHandler = () => {

    }

    render() {
        return(
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>
                    <form onSubmit={this.onSubmitHandler}>

                        <input/>
                        <hr/>
                        <input/>
                        <input/>
                        <input/>
                        <input/>
                        
                        <select></select>

                        <Button
                        type='primary'
                        onClick={this.addQuestionHandler}
                        >
                            Добавить вопрос
                        </Button>

                        <Button
                        type='success'
                        onClick={this.createQuizeHandler}
                        >
                            Создать тест
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}