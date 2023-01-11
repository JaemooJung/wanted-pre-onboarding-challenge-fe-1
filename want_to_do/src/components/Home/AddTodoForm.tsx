import {useCreateTodo} from "../../hooks/todos";
import {useState} from "react";
import TodoForm from "./TodoForm";

interface AddTodoFormProps {
  toggleAddTodo: () => void;
}

const AddTodoForm = ({toggleAddTodo}: AddTodoFormProps) => {
  const createTodo = useCreateTodo();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreateTodo = () => {
    if (title === "") {
      alert("할 일을 입력해주세요.");
      return;
    }
    createTodo.mutate({title, content});
    setTitle("");
    setContent("");
  }

  return (
    <TodoForm title={title}
              content={content}
              setTitle={setTitle}
              setContent={setContent}
              handleCancel={toggleAddTodo}
              handleSubmit={handleCreateTodo}
              cancelLabel={"취소"}
              submitLabel={"추가"}
    />
  )
}

export default AddTodoForm