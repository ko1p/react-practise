import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    const cls = [classes.Input]
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`

    const isInvalid = ({valid, touched, shouldValidate}) => {
        return !valid && touched && shouldValidate
    }

    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }


    return(
        <div className={cls.join(' ')}>
            <label 
            htmlFor={htmlFor}
            >
                {props.label}
            </label>
            <input 
            type={inputType} 
            id={htmlFor}
            value={props.value}
            onChange={props.onChange}
            />
            { isInvalid(props) ? <span>{props.errorMessage || 'Введите корректные данные'}</span> : null }
        </div>
    )
}

export default Input