import React from 'react'
import { useDispatch } from 'react-redux'
import { filterTask } from '../redux/action/Action'

function Filter() {
    const dispatch = useDispatch()
  return (
    <div>
<form >
        <label htmlFor="search"> The Done List</label>
        <input type="checkbox" onChange={(e)=>dispatch(filterTask(e.target.checked))} />
       </form>
    </div>
  )
}

export default Filter