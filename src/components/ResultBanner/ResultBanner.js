import React from 'react'
import Button from '../Button/Button'

function ResultBanner({ finalResult, numOfGuesses, answer, handleResetGame }) {
  if (finalResult === 'won') {
    return (
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`} </strong>.{' '}
          <Button clickHandler={handleResetGame}>Play again!</Button>
        </p>
      </div>
    )
  } else if (finalResult === 'lost') {
    return (
      <div className='sad banner'>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.{' '}
          <Button clickHandler={handleResetGame}>Play again!</Button>
        </p>
      </div>
    )
  }
}

export default ResultBanner
