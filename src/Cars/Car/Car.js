import React from 'react'
import './Car.css'


const Car = props => {
  return (
    <div className={'Car'}>
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
    </div>
  )
}

export default Car