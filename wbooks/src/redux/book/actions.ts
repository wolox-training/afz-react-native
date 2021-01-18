import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import { bookService, login } from '@services/BooksService';
import { Dispatch } from 'redux';
import { ApiOkResponse } from 'apisauce';

export const actions = createTypes(completeTypes(['GET_BOOKS', 'LOGIN'], ['SET_SEARCH']), '@@BOOKS');

export const targets = { books: 'books', search: 'search' };

export const actionsBook = {
  getBooks: (headers: any) => ({
    type: actions.GET_BOOKS,
    target: targets.books,
    service: bookService,
    payload: headers
  }),
  setSearch: (search: string) => ({
    type: actions.SET_SEARCH,
    payload: search,
    target: targets.search
  })
};

const actionCreators = {
  login: (email: string, password: string) => ({
    type: actions.LOGIN,
    service: login,
    payload: { email, password },
    injections: [
      withPostSuccess((dispatch: Dispatch<any>, response: ApiOkResponse<any>) => {
        const { headers } = response;
        dispatch(actionsBook.getBooks(headers));
      })
    ]
  })
};

export default actionCreators;
