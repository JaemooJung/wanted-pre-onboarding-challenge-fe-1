import TodoForm from "./TodoForm";
import useAddTodoForm from "./hooks/useAddTodoForm";

const AddTodoForm = () => {
  const {
    title,
    content,
    setTitle,
    setContent,
    handleCreateTodo,
    handleCancel
  } = useAddTodoForm();

  return (
    <TodoForm title={title}
              content={content}
              setTitle={setTitle}
              setContent={setContent}
              handleCancel={handleCancel}
              handleSubmit={handleCreateTodo}
              cancelLabel={"취소"}
              submitLabel={"추가"}
    />
  )
}

export default AddTodoForm