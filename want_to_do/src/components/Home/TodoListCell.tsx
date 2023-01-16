import React from "react";
import {Todo, useDeleteTodo} from "../../hooks/todos";
import {useRecoilState, useRecoilValue} from "recoil";
import {isEditModeOnState} from "../../states/todo/isEditModeOnState";
import {todoToUpdateState} from "../../states/todo/todoToUpdateState";
import {useNavigate} from "react-router-dom";
import useTodoListCell from "./hooks/useTodoListCell";

interface TodoListCellProps {
  todo: Todo;
}

export const TodoListCell = ({todo}: TodoListCellProps) => {

  const {
    handleEditTodo,
    handleDeleteTodo,
    showDetailedContent,
    isEditModeOn,
    previewContent
  } = useTodoListCell(todo);

  const EditTodoButtons = () => {
    return (
      <div className={`flex flex-row gap-2 px-2`}>
        <button onClick={handleEditTodo}>수정</button>
        <button className={`text-red-500`}
                onClick={handleDeleteTodo}>삭제</button>
      </div>
    )
  }

  const TodoContentPreview = () => {
    return (
      <span className={`p-4`}>{previewContent(todo.content)}</span>
    )
  }

  return (
    <div className={`flex flex-row bg-neutral-100 my-2 rounded-lg
                     items-center justify-between 
                     hover:cursor-pointer hover:bg-neutral-200`}
         onClick={showDetailedContent}
    >
      <span className={`p-4`}>{todo.title}</span>
      {isEditModeOn && <EditTodoButtons />}
      {!isEditModeOn && <TodoContentPreview />}
    </div>
  )
}