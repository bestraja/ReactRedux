import React from 'react'

import { useNavigate } from 'react-router-dom';

function Tsk({el}) {
    const navigate=useNavigate()
    const handleEditClick = () => {
        navigate(`/edit/${el.id}`);
      };
  return (
    <div className="card">
    <h2 className="card-title">Title:{el.title}</h2>
    <p className="card-description">Description :{el.description}</p>
    <div className="card-details">
        ID: {el.id}
      <div className="card-additional-notes">
        <strong>isDone:{el.chekTsk}</strong> 
        <input  type='checkbox' checked={el.chekTsk}/>
      </div>
    
    </div>
             <button 
        onClick={handleEditClick} 
        style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
      >
        Edit
      </button>
        
  </div>
   

  )
}

export default Tsk