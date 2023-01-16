import {useRecoilState, useRecoilValue} from "recoil";
import {isEditModeOnState} from "../../../states/todo/isEditModeOnState";
import {todoToUpdateState} from "../../../states/todo/todoToUpdateState";
import {Todo, useDeleteTodo} from "../../../hooks/todos";
import {useNavigate} from "react-router-dom";
import React from "react";

const useTodoListCell = (todo: Todo) => {
  const isEditModeOn = useRecoilValue(isEditModeOnState);
  const [todoToUpdate, setTodoToUpdate] = useRecoilState(todoToUpdateState);
  const deleteTodo = useDeleteTodo();
  const navigate = useNavigate();

  const showDetailedContent = () => {
    navigate(`/home/${todo.id}`);
  }

  const handleEditTodo = (event: React.MouseEvent) => {
    event.stopPropagation()
    todoToUpdate ? setTodoToUpdate(null) : setTodoToUpdate(todo);
  }

  const handleDeleteTodo = (event: React.MouseEvent) => {
    event.stopPropagation()
    confirm("정말 삭제하시겠습니까?") && deleteTodo.mutate(todo.id);
  }

  const previewContent = (content: string) => {
    if (content.length > 8) {
      return content.slice(0, 10) + "...";
    }
    return content;
  }

  return {
    handleEditTodo,
    handleDeleteTodo,
    showDetailedContent,
    isEditModeOn,
    previewContent
  }
}

export default useTodoListCell;