import {Outlet, useNavigate} from "react-router-dom";
import {useState} from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import {useRecoilState, useRecoilValue} from "recoil";
import {isEditModeOnState} from "../../states/isEditModeOnState";
import EditTodoForm from "./EditTodoForm";
import {todoToUpdateState} from "../../states/todoToUpdateState";

const Home = () => {
  const navigate = useNavigate();
  const [isAddTodoOn, setIsAddTodoOn] = useState(false);
  const [isEditModeOn, setIsEditModeOn] = useRecoilState(isEditModeOnState);
  const todoToUpdate = useRecoilValue(todoToUpdateState);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  }

  const toggleAddTodo = () => {
    setIsEditModeOn(false);
    setIsAddTodoOn(!isAddTodoOn);
  }

  const toggleEditMode = () => {
    setIsEditModeOn(!isEditModeOn);
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
    <div className={`flex flex-row h-full w-full`}>
      <div className={`flex flex-col`}>
        <HeaderMenu />
        {isAddTodoOn && <AddTodoForm toggleAddTodo={toggleAddTodo}/>}
        {todoToUpdate && <EditTodoForm />}
        <TodoList/>
      </div>
      <div className={`flex flex-col`}>
        <Outlet />
      </div>
    </div>
  )
}

export default Home