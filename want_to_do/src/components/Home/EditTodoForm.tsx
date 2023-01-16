import TodoForm from "./TodoForm";
import useEditTodoForm from "./hooks/useEditTodoForm";

const EditTodoForm = () => {
  const {
    title,
    content,
    setTitle,
    setContent,
    handleUpdateTodo,
    handleCancel
  } = useEditTodoForm();

  return (
    <TodoForm title={title}
              content={content}
              setTitle={setTitle}
              setContent={setContent}
              handleCancel={handleCancel}
              handleSubmit={handleUpdateTodo}
              cancelLabel={"취소"}
              submitLabel={"수정"}
    />
  )
}

export default EditTodoForm