import React from 'react'
import { IDelate, IFavorite, ITodosItem, IToggale } from './Todos'


const TodoItem = ({id, title, status, isfavorite, toggal, delate, favorite}:ITodosItem & IToggale & IDelate & IFavorite) => {
  return (
    <div className='todoitem'>
      {title}
      <button className='btn com' onClick={()=>{toggal(id, !status)}}>{status? "Complated" : "InComplated"}</button>
      <button className='btn fev' onClick={()=>{favorite(id, !isfavorite )}} >{isfavorite? "Favorite" : "Not Favorite"}</button>
      <button className='btn del' onClick={()=>{delate(id)}} >Delate</button>
    </div>
  )
}

export default TodoItem