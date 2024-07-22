import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { add } from "../store"

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

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
