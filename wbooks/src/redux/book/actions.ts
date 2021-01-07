import { BOOKS_MOCK } from '@constants/mockBooks';
import { useDispatch } from 'react-redux';

export const actions = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE'
} as const;

const GetBooks = () => {
  const dispatch = useDispatch();
  dispatch({ type: actions.GET_BOOKS, books: [], loading: true, error: '' });
  const response = { ok: true, data: BOOKS_MOCK };
  if (response.ok) {
    dispatch({ type: actions.GET_BOOKS_SUCCESS, books: response.data, loading: false, error: '' });
  } else {
    dispatch({ type: actions.GET_BOOKS_FAILURE, books: [], loading: false, error: 'Error data loaded' });
  }
};

export { GetBooks };
