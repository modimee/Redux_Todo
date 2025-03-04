import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todos/TodoSlice'
import { AiOutlineDelete } from "react-icons/ai";

function Todos() {

const todos = useSelector(state=>state.todos)
const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-4 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
               <AiOutlineDelete />

            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos