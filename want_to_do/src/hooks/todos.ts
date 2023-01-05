import {useFetcher} from "./useFetcher";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {isEditModeOnState} from "../states/isEditModeOnState";
import {useSetRecoilState} from "recoil";
import {todoToUpdateState} from "../states/todoToUpdateState";

export interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface GetTodosResponse {
  data: Todo[];
}

export const useGetTodos = () => {
  const fetcher = useFetcher();

  return useQuery({
    queryKey: ['todos'],
    queryFn: async ():Promise<GetTodosResponse> => {
      const response = await fetcher('/todos', {
        method: 'GET',
      });
      if (!response.ok) {
        throw response;
      }
      return response.json();
    },
  })
}

export interface TodoRequestBody {
  title: string;
  content: string;
}

export const useCreateTodo = () => {
  const fetcher = useFetcher();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (todo: TodoRequestBody) => {
      const response = await fetcher('/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
      });
      if (!response.ok) {
        throw response;
      }
      return response.json();
    },
    onError: (res: Response) => {
      alert("Error: " + res.status);
    },
    onSuccess: () => {
     return queryClient.invalidateQueries({queryKey: ['todos']})
    }
  })
}

interface UpdateTodoRequestParams {
  id: string;
  requestBody: TodoRequestBody;
}

export const useUpdateTodo = () => {
  const fetcher = useFetcher();
  const queryClient = useQueryClient();
  const setTodoToUpdate = useSetRecoilState(todoToUpdateState);

  return useMutation({
    mutationFn: async (param: UpdateTodoRequestParams) => {
      const response = await fetcher(`/todos/${param.id}`, {
        method: 'PUT',
        body: JSON.stringify(param.requestBody),
      });
      if (!response.ok) {
        throw response;
      }
      return response.json();
    },
    onError: (res: Response) => {
      alert("Error: " + res.status);
    },
    onSuccess: () => {
      setTodoToUpdate(null);
      return queryClient.invalidateQueries({queryKey: ['todos']})
    }
  })
}

export const useDeleteTodo = () => {
  const fetcher = useFetcher();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await fetcher(`/todos/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw response;
      }
      return response.json();
    },
    onError: (res: Response) => {
      alert("Error: " + res.status);
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({queryKey: ['todos']})
    }
  })
}