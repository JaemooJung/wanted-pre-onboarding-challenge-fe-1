import {useRecoilState} from "recoil";
import {todoToUpdateState} from "../../../states/todo/todoToUpdateState";
import {useEffect, useState} from "react";
import {useUpdateTodo} from "../../../hooks/todos";

const useEditTodoForm = () => {
  const [todoToUpdate, setTodoToUpdate] = useRecoilState(todoToUpdateState);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const updateTodo = useUpdateTodo();

  useEffect(() => {
    setTitle(todoToUpdate?.title ?? "");
    setContent(todoToUpdate?.content ?? "");
  },[todoToUpdate]);

  const handleUpdateTodo = () => {
    if (title === "") {
      alert("할 일을 입력해주세요.");
      return;
    }
    if (!todoToUpdate) { return };
    updateTodo.mutate({id: todoToUpdate.id, requestBody: {title, content}});
  }

  const handleCancel = () => {
    setTodoToUpdate(null);
  }

  return {
    title,
    content,
    setTitle,
    setContent,
    handleUpdateTodo,
    handleCancel
  }
}

export default useEditTodoForm;