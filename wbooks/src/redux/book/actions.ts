import { BOOKS_MOCK } from '@constants/mockBooks';
import { Dispatch } from 'react';

export const actions = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE'
} as const;

const actionsCreator = () => {
  return function getBooks(dispatch: Dispatch<any>) {
    dispatch({ type: actions.GET_BOOKS });
    const response = { ok: true, data: BOOKS_MOCK, error: '' };
    if (response.ok) {
      dispatch({ type: actions.GET_BOOKS_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: actions.GET_BOOKS_FAILURE, payload: response.error });
    }
  };
};

export { actionsCreator };
