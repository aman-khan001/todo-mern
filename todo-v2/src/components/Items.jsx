import React, { useContext } from 'react'
import { TodoContext } from '../store/TodoContext'

const Items = ({name, date}) => {
  const {deleteHandler} = useContext(TodoContext)
  return (
    <div className="bg-light   px-1
     mt-4 rounded d-flex gap-3" style={{alignItems: "center", justifyContent: "space-between"}}>
      <div className='pt-3'>
        <p>{name}</p>
      </div>
      <div  className='pt-3'>
        <p>{date}</p>
      </div>
      <button onClick={()=> deleteHandler(name)} className="btn-danger btn px-4">-</button>
    </div>
  )
}

export default Items