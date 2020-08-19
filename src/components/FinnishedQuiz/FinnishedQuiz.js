import React from 'react'
import classes from './FinnishedQuiz.module.css'

const FinnishedQuiz = (props) => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total 
    }, 0)
    console.log(successCount)

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
            <p>Правильно 4 из {props.question.length}</p>
            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinnishedQuiz