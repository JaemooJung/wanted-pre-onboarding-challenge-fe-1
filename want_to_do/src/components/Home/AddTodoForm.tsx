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
      <button onClick={handleCreateTodo}> 추가하기 </button>
    </div>
  )
}

export default AddTodoForm