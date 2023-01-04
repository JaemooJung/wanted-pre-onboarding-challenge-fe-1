import {useFetcher} from "./useFetcher";
import {useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "react-query";

export interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export const useGetTodos = () => {
  const fetcher = useFetcher();

  return useQuery({
    queryKey: 'todos',
    queryFn: async () => {
      const response = await fetcher('/todos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw response;
      }
      return response.json();
    },
  })
}