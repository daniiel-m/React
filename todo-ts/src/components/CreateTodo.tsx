import { type TodoTitle } from '../types'
import { useState } from 'react'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}
export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  /*   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {

  } */

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="new-todo"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={() => {}}
        placeholder="Add Todo"
        autoFocus
      />
    </form>
  )
}
