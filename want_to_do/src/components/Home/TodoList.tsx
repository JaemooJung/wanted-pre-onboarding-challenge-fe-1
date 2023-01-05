import {Todo, useGetTodos} from "../../hooks/todos";
import {TodoListCell} from "./TodoListCell";

const TodoList = () => {
  const {data, isLoading} = useGetTodos();

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <ul>
        {data?.data.map((todo: Todo) => (
          <li key={todo.id}>
            <TodoListCell todo={todo}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList