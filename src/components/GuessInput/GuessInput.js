import React from 'react'

function GuessInput({ handleSaveGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (tentativeGuess.length < 5) {
      window.alert('Guess must be exactly 5 characters!')
      return
    }
    console.log({ tentativeGuess })
    handleSaveGuess(tentativeGuess)
    setTentativeGuess('')
  }

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        handleSubmit(event)
      }}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        required
        pattern='[a-zA-Z]{5}'
        minLength={5}
        maxLength={5}
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default GuessInput
