import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import Config from 'react-native-config';

import api from '../../src/config/api';
import BookReducer, { initialState } from '../../src/redux/book/reducer';
import BookActions, { actions, targets } from '../../src/redux/book/actions';
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

describe('BookActions test', () => {
  const middlewares = [thunk, fetchMiddleware];
  const mockStore = configureStore(middlewares);

  it('should dispatch action login', () => {
    const store = mockStore(initialState);

    store.dispatch(BookActions.login(Config.EMAIL_USER, Config.PASS_USER));

    const actionsStore = store.getActions();
    const expectedPayload = { type: '@@BOOKS/LOGIN' };
    expect(actionsStore).toEqual([expectedPayload]);
  });
});
