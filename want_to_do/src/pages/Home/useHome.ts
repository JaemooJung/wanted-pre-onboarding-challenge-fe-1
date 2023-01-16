import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {isAddTodoFormDisplayedState} from "../../states/todo/isAddTodoFormDisplayedState";
import {isEditModeOnState} from "../../states/todo/isEditModeOnState";
import {todoToUpdateState} from "../../states/todo/todoToUpdateState";

const useHome = () => {
  const navigate = useNavigate();
  const [isAddTodoFormDisplayed, setIsAddTodoFormDisplayed] = useRecoilState(isAddTodoFormDisplayedState);
  const [isEditModeOn, setIsEditModeOn] = useRecoilState(isEditModeOnState);
  const [todoToUpdate, setTodoToUpdate] = useRecoilState(todoToUpdateState);

  const handleLogout = () => {
    if (!confirm("정말 로그아웃 하시겠습니까?")) return;
    localStorage.removeItem('accessToken');
    navigate('/');
  }

  const toggleAddTodoForm = () => {
    setIsEditModeOn(false);
    setIsAddTodoFormDisplayed(!isAddTodoFormDisplayed);
    setTodoToUpdate(null);
  }

  const toggleEditMode = () => {
    if (todoToUpdate) {
      setTodoToUpdate(null);
    }
    setIsEditModeOn(!isEditModeOn);
    setIsAddTodoFormDisplayed(false);
  }

  return {
    handleLogout,
    toggleEditMode,
    isEditModeOn,
    todoToUpdate,
    toggleAddTodoForm,
    isAddTodoFormDisplayed,
  }

}

export default useHome