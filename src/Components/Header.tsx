import React from 'react'

interface HeaderProps{
    label:string;
    children?:JSX.Element | JSX.Element[];
}
const Header = ({label,children}:HeaderProps) => {
  return (
    <>
    <h1>{label}</h1>
    {children}
    </>
  )
}

export default Header