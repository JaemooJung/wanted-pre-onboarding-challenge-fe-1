import {atom} from "recoil";
import {Todo} from "../../hooks/todos";

export const todoToUpdateState = atom<Todo | null>({
  key: 'todoToUpdateState',
  default: null,
});