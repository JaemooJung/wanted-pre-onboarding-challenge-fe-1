export const BASE_API_URL = 'http://localhost:8080'

export const useFetcher = () => {
  const accessToken = localStorage.getItem('accessToken');

  return async (url: string, options: RequestInit = {}) => {
    return await fetch(BASE_API_URL + url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `${accessToken}`,
      },
    });
  }
}