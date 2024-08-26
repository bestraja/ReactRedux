import React from 'react'
import { useState ,useRef,} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { AddTaskk } from '../redux/action/Action';
function AddTask()
 {
  const [Id, setId] = useState();
const [Description, setDes] = useState('')
const [Title, setTitle] = useState('')

const chekTsk=useRef()
const dispatch=useDispatch();
const navigate=useNavigate()
const handlleSubmit=(e)=>
  {
    
    e.preventDefault();
    const acceptConditionsValue=chekTsk.current.cheked;
    dispatch(AddTaskk({id:Id , title:Title,description:Description,chekTsk:acceptConditionsValue}) )
    navigate('/')
  }
  return (
    <div>
        <form  onSubmit={handlleSubmit} >
        <label>Id:</label>
        <input type='text'placeholder='id' id='id'onChange={(e)=>setId(e.target.value)}/>
        <label>Description</label>
        <input type='text' placeholder='description'  onChange={(e)=>setDes(e.target.value)}/>
        <label>Title</label>
        <input type='text' placeholder='Title'onChange={(e)=>setTitle(e.target.value)}/>
        <input  type='checkbox' ref={chekTsk}/>
        <button type='submit' >Save Task</button>
      </form>
    </div>
  )
}

export default AddTask