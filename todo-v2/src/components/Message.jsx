import React, { useContext } from 'react'
import { TodoContext } from '../store/TodoContext'

const Message = () => {
  const { items } = useContext(TodoContext)
  return (
    <>
    {items.length == 0 && <h2 className='text-center text-danger my-5'>Enjoy Your Day!</h2>}
    </>
  )
}

export default Message