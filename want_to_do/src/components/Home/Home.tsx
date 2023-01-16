import {Outlet, useNavigate} from "react-router-dom";
import {useState} from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import {useRecoilState} from "recoil";
import {isEditModeOnState} from "../../states/isEditModeOnState";
import EditTodoForm from "./EditTodoForm";
import {todoToUpdateState} from "../../states/todoToUpdateState";

const Home = () => {
  const navigate = useNavigate();
  const [isAddTodoOn, setIsAddTodoOn] = useState(false);
  const [isEditModeOn, setIsEditModeOn] = useRecoilState(isEditModeOnState);
  const [todoToUpdate, setTodoToUpdate] = useRecoilState(todoToUpdateState);

  const handleLogout = () => {
    if (!confirm("정말 로그아웃 하시겠습니까?")) return;
    localStorage.removeItem('accessToken');
    navigate('/');
  }

  const toggleAddTodo = () => {
    setIsEditModeOn(false);
    setIsAddTodoOn(!isAddTodoOn);
  }

  const toggleEditMode = () => {
    if (todoToUpdate) {
      setTodoToUpdate(null);
    }
    setIsEditModeOn(!isEditModeOn);
    setIsAddTodoOn(false);
  }

  const HeaderMenu = () => {
    return (
      <div className={`flex flex-row gap-2`}>
        <button onClick={handleLogout}>로그아웃</button>
        <h1>Want-To-Do</h1>
        <button onClick={toggleEditMode}>
          {isEditModeOn ? "완료" : "수정"}
        </button>
        <button onClick={toggleAddTodo}>
          {isAddTodoOn ? "x" : "+"}
        </button>
      </div>
    )
  }

  return (
    <div className={`flex h-full w-full`}>
      <div className={`flex flex-col`}>
        <HeaderMenu />
        {isAddTodoOn && <AddTodoForm toggleAddTodo={toggleAddTodo}/>}
        {todoToUpdate && <EditTodoForm />}
        <TodoList/>
      </div>
      <div className={`absolute left-1/2 transform -translate-x-1/2`}>
        <Outlet />
      </div>
    </div>
  )
}

export default Home