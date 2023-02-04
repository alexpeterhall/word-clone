import React from 'react'
import { checkGuess } from '../../game-helpers'

function Guess({ guess, answer }) {
  const currentResult = checkGuess(guess, answer)

  let guessRow = ''
  if (guess.length === 5) {
    guessRow = (
      <p className='guess'>
        {currentResult.map(({ letter, status }, index) => {
          return (
            <span className={`cell ${status}`} key={index}>
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
