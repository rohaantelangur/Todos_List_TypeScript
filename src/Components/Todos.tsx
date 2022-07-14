import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem';

export interface ITodosItem{
  id:number;
  title:string;
  status:boolean;
  isfavorite:boolean;
}

export interface IToggale {
  toggal:(value: number , status:boolean)=>void;
}

export interface IDelate {
  delate:(value: number)=>void;
}

export interface IFavorite {
  favorite:(value: number, status:boolean)=>void;
}

const Todos = () => {
  const [Todos, setTodos] = useState<ITodosItem[]>([])
  const handleAdd=(title: string)=>{
      const payload = {
          title,
          isfavorite:false,
          status:false,
          id:Todos.length+1
      };
      axios.post("http://localhost:8080/todos/",payload).then((res)=>{
        getdata()
      })
      
  }

  const toggal = (id: number,status: boolean) =>{
    axios.patch(`http://localhost:8080/todos/${id}`,{status:status}).then((res)=>{
      getdata()
    })
  }

  const delate = (id: number)=>{
    axios.delete(`http://localhost:8080/todos/${id}`).then((res)=>{
      getdata()
    })
  }

  const favorite = (id: number, status:boolean)=>{
    axios.patch(`http://localhost:8080/todos/${id}`,{isfavorite:status}).then((res)=>{
      getdata()
    })
  }

  const getdata=()=>{
    axios.get("http://localhost:8080/todos").then((res)=>{
      setTodos(res.data)
    })
  }
useEffect(() => {
  getdata()
}, [])

  return (
    <div>
        <TodoInput onClick={handleAdd} />
        {
          Todos.length > 0 && Todos.map((item)=>{return(
             <TodoItem key={item.id} {...item} toggal={toggal} delate={delate} favorite={favorite}/>
          )})
        }
    </div>
  )
}

export default Todos