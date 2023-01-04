import {useFetcher} from './useFetcher';
import {useMutation} from "react-query";

export interface AuthInfo {
  email: string;
  password: string;
}

export const useSignUpUser = () => {
  const fetcher = useFetcher();

  return useMutation({
    mutationFn: async (authInfo: AuthInfo) => {
      const response = await fetcher('/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(authInfo),
      });
      if (!response.ok) {
        throw response;
      }
      return response.json();
    },
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem('accessToken', data.token);
    },
    onError: (res: Response) => {
      if (res.status === 409) {
        alert('이미 존재하는 유저입니다.');
      } else {
        alert('알 수 없는 에러가 발생했습니다.');
      }
    }
  })
}