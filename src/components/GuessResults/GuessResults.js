import React from 'react'
import Guess from '../Guess/Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessResults({ guesses }) {
  const resultGrid = [...guesses]
  if (resultGrid.length < NUM_OF_GUESSES_ALLOWED) {
    for (let i = resultGrid.length; i < NUM_OF_GUESSES_ALLOWED; i++) {
      resultGrid.push('')
    }
  }

  return (
    <div className='guess-results'>
      {/*Index as key should be safe here*/}
      {resultGrid.map((guess, index) => {
        return <Guess key={index} guess={guess} />
      })}
    </div>
  )
}

export default GuessResults
