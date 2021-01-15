import api from '@config/api';

export const login = ({ email, password }: { email: string; password: string }) =>
  api.post('/auth/sign_in', { email, password });

export const bookService = (headers: any) => api.get('/books', headers);
