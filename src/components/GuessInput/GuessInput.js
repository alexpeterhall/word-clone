import React from 'react'

function GuessInput() {
  const [guess, setGuess] = React.useState('')

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault()
        if (guess.length < 5) {
          window.alert('Guess must be exactly 5 characters!')
          return
        }
        console.log(guess)
        setGuess('')
      }}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        onChange={(event) => {
          if (guess.length === 5 && event.nativeEvent.inputType !== 'deleteContentBackward') {
            window.alert('Guess must be exactly 5 characters!')
            return
          }
          setGuess(event.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default GuessInput
