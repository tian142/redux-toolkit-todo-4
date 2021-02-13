import React, { useState } from "react"

import { addTodo } from "./todoSlice"

import { useDispatch } from "react-redux"

export const AddTodo = () => {
  const [todo, setTodo] = useState("")
  const dispatch = useDispatch()

  const onInputChange = (e) => setTodo(e.target.value)
  const onSubmit = () => dispatch(addTodo(todo))

  return (
    <div>
      <h1>Todo List</h1>
      <span>
        <input value={todo} onChange={onInputChange} />
      </span>
      <button onClick={onSubmit}>Add Todo</button>
    </div>
  )
}
