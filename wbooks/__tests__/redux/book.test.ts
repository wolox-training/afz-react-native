import api from '../../src/config/api';
import BookReducer, { initialState } from '../../src/redux/book/reducer';
import { actions, targets } from '../../src/redux/book/actions';
import { bookService } from '../../src/services/BooksService';

const action = {
  type: actions.GET_BOOKS,
  target: targets.books,
  service: bookService
};

const actionSuccess = {
  type: actions.GET_BOOKS_SUCCESS,
  target: targets.books,
  service: bookService
};

export const login = (credentials: { email: string; password: string }) => {
  const { email, password } = credentials;
  return api.post('/auth/sign_in', { email, password });
};

describe('BookReducer test', () => {
  it('should handle GET_BOOKS', () => {
    expect(BookReducer(undefined, action)).toEqual({
      ...initialState,
      booksLoading: true
    });
  });

  it('should handle GET_BOOKS_SUCCESS', () => {
    expect(BookReducer(undefined, actionSuccess)).toEqual({
      ...initialState,
      booksLoading: false,
      books: undefined
    });
  });
});
