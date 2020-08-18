import React from 'react'
import classes from './FinnishedQuiz.module.css'

const FinnishedQuiz = (props) => {
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

                {/* <li>
                    <strong>1.</strong>
                    How are u?
                    <i className={'fa fa-times ' + classes.error} />
                </li>
                <li>
                    <strong>2.</strong>
                    How are u?
                    <i className={'fa fa-check ' + classes.success} />
                </li> */}
            </ul>
            <p>Правильно 4 из 10</p>
            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinnishedQuiz