import {useUpdateTodo} from "../../hooks/todos";
import {useEffect, useState} from "react";
import {useRecoilValue} from "recoil";
import {todoToUpdateState} from "../../states/todoToUpdateState";

const EditTodoForm = () => {
  const todoToUpdate = useRecoilValue(todoToUpdateState);
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
    <div className={`flex flex-col items-center justify-center`}>
      <span>Title</span>
      <input className={`bg-neutral-100`}
             type="text"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
      />
      <span>Content</span>
      <input className={`bg-neutral-100`}
             type="text"
             value={content}
             onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleUpdateTodo}> 수정하기 </button>
    </div>
  )
}

export default EditTodoForm