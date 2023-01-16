import {useCreateTodo} from "../../../hooks/todos";
import {useState} from "react";
import {useSetRecoilState} from "recoil";
import {isAddTodoFormDisplayedState} from "../../../states/todo/isAddTodoFormDisplayedState";

const useAddTodoForm = () => {
  const createTodo = useCreateTodo();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const setIsAddTodoFormDisplayed = useSetRecoilState(isAddTodoFormDisplayedState);

  const handleCreateTodo = () => {
    if (title === "") {
      alert("할 일을 입력해주세요.");
      return;
    }
    createTodo.mutate({title, content});
    setTitle("");
    setContent("");
  }

  const handleCancel = () => {
    setIsAddTodoFormDisplayed(false);
  }

  return {
    title,
    content,
    setTitle,
    setContent,
    handleCreateTodo,
    handleCancel,
  }
}

export default useAddTodoForm;