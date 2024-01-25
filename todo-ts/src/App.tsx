import { useState, useEffect } from 'react'
import { Todos } from './components/Todos'
import {
  type FilterValue,
  type TodoId,
  type TodoTitle,
  type Todo as TodoType,
  type TodosList
} from './types'
import { TODO_FILTERS } from './const'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { fetchTodos, updateTodos } from './services/todos'

const App: React.FC = (): JSX.Element => {
  const [todos, setTodos] = useState([] as TodosList)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )

  useEffect(() => {
    fetchTodos().then((todos) => {
      setTodos(todos)
    }).catch((e) => { console.log(e) })
  }, [])

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
    updateTodos(newTodos).catch((e) => { console.log(e) })
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
    updateTodos(newTodos).catch((e) => { console.log(e) })
  }

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    updateTodos(newTodos).catch((e) => { console.log(e) })
  }

  const activeCount = todos.filter((todo) => !todo.completed).length

  const filteredTodos = todos.filter((todo) => {
    switch (filterSelected) {
      case TODO_FILTERS.ACTIVE:
        return !todo.completed
      case TODO_FILTERS.COMPLETED:
        return todo.completed
      default:
        return todo
    }
  })

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToggle={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={todos.length - activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveCompleted}
      />
    </div>
  )
}

export default App
