import { BOOKS_MOCK } from '@constants/mockBooks';

const getBooks = () => {
  return {
    type: 'GET_BOOKS',
    books: BOOKS_MOCK
  };
};

export { getBooks };
