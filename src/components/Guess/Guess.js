import React from 'react'

function Guess({ value }) {
  let guessRow = ''
  if (value.length === 5) {
    guessRow = (
      <p className='guess'>
        {value.split('').map((letter, index) => {
          return (
            <span className='cell' key={index}>
              {letter}
            </span>
          )
        })}
      </p>
    )
  } else {
    guessRow = (
      <p className='guess'>
        <span className='cell'></span>
        <span className='cell'></span>
        <span className='cell'></span>
        <span className='cell'></span>
        <span className='cell'></span>
      </p>
    )
  }
  return guessRow
}

export default Guess
