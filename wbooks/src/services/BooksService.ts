import { BOOKS_MOCK } from '@constants/mockBooks';

export const bookService = () => {
  return Promise.resolve({
    ok: true,
    data: BOOKS_MOCK
  }) as Promise<any>;
};
