import { FormEvent, useState } from "react"
import { add, useAppDispatch } from "../store"

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    dispatch(add({ newTodo }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={({ target }) => setNewTodo(target.value)} />
      <button type="submit">Adicionar</button>
    </form>
  )
}
