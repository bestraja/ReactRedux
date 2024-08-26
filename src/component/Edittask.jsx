import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTasks } from '../redux/action/Action';
import { useNavigate, useParams } from 'react-router-dom';
export default function Edittask() {
  
  const {id}=useParams()
  console.log(id)
  const data =useSelector(state=>state.todo)
  const obj=data.find(el=>el.id==id)
  console.log(obj)
  const [descriptionedit, setDescription] = useState(obj.description); 
  const [titleedit, setTitle] = useState(obj.title); 
  const refChecked = useRef(obj.chekTsk); 
   const dispatch = useDispatch();
   const navigate=useNavigate()
   
const handleEdit = (e) => {
    e.preventDefault();
    const isChecked = refChecked.current.checked; 
    dispatch(editTasks({id:id, title:titleedit,description:descriptionedit,chekTsk:isChecked})); 
    navigate('/')
  };

  return (
    <div>
      <form className="verifierEdit" onSubmit={handleEdit}>
      <label >Title</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={titleedit} 
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          placeholder="Description"
          value={descriptionedit} 
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="completed">Completed</label>
        <input
          type="checkbox"
          id="completed"
          ref={refChecked} 
        />
        <button type="submit">Envoyer le formulaire</button>
      </form>
    </div>
  );
}
