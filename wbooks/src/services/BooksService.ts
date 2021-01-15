import api from '@config/api';
import { ApiResponse, ApiErrorResponse, CLIENT_ERROR } from 'apisauce';

export const login = (email: string, password: string) => {
  return api.post('/auth/sign_in', { email, password });
};

export const bookService = async () => {
  try {
    const user = await login('ignacio.coluccio@wolox.com.ar', 'wolox1189');
    return Promise.resolve({
      ok: true,
      data: (await api.get('/books', user.headers)).data
    }) as Promise<ApiResponse<any>>;
  } catch (e) {
    return Promise.resolve({
      ok: false,
      problem: CLIENT_ERROR,
      originalError: e.message
    }) as Promise<ApiErrorResponse<any>>;
  }
};
