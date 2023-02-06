import React from 'react'
import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'
import ResultBanner from '../ResultBanner/ResultBanner'

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { sample } from '../../utils'
import { WORDS } from '../../data'

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS))
  console.info({ answer })
  const [guesses, setGuesses] = React.useState([])
  const [finalResult, setFinalResult] = React.useState('running')

  function handleSaveGuess(tentativeGuess) {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      window.alert('Maximum number of guesses reached!')
      return
    }

    const nextGuesses = [...guesses, tentativeGuess]
    setGuesses(nextGuesses)

    if (tentativeGuess.toUpperCase() === answer) {
      setFinalResult('won')
    } else if (finalResult === 'running' && nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setFinalResult('lost')
    }
  }

  function handleResetGame() {
    setGuesses([])
    setFinalResult('running')
    setAnswer(sample(WORDS))
  }

  return (
    <>
      {finalResult !== 'running' && (
        <ResultBanner
          finalResult={finalResult}
          numOfGuesses={guesses.length}
          answer={answer}
          handleResetGame={handleResetGame}
        />
      )}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSaveGuess={handleSaveGuess} finalResult={finalResult} />
    </>
  )
}

export default Game
