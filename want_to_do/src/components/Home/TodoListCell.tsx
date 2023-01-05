import {Todo, useDeleteTodo} from "../../hooks/todos";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {isEditModeOnState} from "../../states/isEditModeOnState";
import {todoToUpdateState} from "../../states/todoToUpdateState";

interface TodoListCellProps {
  todo: Todo;
}

const previewContent = (content: string) => {
  if (content.length > 8) {
    return content.slice(0, 10) + "...";
  }
  return content;
}

export const TodoListCell = ({todo}: TodoListCellProps) => {

  const isEditModeOn = useRecoilValue(isEditModeOnState);
  const [todoToUpdate, setTodoToUpdate] = useRecoilState(todoToUpdateState);
  const deleteTodo = useDeleteTodo();

  const showDetailedContent = () => {

  }

  const handleEditTodo = () => {
    todoToUpdate ? setTodoToUpdate(null) : setTodoToUpdate(todo);
  }

  const handleDeleteTodo = () => {
    deleteTodo.mutate(todo.id);
  }

  return (
    <div className={`flex flex-row bg-neutral-100 m-2 items-center justify-between`}

    >
      <span className={`p-4`}>{todo.title}</span>
      {isEditModeOn &&
        <div className={`flex flex-row gap-2 px-2`}>
            <button onClick={handleEditTodo}>수정</button>
            <button onClick={handleDeleteTodo}>삭제</button>
        </div>
      }
      {!isEditModeOn &&
        <span className={`p-4`}>{previewContent(todo.content)}</span>
      }
    </div>
  )
}