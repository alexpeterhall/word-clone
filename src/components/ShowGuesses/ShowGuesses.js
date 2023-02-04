import React from 'react'

function ShowGuesses({ guesses }) {
  return (
    <div className='guess-results'>
      {/*Index as key should be safe here*/}
      {guesses.map((guess, index) => {
        return (
          <p key={index} className='guess'>
            {guess}
          </p>
        )
      })}
    </div>
  )
}

export default ShowGuesses
