import React from 'react'
import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])

  function saveGuess(guess) {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      window.alert('Maximum number of guesses reached!')
      return
    }
    setGuesses([...guesses, guess])
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput saveGuess={saveGuess} />
    </>
  )
}

export default Game
