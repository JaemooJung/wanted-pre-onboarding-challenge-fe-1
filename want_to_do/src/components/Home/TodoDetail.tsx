import {useNavigate, useParams} from "react-router-dom";
import {useGetTodoById} from "../../hooks/todos";

const TodoDetail = () => {
  const { id } = useParams();
  const {data} = useGetTodoById(id || '');
  const navigate = useNavigate();

  const closeTodoDetail = () => {
    navigate('/home');
  }

  return (
    <div className={`flex flex-col mx-4 p-4 bg-neutral-200 items-start rounded w-72`}>
      <span className={`text-4xl mb-8`}> Detail </span>
      <span className={`text-2xl`}> Title </span>
      <span className={`mb-4`}>{data?.data.title}</span>
      <span className={`text-2xl`}> Content </span>
      <span className={`mb-8`}>{data?.data.content}</span>
      <button onClick={closeTodoDetail}>닫기</button>
    </div>
  )
}

export default TodoDetail