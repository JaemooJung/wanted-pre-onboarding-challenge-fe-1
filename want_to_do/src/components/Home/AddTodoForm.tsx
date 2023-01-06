import {useCreateTodo} from "../../hooks/todos";
import {useState} from "react";

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
    <div className={`flex flex-col items-center justify-center 
                    bg-neutral-200 p-4 m-2 rounded-lg`}
    >
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
        <button onClick={toggleAddTodo}> 취소 </button>
        <button onClick={handleCreateTodo}> 추가 </button>
      </div>
    </div>
  )
}

export default AddTodoForm