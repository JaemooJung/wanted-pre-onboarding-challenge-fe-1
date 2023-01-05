import {useFetcher} from './useFetcher';
import {useMutation} from "react-query";
import {useNavigate} from "react-router-dom";

export interface AuthInfo {
  email: string;
  password: string;
}

interface AuthResponse {
  message: string;
  token: string;
}

export const useSignUpUser = () => {
  const fetcher = useFetcher();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (authInfo: AuthInfo) => {
      const response = await fetcher('/users/create', {
        method: 'POST',
        body: JSON.stringify(authInfo),
      });
      if (!response.ok) {
        throw response;
      }
      return response.json();
    },
    onSuccess: (data: AuthResponse) => {
      alert('회원가입이 완료되었습니다.');
      localStorage.setItem('accessToken', data.token);
      navigate('/home');
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

export const useSignInUser = () => {
  const fetcher = useFetcher();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (authInfo: AuthInfo) => {
      const response = await fetcher('/users/login', {
        method: 'POST',
        body: JSON.stringify(authInfo),
      });
      if (!response.ok) {
        throw response;
      }
      return response.json();
    },
    onSuccess: (data: AuthResponse) => {
      alert('로그인이 완료되었습니다.');
      localStorage.setItem('accessToken', data.token);
      navigate('/home');
    },
    onError: (res: Response) => {
      if (res.status === 401) {
        alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
      } else {
        alert('알 수 없는 에러가 발생했습니다.');
      }
    }
  })
}
