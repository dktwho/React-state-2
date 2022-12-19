

import React from 'react'
import { useState } from 'react'
import generateNum from '../utils/generateRandomNum'

const RandomNumber = ({maxNum}) => {
  const [num, setNum] = useState(generateNum(maxNum))


  function changeRandomNum() {
    setNum(generateNum(maxNum))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={changeRandomNum}>generate random num</button>
    </div>
  )
}

export default RandomNumber
