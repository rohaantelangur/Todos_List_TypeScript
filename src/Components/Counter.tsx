import React, { useState } from 'react'
import Buttion from './Buttion'
import Header from './Header'

const Counter = () => {
  const [count, setcount] = useState(0)

  const handleClick =(value:number)=>{
    setcount(count+value)

  }
  return (
    <>
    <Header label='Counter' >
      <div>Children Header</div>
      </Header>
    <Header label={`${count}`}/>
    <Buttion label="Add" handleClick={()=>{handleClick(1)}}/>
    <Buttion label="Reduce" handleClick={()=>{handleClick(-1)}}/>
    </>
  )
}

export default Counter