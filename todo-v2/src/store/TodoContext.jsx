import { createContext, useEffect, useReducer } from "react";
import axios from 'axios'
export const TodoContext = createContext([])


export const TodoContextProvider = ({children})=>{

    const reducer = (current, action) => {
        let newItems = current;
        if (action.type == 'NEW_ITEM') {
          newItems = [action.payload.newItem, ...current]
        }
    
        else if (action.type === "DELETE_ITEMS"){
          newItems = newItems.filter(item => item.name !== action.payload.name)
        }

        else if (action.type === 'SET_ITEMS'){
          newItems = [action.payload.items]
        }
    
        return newItems
      }
      const [items, dispatch] = useReducer(reducer, [])
    
      useEffect(()=>{
        const fetchTodos = async ()=>{
          try {
            const response = await axios.get('https://todo-mern-un1z.onrender.com/')
            console.log(response.data)
            dispatch({type: "SET_ITEMS", payload: {items: response.data}})
          } catch (error) {
            
          }
        }
        fetchTodos()
      }, [])



      const addHandler = async (name, date) => {
        const response = await axios.post('https://todo-mern-un1z.onrender.com/add-todo', {name, date})
        console.log(response.data)
        console.log('data inserted')
        const addDispatcher = {
          type: "NEW_ITEM",
          payload: {
            newItem: response.data
          }
        }
        dispatch(addDispatcher)
    
    
        // setItems([{ name, date }, ...items]);
      };
    
      const deleteHandler = (name) => {
        const deleteDispatcher = {
          type: "DELETE_ITEMS",
          payload: {
            name
          }
        }
    
        dispatch(deleteDispatcher)
        // setItems(items.filter((el) => el.name !== name));
      };
    

    return <TodoContext.Provider value={{items, addHandler, deleteHandler}}>
        {children}
    </TodoContext.Provider>
}

