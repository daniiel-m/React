import { type Todo, type TodosList } from '../types'
const API_URL = 'https://api.jsonbin.io/v3/b/65b065511f5677401f241ef0'

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch(`${API_URL}/latest`)
  if (!res.ok) {
    console.log('Error fetching')
    return []
  }
  const { record: todos } = await res.json() as { record: Todo[] }

  return todos
}

export const updateTodos = async (todos: TodosList): Promise<boolean> => {
  console.log(todos)
  const res = await fetch(API_URL, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': '$2a$10$jCa8G7Z4aq/wv2Dk.b5W0u8BBCl7oi9H3mI.tWUNPA/5bmAaHgl4.'
    },
    body: JSON.stringify(todos)
  })
  console.log(res)
  return res.ok
}
