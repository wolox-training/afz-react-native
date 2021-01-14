import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

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

  it('should dispatch action', () => {
    const store = mockStore(initialState);

    store.dispatch(BookActions.getBooks());

    const actionsStore = store.getActions();
    const expectedPayload = { type: '@@BOOKS/GET_BOOKS', target: 'books' };
    expect(actionsStore).toEqual([expectedPayload]);
  });
});
