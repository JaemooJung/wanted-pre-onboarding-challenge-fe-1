import {useUpdateTodo} from "../../hooks/todos";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {todoToUpdateState} from "../../states/todoToUpdateState";
import TodoForm from "./TodoForm";

const EditTodoForm = () => {
  const [todoToUpdate, setTodoToUpdate] = useRecoilState(todoToUpdateState);
  if (!todoToUpdate) { return null; }

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const updateTodo = useUpdateTodo();

  useEffect(() => {
    setTitle(todoToUpdate.title);
    setContent(todoToUpdate.content);
  },[todoToUpdate]);

  const handleUpdateTodo = () => {
    if (title === "") {
      alert("할 일을 입력해주세요.");
      return;
    }
    updateTodo.mutate({id: todoToUpdate.id, requestBody: {title, content}});
  }

  return (
    <TodoForm title={title}
              content={content}
              setTitle={setTitle}
              setContent={setContent}
              handleCancel={() => {setTodoToUpdate(null)}}
              handleSubmit={handleUpdateTodo}
              cancelLabel={"취소"}
              submitLabel={"수정"}
    />
  )
}

export default EditTodoForm