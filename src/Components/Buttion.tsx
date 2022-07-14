import React from 'react'

interface IButtonProps{
  label:string;
  handleClick:()=> void;
}

const Buttion = (props:IButtonProps) => {
  const {label,handleClick}=props
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

export default Buttion