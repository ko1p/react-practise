import React from 'react'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'

export default class Auth extends React.Component {

    loginHandler = () => {

    }
    
    registerHandler = () => {
    
    }
    
    submitHandler = (event) => {
        event.preventDefault()
    }

    render() {
        return(
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form className={classes.AuthForm} onClick={this.submitHandler}>
                        <input/>
                        <input/>
                        <Button type="success" onClick={this.loginHandler}>Войти</Button>
                        <Button type="primary" onClick={this.registerHandler}>Зарегистрироваться</Button>
                    </form>
                </div>
            </div>
        )
    }
}