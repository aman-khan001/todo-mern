import React, { useContext } from 'react'
import Items from './Items'
import { TodoContext } from '../store/TodoContext'

const ItemsList = () => {
  const {items} = useContext(TodoContext)
  return (
    <div className='text-danger fw-bold'>
        {items.map(item => <Items key={item.name} name={item.name} date={item.date} ></Items>)}
    </div>
  )
}

export default ItemsList