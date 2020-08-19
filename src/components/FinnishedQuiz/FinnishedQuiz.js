import React from 'react'
import classes from './FinnishedQuiz.module.css'
import Button from '../UI/Button/Button'

const FinnishedQuiz = (props) => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total 
    }, 0)

    return(
        <div className={classes.FinnishedQuiz}>
            <ul>
                { 
                props.quize.map((quizeItem, index) => {

                    const cls = [
                        'fa',
                        props.results[quizeItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizeItem.id]]
                    ];

                    return(
                        <li
                        key={index}
                        >
                            <strong>{ index + 1 }</strong>.&nbsp;
                            { quizeItem.question }
                            <i className={cls.join(' ')} />
                        </li>
                    )
                }) 
                }
            </ul>
            <p>Правильно {successCount} из {props.quize.length}</p>
            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Button type="success">Перейти в список тестов</Button>
            </div>
        </div>
    )
}

export default FinnishedQuiz