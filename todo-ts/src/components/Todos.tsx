import {
  type TodosList,
  type TodoId,
  type Todo as TodoType
} from '../types'
import { Todo } from './Todo'

interface Props {
  todos: TodosList
  onRemoveTodo: ({ id }: TodoId) => void
  onToggle: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggle }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onRemoveTodo={onRemoveTodo}
              onToggle={onToggle}
            />
          </li>
        )
      })}
    </ul>
  )
}
