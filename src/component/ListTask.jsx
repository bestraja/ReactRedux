import React from 'react'
import Tsk from './Tsk'
import { useSelector } from 'react-redux'
function ListTask() {
    const todo =useSelector(state=>state.todo)
    console.log(todo)
    return (
    <div  className="cards">
        {todo.map((el,index)=><Tsk el={el} key={index}/>)}
    </div>
  )
}

export default ListTask






    

        
    
    
        
        