export const BASE_API_URL = 'http://localhost:8080'

export const useFetcher = () => {
  const accessToken = localStorage.getItem('accessToken');

  return async (url: string,
                options: RequestInit = {},
                contentType: string = 'application/json') => {
    const res = await fetch(BASE_API_URL + url, {
      ...options,
      headers: {
        ...options.headers,
        'Content-Type': contentType,
        Authorization: `${accessToken}`,
      },
    });
    if (res.status === 401) {
        alert('로그인 정보가 없습니다. 다시 로그인해주세요.');
        localStorage.removeItem('accessToken');
        window.location.href = '/';
    }
    return res;
  }
}