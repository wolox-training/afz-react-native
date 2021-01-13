import { BOOKS_MOCK } from '@constants/mockBooks';

export const bookService = () => {
  return Promise.resolve({
    ok: true,
    data: BOOKS_MOCK
  }) as Promise<any>;
};

/* export const bookService = () => {
  try {
    return Promise.resolve({
      ok: true,
      data: BOOKS_MOCK
    }) as Promise<any>;
  } catch (e) {
    return Promise.resolve({
      ok: false,
      problem: e.message
    }) as Promise<any>;
  }
}; */
