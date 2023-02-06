import React from 'react'

function Button({ clickHandler, children }) {
  return (
    <button className='button' onClick={clickHandler}>
      {children}
    </button>
  )
}

export default Button
