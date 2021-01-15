import api from '@config/api';

export const login = (credentials: { email: string; password: string }) => {
  const { email, password } = credentials;
  return api.post('/auth/sign_in', { email, password });
};

export const bookService = (headers: any) => api.get('/books', headers);
