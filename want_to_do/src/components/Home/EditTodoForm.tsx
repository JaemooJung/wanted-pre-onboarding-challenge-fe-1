import {useUpdateTodo} from "../../hooks/todos";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {todoToUpdateState} from "../../states/todoToUpdateState";

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
    <div className={`flex flex-col items-center justify-center 
                    bg-neutral-200 p-4 m-2 rounded-lg`}>
      <span>Title</span>
      <input className={`bg-neutral-100 w-2/3 h-8 rounded mb-4`}
             type="text"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
      />
      <span>Content</span>
      <input className={`bg-neutral-100 w-2/3 h-8 rounded mb-6`}
             type="text"
             value={content}
             onChange={(e) => setContent(e.target.value)}
      />
      <div className={`flex flex-row gap-8`}>
        <button onClick={() => setTodoToUpdate(null)}> 취소 </button>
        <button onClick={handleUpdateTodo}> 수정하기 </button>
      </div>
    </div>
  )
}

export default EditTodoForm