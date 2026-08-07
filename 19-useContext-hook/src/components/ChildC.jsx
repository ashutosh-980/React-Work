import React from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'

const ChildC = () => {
    const koiTohHai = useContext(UserContext);
  return (
    <div>
        <h1>Name is :- {koiTohHai.name}</h1>
        <p>Age of {koiTohHai.name} is {koiTohHai.age} .</p>
    </div>
  )
}

export default ChildC