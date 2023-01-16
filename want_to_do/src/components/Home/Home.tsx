import {Outlet} from "react-router-dom";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import EditTodoForm from "./EditTodoForm";
import useHome from "./hooks/useHome";

const Home = () => {

  const {
    handleLogout,
    toggleEditMode,
    isEditModeOn,
    todoToUpdate,
    toggleAddTodoForm,
    isAddTodoFormDisplayed,
  } = useHome();

  const HeaderMenu = () => {
    return (
      <div className={`flex flex-row gap-2`}>
        <button onClick={handleLogout}>로그아웃</button>
        <h1>Want-To-Do</h1>
        <button onClick={toggleEditMode}>
          {isEditModeOn ? "완료" : "수정"}
        </button>
        <button onClick={toggleAddTodoForm}>
          {isAddTodoFormDisplayed ? "x" : "+"}
        </button>
      </div>
    )
  }

  return (
    <div className={`flex h-full w-full`}>
      <div className={`flex flex-col`}>
        <HeaderMenu />
        {isAddTodoFormDisplayed && <AddTodoForm />}
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