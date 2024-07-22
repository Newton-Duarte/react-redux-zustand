import { FormEvent, useState } from "react"

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    console.log({ newTodo });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={({ target }) => setNewTodo(target.value)} />
      <button type="submit">Adicionar</button>
    </form>
  )
}
